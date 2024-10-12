import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../../components/Card";
import { Link } from "react-router-dom";

export default function LatestRecipe() {
  const [items, setItems] = useState([]);

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
        console.error("Error fetching items:", error);
      }
    };

    getLatestItems();
  }, []);

  return (
    <div className="px-5 xl:px-10 py-16">
      <h2 className="text-3xl mb-8 font-semibold text-secondary sm:text-5xl sm:leading-relaxed">
        Latest Recipes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {items.length > 0 ? (
          items.slice(0, 4).map((item) => <Card key={item._id} item={item} />)
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="sm:w-64 mx-auto mt-16">
        <Link to="/recipes">
          <button className="py-4 px-8 hover:bg-btnColor text-secondary hover:text-white w-full transition ease-in duration-200 text-center text-base font-semibold border border-[#9c702a] focus:outline-none rounded-lg">
            View All Recipes
          </button>
        </Link>
      </div>
    </div>
  );
}
