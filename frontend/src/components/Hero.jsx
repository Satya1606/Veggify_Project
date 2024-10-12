/* eslint-disable react/no-unescaped-entities */
import { IoSearchOutline } from "react-icons/io5"; // Corrected import statement

export default function Hero() {
  return (
    <div className="px-5 xl:px-10 md:w-1/2 mb-6">
      {" "}
      {/* Reduced bottom margin */}
      <h1 className="mt-1 mb-4 text-4xl xl:text-5xl text-center font-extrabold text-gray-900 leading-tight xl:leading-tight">
        "A haven for{" "}
        <span className="text-orange-600 underline decoration-4">
          vegetarians—deliciousness
        </span>{" "}
        awaits!"
      </h1>
      <form
        action="/search"
        className="bg-gray-100 p-4 rounded-full shadow-lg flex items-center transition-transform transform hover:scale-105"
      >
        <IoSearchOutline className="w-6 h-6 text-gray-700" />
        <input
          className="outline-none w-full py-2 px-4 bg-transparent border border-gray-300 rounded-full focus:border-orange-600 focus:ring-2 focus:ring-orange-400 transition duration-200"
          name="query"
          type="search"
          placeholder="Search for a recipe"
          id="search"
        />
      </form>
    </div>
  );
}
