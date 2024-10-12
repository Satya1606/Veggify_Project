/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { GoClock } from "react-icons/go";

export default function Card({ item }) {
  const categoryStyles = {
    Entrees: { backgroundColor: "#f0f5c4", color: "#59871f" },
    Breakfast: { backgroundColor: "#efedfa", color: "#3c3a8f" },
    Lunch: { backgroundColor: "#e5f7f3", color: "#1f8787" },
    Desserts: { backgroundColor: "#e8f5fa", color: "#397a9e" },
    Sides: { backgroundColor: "#feefc9", color: "#d16400" },
    Drinks: { backgroundColor: "#ffeae3", color: "#f0493e" },
    default: { backgroundColor: "#fff", color: "#000" },
  };

  const getCategoryStyle = (category) => {
    return categoryStyles[category] || categoryStyles.default;
  };

  const categoryStyle = getCategoryStyle(item?.category);
  const prepTime = item?.more?.prep_time || "";

  return (
    <div className="container mx-auto flex justify-center md:justify-start">
      <div className="w-64 h-88">
        <div className="group bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden w-full h-full relative">
          <img
            src={item?.thumbnail_image}
            alt="thumbnail_image"
            className="w-full h-48 object-cover"
          />
          <div className="py-2 px-3 bg-white h-32">
            <Link to={`/items/${item._id}`}>
              <h1 className="text-gray-700 font-bold text-lg mb-2 hover:text-gray-900 hover:cursor-pointer">
                {item?.name}
              </h1>
            </Link>
            <div className="flex justify-between items-center flex-wrap">
              <button
                className="py-1 px-2 font-medium rounded-lg"
                style={{
                  backgroundColor: categoryStyle.backgroundColor,
                  color: categoryStyle.color,
                }}
              >
                {item?.category}
              </button>
              <div className="flex items-center py-1">
                <GoClock />
                <span className="ml-1">{prepTime || "N/A"}</span>
              </div>
            </div>
          </div>
          <div className="absolute top-2 right-2 py-1 px-2 bg-white rounded-lg shadow-sm opacity-100  transition-opacity duration-300">
            <span className="text-sm font-medium">
              {item?.more?.difficulty}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
