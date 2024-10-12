/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

export default function Search() {
  const searchText = useParams();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const queryParam = params.get("query");
    if (queryParam) {
      setQuery(queryParam);
    }
  }, []);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      try {
        const endpoint = query
          ? `http://localhost:3000/api/items`
          : `http://localhost:3000/api/all-items`; // Adjust endpoint as needed
        const response = await axios.get(endpoint, {
          params: query ? { q: query } : {},
        });
        setResults(response.data.items || []);
      } catch (error) {
        console.error(error.message || "Error fetching data");
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, [query]);

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="px-6 lg:px-12 py-8 bg-gray-50">
      <h1 className="text-center text-3xl py-2 font-bold text-orange-600 sm:text-6xl sm:leading-relaxed">
        Search
      </h1>
      <div className="bg-white shadow-lg md:max-w-3xl mx-auto p-2 rounded-lg relative flex items-center border border-gray-200">
        <IoSearchOutline className="w-5 h-5 mr-2 text-gray-600" />
        <input
          value={query}
          className="outline-none w-full placeholder:text-gray-400 py-1 px-2 border-none rounded-lg focus:border-orange-400 focus:ring-2 focus:ring-orange-400 transition duration-200"
          onChange={handleSearch}
          name="query"
          type="search"
          placeholder="Search for a recipe"
          id="search"
          required
        />
      </div>
      {loading && <p className="text-center py-4 text-gray-500">Loading...</p>}
      <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {results.map((item) => (
          <Card item={item} key={item._id}></Card>
        ))}
      </ul>
    </div>
  );
}
