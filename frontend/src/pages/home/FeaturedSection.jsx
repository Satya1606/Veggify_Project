import { useEffect, useState } from "react";
import FeaturedImage from "../../assets/featured.webp";

export default function FeaturedSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay the animation to make sure the component has mounted
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="overflow-hidden flex md:flex-row flex-col justify-between items-center sm:my-20 my-4 md:gap-20 gap-12 px-5 lg:px-10">
      <div
        className={`relative group transform transition-all duration-1000 ease-in-out ${
          isVisible
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0"
        }`}
      >
        <div className="absolute top-4 left-5 bg-white text-secondary px-3 py-1 rounded-md uppercase tracking-wider shadow-md">
          Featured Recipe
        </div>
        {/* Image with slide from left */}
        <img
          src={FeaturedImage}
          alt="Featured Image"
          className="rounded-md shadow-lg"
        />
      </div>
      <div
        className={`text-start sm:w-1/2 transform transition-all duration-1000 ease-in-out delay-200 ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <h2 className="text-3xl font-semibold text-secondary sm:text-5xl sm:leading-relaxed">
          Pineapple + Smoked Jackfruit Pizza
        </h2>
        <p className="text-xl mt-4 text-[#5c5c5c]">
          The Pineapple + Smoked Jackfruit Pizza is a delicious, purely
          vegetarian twist on classic pizza flavors. This unique pie combines
          the juicy sweetness of pineapple with the smoky, meaty texture of
          jackfruit.
        </p>
        <div className="lg:mt-0 lg:flex-shrink-0">
          <div className="mt-12 inline-flex">
            {/* Button with hover effect */}
            <button className="py-4 px-8 hover:bg-btnColor text-secondary hover:text-white w-full transition-all ease-in-out duration-300 text-center text-base font-semibold border border-[#9c702a] focus:outline-none rounded-lg transform hover:scale-105 hover:shadow-lg">
              View Recipe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
