/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import CategoryWrapper from "./CategoryWrapper";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../components/Card";

export default function CategoryPage() {
  const { category } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/categories/${category}`
        );
        setItems(response.data.items);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryData();
  }, [category]);

  return (
    <div className="px-6 lg:px-12 mt-6 mb-6">
      <h1 className="text-center text-2xl font-bold text-secondary sm:text-6xl capitalize mb-3">
        {category}
      </h1>
      <CategoryWrapper />
      {loading ? (
        <div className="flex justify-center">
          <p className="text-lg text-gray-600">Loading...</p>
        </div>
      ) : (
        <>
          {items && items.length > 0 ? (
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {items.map((item) => (
                <Card item={item} key={item._id} />
              ))}
            </ul>
          ) : (
            <p className="text-center text-lg text-gray-600">No items found.</p>
          )}
        </>
      )}
    </div>
  );
}
