import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ theme, darkTheme, lightTheme }) => {
    const handleThemeChange = (e) => {
        // console.log(e.target.value);
        if (e.target.value === "dark") {
            lightTheme()
        } else {
            darkTheme()
        }
    }

    return (
        <>
            <div>
                <div className="container mx-auto px-10">
                    <div className="border-b border-white/20 flex justify-between items-center px-2 py-6">
                        <div>
                            <div className="font-Bogart_Medium text-3xl flex items-center">
                                <p className="mr-2 text-Primary-Color font-semibold">
                                    {"<C/>"}
                                </p>
                                <p className="font-medium">Subayyal Ayub</p>
                            </div>
                        </div>
                        <div>
                            <ul className="flex gap-10 font-Biotif-Regular items-center text-lg font-medium">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `${isActive
                                            ? "text-Primary-Color border-Primary-Color"
                                            : "dark:text-white text-black border-transparent hover:text-Primary-Color"
                                        } border-b-2 py-1 px-2  transition-all duration-300`
                                    }
                                >
                                    <li>Home</li>
                                </NavLink>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `${isActive
                                            ? "text-Primary-Color border-Primary-Color"
                                            : "dark:text-white text-black border-transparent hover:text-Primary-Color"
                                        } border-b-2 py-1 px-2  transition-all duration-300`
                                    }
                                >
                                    <li>About</li>
                                </NavLink>
                                <NavLink
                                    to="/portfolio"
                                    className={({ isActive }) =>
                                        `${isActive
                                            ? "text-Primary-Color border-Primary-Color"
                                            : "dark:text-white text-black border-transparent hover:text-Primary-Color"
                                        } border-b-2 py-1 px-2 transition-all duration-300`
                                    }
                                >
                                    <li>Portfolio</li>
                                </NavLink>
                            </ul>
                        </div>
                        <div>

                            <ul className="flex gap-5 font-Biotif-Regular items-center text-lg font-medium">

                                <li>
                                    <label htmlFor="check" className="block bg-gray-300 dark:bg-gray-500 w-16 h-8 rounded-full relative ">
                                        <input type="checkbox" id="check" className="sr-only peer" onChange={handleThemeChange} checked={theme === "light"} value={theme} />
                                        <span className="bg-Primary-Color w-2/5 h-4/5 absolute rounded-full left-[3px] top-[3px] peer-checked:bg-gray-100 peer-checked:left-9 transition-all duration-500"></span>
                                    </label>
                                </li>
                                <p className="w-24 capitalize font-medium">{theme} Mode</p>
                                <a
                                    href="https://www.linkedin.com/in/subayyalayub/"
                                    target="_blank"
                                    className="hover:text-Primary-Color transition-all duration-300"
                                >
                                    <li className="text-2xl mx-2">
                                        <FontAwesomeIcon icon={faLinkedin} />
                                    </li>
                                </a>
                                <a
                                    href="https://github.com/subayyalawan"
                                    target="_blank"
                                    className="hover:text-Primary-Color transition-all duration-300"
                                >
                                    <li className=" text-2xl mx-2">
                                        <FontAwesomeIcon icon={faGithub} />
                                    </li>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Navbar;
