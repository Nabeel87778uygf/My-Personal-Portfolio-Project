import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const links = ["Home", "About", "Education", "Skills", "Projects", "Contact"];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-darkBg/90 backdrop-blur-md shadow-lg" : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-white">
                    Nabeel Ahmad<span className="text-accent">.</span>
                </h1>

                <ul className="hidden md:flex gap-8 text-lightText">
                    {links.map((link) => (
                        <li key={link}>
                            <Link
                                to={link.toLowerCase()}
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                activeClass="text-accent font-bold border-b-2 border-accent"
                                className="cursor-pointer py-1 text-lightText hover:text-accent transition-all duration-300"
                            >
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>

                <button
                    className="md:hidden text-accent text-2xl focus:outline-none"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {open && (
                <div className="md:hidden bg-darkCard px-6 py-4 flex flex-col gap-4 border-b border-accent/20">
                    {links.map((link) => (
                        <Link
                            key={link}
                            to={link.toLowerCase()}
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            activeClass="text-accent font-bold"
                            onClick={() => setOpen(false)}
                            className="cursor-pointer text-lightText hover:text-accent transition-all duration-300 py-1"
                        >
                            {link}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;