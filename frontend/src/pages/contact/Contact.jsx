export default function Contact() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-12 mx-auto">
        <div>
          <p className="font-medium text-blue-500 dark:text-blue-400">
            Contact us
          </p>

          <h1 className="mt-1 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">
            Chat to our friendly team
          </h1>

          <p className="mt-1 text-gray-500 dark:text-gray-400">
            We’d love to hear from you. Please fill out this form or shoot us an
            email.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-6 lg:grid-cols-2">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                {/* SVG Icon */}
              </span>

              <h2 className="mt-1 text-base font-medium text-gray-800 dark:text-white">
                Email
              </h2>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Our friendly team is here to help.
              </p>
              <p className="mt-1 text-sm text-blue-500 dark:text-blue-400">
                hello@merakiui.com
              </p>
            </div>

            <div>
              <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                {/* SVG Icon */}
              </span>

              <h2 className="mt-1 text-base font-medium text-gray-800 dark:text-white">
                Live chat
              </h2>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Our friendly team is here to help.
              </p>
              <p className="mt-1 text-sm text-blue-500 dark:text-blue-400">
                Start new chat
              </p>
            </div>

            <div>
              <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                {/* SVG Icon */}
              </span>

              <h2 className="mt-1 text-base font-medium text-gray-800 dark:text-white">
                Office
              </h2>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Come say hello at our office HQ.
              </p>
              <p className="mt-1 text-sm text-blue-500 dark:text-blue-400">
                100 Smith Street Collingwood VIC 3066 AU
              </p>
            </div>

            <div>
              <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                {/* SVG Icon */}
              </span>

              <h2 className="mt-1 text-base font-medium text-gray-800 dark:text-white">
                Phone
              </h2>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Mon-Fri from 8am to 5pm.
              </p>
              <p className="mt-1 text-sm text-blue-500 dark:text-blue-400">
                +1 (555) 000-0000
              </p>
            </div>
          </div>

          <div className="p-4 py-6 rounded-lg bg-gray-50 dark:bg-gray-800 md:p-8">
            <form>
              <div className="-mx-2 md:items-center md:flex">
                <div className="flex-1 px-2">
                  <label className="block mb-1 text-sm text-gray-600 dark:text-gray-200">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="block w-full px-5 py-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="flex-1 px-2 mt-2 md:mt-0">
                  <label className="block mb-1 text-sm text-gray-600 dark:text-gray-200">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="block w-full px-5 py-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </div>

              <div className="mt-2">
                <label className="block mb-1 text-sm text-gray-600 dark:text-gray-200">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="johndoe@example.com"
                  className="block w-full px-5 py-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div className="w-full mt-2">
                <label className="block mb-1 text-sm text-gray-600 dark:text-gray-200">
                  Message
                </label>
                <textarea
                  className="block w-full h-32 px-5 py-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Message"
                ></textarea>
              </div>

              <button className="w-full px-6 py-3 mt-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
