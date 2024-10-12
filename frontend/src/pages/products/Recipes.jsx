import axios from "axios";
import { useState, useEffect } from "react";
import CategoryWrapper from "../category/CategoryWrapper";
import Card from "../../components/Card";

export default function Recipes() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getLatestItems = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/all-items");

        // Check for the nested 'items' property and set it appropriately
        if (response.data && Array.isArray(response.data.items)) {
          setItems(response.data.items);
        } else {
          console.error("Unexpected response structure:", response.data);
        }
      } catch (error) {
        setError("Error fetching items.");
        console.error("Error fetching items:", error);
      } finally {
        setLoading(false);
      }
    };

    getLatestItems();
  }, []);

  return (
    <div className="px-6 lg:px-12 mt-6 mb-6">
      <h1 className="text-center text-xl font-bold text-secondary sm:text-6xl capitalize mb-3">
        All Recipes
      </h1>
      <CategoryWrapper />
      {loading ? (
        <div className="flex justify-center">
          <p className="text-lg text-gray-600">Loading...</p>
        </div>
      ) : error ? (
        <div className="flex justify-center">
          <p className="text-lg text-red-600">{error}</p>
        </div>
      ) : (
        <>
          {items && items.length > 0 ? (
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {items.map((item) => (
                <Card key={item._id} item={item} />
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
