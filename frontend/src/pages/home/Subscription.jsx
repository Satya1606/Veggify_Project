export default function Subscription() {
  return (
    <div className="bg-white py-16 rounded-t-md">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 mb-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-20">
          <div className="md:w-1/2">
            <h3 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
              Subscribe to our newsletter.
            </h3>
            <p className="mt-4 text-lg leading-8">
              Subscribe to our newsletter to get the latest news, updates, and
              exclusive offers.
            </p>
          </div>
          <div className="sm:w-1/2 mt-6 flex flex-col sm:flex-row gap-4">
            <label htmlFor="email-address" className=" sr-only">
              Email Address
            </label>
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
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <hr />
    </div>
  );
}
