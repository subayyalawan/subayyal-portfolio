import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ theme, darkTheme, lightTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleThemeChange = (e) => {
    // console.log(e.target.value);
    if (e.target.value === "dark") {
      lightTheme();
    } else {
      darkTheme();
    }
  };

  return (
    <>
      <div>
        <div className="container mx-auto md:px-10 px-4">
          <div className="border-b border-white/20 flex justify-between items-center px-2 sm:py-6 py-4">
            <div>
              <div className="font-Bogart_Medium lg:text-3xl text-2xl flex items-center">
                <FontAwesomeIcon
                  icon={faBars}
                  className="py-[6px] px-[7px] border-2 border-light-text dark:border-white  rounded-md mr-2 dark:text-white text-light-text"
                  onClick={() => setMenuOpen(true)}
                />
                <p className="mr-2 text-Primary-Color font-semibold">
                  {"<C/>"}
                </p>
                <p className="font-medium sm:block hidden">
                  Subayyal <span className="lg:block hidden">Ayub</span>
                </p>
              </div>
            </div>
            <div className="md:block hidden">
              <ul className="flex xl:gap-10 lg:gap-5 md:gap-1 font-Biotif-Regular items-center text-lg font-medium">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "text-Primary-Color border-Primary-Color"
                        : "dark:text-white text-light-text border-transparent hover:text-Primary-Color"
                    } border-b-2 py-1 px-2  transition-all duration-300`
                  }
                >
                  <li>Home</li>
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "text-Primary-Color border-Primary-Color"
                        : "dark:text-white text-light-text border-transparent hover:text-Primary-Color"
                    } border-b-2 py-1 px-2  transition-all duration-300`
                  }
                >
                  <li>About</li>
                </NavLink>
                <NavLink
                  to="/portfolio"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "text-Primary-Color border-Primary-Color"
                        : "dark:text-white text-light-text border-transparent hover:text-Primary-Color"
                    } border-b-2 py-1 px-2 transition-all duration-300`
                  }
                >
                  <li>Portfolio</li>
                </NavLink>
              </ul>
            </div>
            <div>
              <ul className="flex xl:gap-5 md:gap-2 gap-1 font-Biotif-Regular items-center text-lg font-medium">
                <li>
                  <label
                    htmlFor="check"
                    className="block bg-gray-300 dark:bg-gray-500 lg:w-16 md:w-10 w-14 lg:h-8 md:h-5 h-7 rounded-full relative "
                  >
                    <input
                      type="checkbox"
                      id="check"
                      className="sr-only peer"
                      onChange={handleThemeChange}
                      checked={theme === "light"}
                      value={theme}
                    />
                    <span className="bg-Primary-Color w-2/5 h-4/5 absolute rounded-full lg:left-[3px] md:left-[2px] left-[3px] lg:top-[3px] md:top-[2px] top-[3px] peer-checked:bg-gray-100 lg:peer-checked:left-9 md:peer-checked:left-[1.4rem] peer-checked:left-8 transition-all duration-500"></span>
                  </label>
                </li>
                <p className="w-24 capitalize font-medium">{theme} Mode</p>
                <a
                  href="https://www.linkedin.com/in/subayyalayub/"
                  target="_blank"
                  className="hover:text-Primary-Color transition-all duration-300 md:block hidden"
                >
                  <li className="lg:text-2xl text-xl mx-2">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </li>
                </a>
                <a
                  href="https://github.com/subayyalawan"
                  target="_blank"
                  className="hover:text-Primary-Color transition-all duration-300 md:block hidden"
                >
                  <li className="lg:text-2xl text-xl mx-2">
                    <FontAwesomeIcon icon={faGithub} />
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {menuOpen ? (
        <div className="fixed w-full h-screen inset-x-0 dark:bg-Background bg-white">
          <div className="flex flex-col">
            <div className="font-Bogart_Medium lg:text-3xl text-2xl flex items-center">
              <p className="mr-2 text-Primary-Color font-semibold">{"<C/>"}</p>
              <p className="font-medium">
                Subayyal <span className="">Ayub</span>
              </p>
              <FontAwesomeIcon
                icon={faXmark}
                className="py-[6px] px-[7px] border-2 border-light-text dark:border-white  rounded-md mr-2 dark:text-white text-light-text"
                onClick={() => setMenuOpen(false)}
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Navbar;
