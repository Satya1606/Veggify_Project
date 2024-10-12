import { FaQuoteLeft } from "react-icons/fa";

export default function About() {
  return (
    <section className="px-6 lg:px-12 py-10">
      {" "}
      {/* Reduced padding */}
      <h1 className="text-4xl text-center mb-4 font-extrabold text-secondary sm:text-6xl sm:leading-snug">
        About
      </h1>
      <p className="text-center sm:w-2/3 mx-auto mb-10 text-gray-700 text-lg sm:text-xl">
        Welcome to our vegetarian recipe haven! We aim to inspire healthy,
        delicious meals that everyone can enjoy.
      </p>
      <article className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/50 sm:bg-transparent"></div>
        <div className="relative mx-auto max-w-screen-xl px-4 py-24 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
              Discover Your
              <strong className="block font-extrabold text-orange-400">
                {" "}
                Favorite Vegetarian Recipe!{" "}
              </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl text-white">
              Join our community of food lovers and explore a wide range of
              plant-based recipes that are easy to prepare and full of flavor!
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                className="block w-full rounded bg-orange-500 px-12 py-3 text-sm font-medium text-white shadow hover:bg-orange-600 focus:outline-none focus:ring active:bg-orange-400 sm:w-auto"
              >
                Get Started
              </a>

              <a
                href="#"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-orange-500 shadow hover:text-orange-600 focus:outline-none focus:ring active:text-orange-400 sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </article>
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between relative w-full h-auto md:h-64 bg-white shadow-2xl rounded-lg p-8">
          <div className="w-full md:w-8/12 flex items-center text-2xl text-gray-700">
            <FaQuoteLeft className="mr-4 text-orange-600" />
            <span>
              We are a team of passionate developers dedicated to creating
              delicious vegetarian recipes for everyone to enjoy.
            </span>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="relative shadow-md font-medium py-2 px-4 text-white cursor-pointer bg-yellow-600 hover:bg-yellow-500 rounded text-lg text-center w-48">
              <span className="absolute h-3 w-3 right-0 top-0 animate-ping inline-flex rounded-full bg-yellow-600"></span>
              Call Now
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
