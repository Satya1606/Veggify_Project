import AboutImage from "../../assets/about-image.jpg";

export default function AboutSection() {
  return (
    <div className="relative overflow-hidden flex md:flex-row flex-col justify-between items-center sm:my-20 my-8 md:gap-16 gap-8 px-5 lg:px-10 bg-gradient-to-br from-[#faf2e1] via-[#fce2c2] to-[#ffcf8e] py-12 rounded-xl shadow-xl">
      {/* Decorative Background Circles */}
      <div className="absolute top-1/3 left-0 w-32 h-32 bg-gradient-to-tr from-[#ffd966] to-transparent rounded-full opacity-60 blur-xl -z-10"></div>
      <div className="absolute bottom-1/3 right-0 w-40 h-40 bg-gradient-to-br from-[#ffd966] to-transparent rounded-full opacity-70 blur-2xl -z-10"></div>

      <div className="text-start sm:w-1/2 w-full relative z-20">
        {/* Accent decorative line */}
        <div className="w-20 h-1 bg-[#d8a849] mb-4"></div>

        {/* Refined Gradient Heading */}
        <h2 className="text-2xl font-extrabold bg-gradient-to-r from-[#d8a849] via-[#ffd966] to-[#ffb800] bg-clip-text text-transparent sm:text-4xl lg:text-5xl leading-tight tracking-tight">
          Vegan foodie who loves to experiment with recipes
        </h2>

        {/* Refined Paragraph */}
        <p className="text-lg lg:text-xl mt-4 text-gray-800 leading-relaxed font-light">
          As a vegan foodie, I thrive on experimenting with vibrant ingredients
          and innovative recipes that celebrate the rich flavors of plant-based
          cuisine.
          <br />
          <br />
          Whether it’s creating twists on classic dishes or exploring exotic
          spices, my kitchen is a playground of culinary discovery.
        </p>

        {/* Button with glow and hover animation */}
        <div className="lg:mt-8 mt-6">
          <button className="py-4 px-8 bg-[#d8a849] text-white hover:bg-[#ffbf40] transition-all ease-in duration-300 text-lg font-medium rounded-full shadow-lg hover:shadow-2xl hover:ring-4 hover:ring-[#ffd966]/50 transform hover:scale-105">
            View Recipe
          </button>
        </div>
      </div>

      {/* Enhanced Image with glow and sleek border */}
      <div className="sm:w-1/2 w-full flex justify-center mt-8 md:mt-0 relative z-20">
        <div className="relative w-full max-w-lg sm:max-w-md transform hover:scale-105 transition-all ease-in-out duration-300">
          <img
            src={AboutImage}
            alt="Featured Image"
            className="rounded-lg w-full object-cover border-[5px] border-[#ffd966] shadow-[0px_10px_20px_rgba(0,0,0,0.4)] transition-shadow duration-300 hover:shadow-[0px_20px_40px_rgba(0,0,0,0.5)]"
          />
          {/* Soft Glow around the image */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#ffde94]/30 to-transparent rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}
