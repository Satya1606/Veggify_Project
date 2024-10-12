/* eslint-disable react/prop-types */
import { HiBars3BottomRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function MobileNav({
  navItems,
  logo,
  onClose,
  hideleft,
  onOpen,
}) {
  return (
    <div className="h-16 flex justify-between items-center px-6 lg:px-12 shadow-md">
      <a href="/">
        <img src={logo} alt="logo" />
      </a>
      <button
        onClick={onOpen}
        className="border border-primary rounded"
        aria-label="Open menu"
      >
        <HiBars3BottomRight className="w-7 h-7" />
      </button>

      {/* Mobile Menu */}
      <div
        className={`transition-all w-full h-full fixed bg-primary z-50 top-0 ${hideleft} justify-center items-center`}
      >
        <button
          onClick={onClose}
          className="absolute right-8 top-8"
          aria-label="Close menu"
        >
          <HiBars3BottomRight className="w-7 h-7" />
        </button>

        <div>
          <ul className="flex flex-col gap-5">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item}
                  className="font-medium capitalize text-secondary"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex items-center gap-4 font-medium mt-10">
            <Link to="/signout">
              <li>
                <button className="text-secondary px-4 py-2 rounded border">
                  Sign out
                </button>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
