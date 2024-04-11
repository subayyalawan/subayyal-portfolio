import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = ({ theme, darkTheme, lightTheme }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const date = new Date()

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
                                    className="py-[6px] px-[7px] border-2 border-light-text text-xl dark:border-white rounded-md mr-2 dark:text-white text-light-text cursor-pointer"
                                    onClick={() => setMenuOpen(true)}
                                />
                                <p className="mr-2 text-Primary-Color font-semibold">
                                    {"<C/>"}
                                </p>
                                <p className="font-medium sm:block hidden cursor-default">
                                    Subayyal <span className="lg:block hidden">Ayub</span>
                                </p>
                            </div>
                        </div>
                        <div className="md:block hidden">
                            <ul className="flex xl:gap-10 lg:gap-5 md:gap-1 font-Biotif-Regular items-center text-lg font-medium">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `${isActive
                                            ? "text-Primary-Color border-Primary-Color"
                                            : "dark:text-white text-light-text border-transparent hover:text-Primary-Color"
                                        } border-b-2 py-1 px-2  transition-all duration-300 cursor-pointer`
                                    }
                                >
                                    <li>Home</li>
                                </NavLink>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `${isActive
                                            ? "text-Primary-Color border-Primary-Color"
                                            : "dark:text-white text-light-text border-transparent hover:text-Primary-Color"
                                        } border-b-2 py-1 px-2  transition-all duration-300 cursor-pointer`
                                    }
                                >
                                    <li>About</li>
                                </NavLink>
                                <NavLink
                                    to="/portfolio"
                                    className={({ isActive }) =>
                                        `${isActive
                                            ? "text-Primary-Color border-Primary-Color"
                                            : "dark:text-white text-light-text border-transparent hover:text-Primary-Color"
                                        } border-b-2 py-1 px-2 transition-all duration-300 cursor-pointer`
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
                                        className="block bg-gray-300 dark:bg-gray-500 lg:w-16 md:w-10 w-14 lg:h-8 md:h-5 h-7 rounded-full relative cursor-pointer"
                                    >
                                        <input
                                            type="checkbox"
                                            id="check"
                                            className="sr-only peer"
                                            onChange={handleThemeChange}
                                            checked={theme === "light"}
                                            value={theme}
                                        />
                                        <span className="bg-Primary-Color w-2/5 h-4/5 absolute rounded-full lg:left-[3px] md:left-[2px] left-[3px] lg:top-[3px] md:top-[2px] top-[3px] peer-checked:bg-gray-100 lg:peer-checked:left-9 md:peer-checked:left-[1.4rem] peer-checked:left-[1.9rem] transition-all duration-500"></span>
                                    </label>
                                </li>
                                <p className="w-24 capitalize font-medium cursor-default">{theme} Mode</p>
                                <a
                                    href="https://www.linkedin.com/in/subayyalayub/"
                                    target="_blank"
                                    className="hover:text-Primary-Color transition-all duration-300 md:block hidden cursor-pointer"
                                >
                                    <li className="lg:text-2xl text-xl mx-2">
                                        <FontAwesomeIcon icon={faLinkedin} />
                                    </li>
                                </a>
                                <a
                                    href="https://github.com/subayyalawan"
                                    target="_blank"
                                    className="hover:text-Primary-Color transition-all duration-300 md:block hidden cursor-pointer"
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
                <div className="fixed w-full h-screen inset-x-0 dark:bg-Background bg-white px-4 top-0">
                    <div className="flex flex-col justify-between h-full">
                        <div>
                            <div className="font-Bogart_Medium lg:text-3xl text-2xl flex items-center justify-between pt-24 py-16">
                                <p className="font-medium">
                                    Subayyal <span className="">Ayub</span>
                                </p>
                                <FontAwesomeIcon
                                    icon={faXmark}
                                    className="py-[4px] px-[7px] border-2 text-2xl border-light-text dark:border-white rounded-md mr-2 dark:text-white text-light-text"
                                    onClick={() => setMenuOpen(false)}
                                />
                            </div>

                            <div>
                                <ul>
                                    <li className="cursor-pointer py-4 text-xl font-Biotif-Regular border-y dark:border-white/30 px-3"><Link to='/'>Home</Link></li>
                                    <li className="cursor-pointer py-4 text-xl font-Biotif-Regular px-3"><Link to="/about">About</Link></li>
                                    <li className="cursor-pointer py-4 text-xl font-Biotif-Regular border-y dark:border-white/30 px-3"><Link to="/portfolio">Portfolio</Link></li>
                                    <li className="cursor-pointer py-6 text-xl font-Biotif-Regular text-center">
                                        <a
                                            href="https://www.linkedin.com/in/subayyalayub/"
                                            target="_blank"
                                            className="hover:text-Primary-Color transition-all duration-300 cursor-pointer text-3xl mx-4"
                                        >
                                            <FontAwesomeIcon icon={faLinkedin} />
                                        </a>
                                        <a
                                            href="https://github.com/subayyalawan"
                                            target="_blank"
                                            className="hover:text-Primary-Color transition-all duration-300 cursor-pointer text-3xl mx-4"
                                        >
                                            <FontAwesomeIcon icon={faGithub} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <p className="text-center pb-4">Site designed and developed by me. <span className="block">© {date.getFullYear()} Subayyal Ayub</span></p>
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default Navbar;
