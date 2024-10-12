/* eslint-disable react/no-unescaped-entities */
export default function NewsLetter() {
  return (
    <div className="w-full md:w-2/3 mx-auto flex flex-col items-center p-10">
      <h3 className="text-secondary font-semibold text-center text-4xl">
        Sign up for my weekly newsletter
      </h3>
      <p className="mt-6 text-gray-600 text-lg text-center leading-normal font-light">
        Weekly emails with my latest recipes, cooking tips and tricks, and
        product recommendations!
        <br /> You'll be set up in minutes.
      </p>
      <div className="mt-6 flex flex-col md:flex-row items-center justify-center w-full md:px-8 gap-4 mb-20">
        <input
          className="flex-grow w-full md:w-1/3 px-4 py-3 rounded bg-gray-100 outline-none placeholder:text-[#3a4a4f] focus:shadow-lg transition-all duration-300"
          type="text"
          placeholder="Name"
          style={{
            border: "none",
            boxShadow: "0 0 8px rgba(0, 0, 0, 0.1)",
          }}
        />
        <input
          className="flex-grow w-full md:w-1/3 px-4 py-3 rounded bg-gray-100 placeholder:text-[#3a4a4f] focus:shadow-lg transition-all duration-300 outline-none"
          type="text"
          placeholder="Email Address"
          style={{
            border: "none",
            boxShadow: "0 0 8px rgba(0, 0, 0, 0.1)",
          }}
        />
        <button className="w-full md:w-1/4 py-3 px-6 bg-secondary hover:bg-btnColor text-white transition ease-in duration-200 text-center text-base font-semibold rounded-lg focus:outline-none">
          Get Started
        </button>
      </div>
    </div>
  );
}
