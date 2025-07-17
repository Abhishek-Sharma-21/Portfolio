import { useState } from "react";
import ColouredSeparator from "../components/ColouredSeparator";
import { Link, useLocation } from "react-router-dom";
import React from "react";

const navLinks = [
  { label: "About", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Skills", path: "/skills" },
  { label: "Experience", path: "/experience" },
  { label: "Education", path: "/education" },
];

function Navbar() {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);

  React.useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative w-full overflow-x-visible bg-[#181c24] bg-opacity-90 shadow-md rounded-xl">
      <ul className="relative z-10 flex items-center justify-start gap-10 px-8 py-5 text-lg font-semibold overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-yellow-400 scrollbar-track-transparent">
        {navLinks.map((item) => (
          <li key={item.path} className="relative">
            <Link
              to={item.path}
              className={
                active === item.path
                  ? "text-yellow-400"
                  : "text-gray-200 hover:text-yellow-300 transition-colors duration-200"
              }
            >
              {item.label}
            </Link>
            {active === item.path && (
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-400 rounded-full transition-all duration-300"></span>
            )}
          </li>
        ))}
      </ul>
      <ColouredSeparator />
    </div>
  );
}

export default Navbar;
