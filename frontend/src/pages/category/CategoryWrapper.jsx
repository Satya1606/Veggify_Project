/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

// Individual category item component
function CategoryItem({ name, href, backgroundColor, color }) {
  const style = {
    backgroundColor: backgroundColor,
    color: color,
    borderColor: color,
  };

  return (
    <div>
      <Link to={href} className="rounded-full">
        <div
          className="uppercase font-bold px-6 py-3 text-center rounded-full transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
          style={style}
        >
          {name}
        </div>
      </Link>
    </div>
  );
}

// List of category items
function CategoryList() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
      <CategoryItem
        name="Entrees"
        href="/categories/entrees"
        backgroundColor="#ffe3e3"
        color="#c62828"
      />
      <CategoryItem
        name="Breakfast"
        href="/categories/breakfast"
        backgroundColor="#fff9c4"
        color="#f9a825"
      />
      <CategoryItem
        name="Lunch"
        href="/categories/lunch"
        backgroundColor="#e1f5fe"
        color="#0277bd"
      />
      <CategoryItem
        name="Desserts"
        href="/categories/desserts"
        backgroundColor="#e1bee7"
        color="#8e24aa"
      />
      <CategoryItem
        name="Sides"
        href="/categories/sides"
        backgroundColor="#fff3e0"
        color="#fb8c00"
      />
      <CategoryItem
        name="Drinks"
        href="/categories/drinks"
        backgroundColor="#dcedc8"
        color="#388e3c"
      />
    </div>
  );
}

// Category wrapper component with heading
const CategoryWrapper = () => {
  return (
    <div className="pb-10">
      <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-8 transition-transform duration-300 ease-in-out text-rose-700 text-gradient">
        Explore Our Categories
      </h2>
      <CategoryList />
    </div>
  );
};

export default CategoryWrapper;
