import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [open]);

    const links = ["Home", "About", "Education", "Skills", "Projects", "Contact"];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                scrolled || open
                    ? "bg-darkBg/95 backdrop-blur-md shadow-xl border-b border-accent/10"
                    : "bg-transparent py-2"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
                <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer text-xl sm:text-2xl font-extrabold text-white tracking-tight"
                >
                    Nabeel Ahmad<span className="text-accent">.</span>
                </Link>

                {/* Desktop Nav Links */}
                <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-lightText font-medium">
                    {links.map((link) => (
                        <li key={link}>
                            <Link
                                to={link.toLowerCase()}
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                activeClass="text-accent font-semibold border-b-2 border-accent"
                                className="cursor-pointer py-1.5 text-sm lg:text-base text-lightText hover:text-accent transition-colors duration-300"
                            >
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Hamburger Toggle Button */}
                <button
                    className="md:hidden text-accent text-2xl p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                    onClick={() => setOpen(!open)}
                    aria-label={open ? "Close menu" : "Open menu"}
                >
                    {open ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Dropdown Menu with Animation */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden bg-darkCard/95 backdrop-blur-lg px-6 py-6 border-b border-accent/20 shadow-2xl flex flex-col gap-3"
                    >
                        {links.map((link) => (
                            <Link
                                key={link}
                                to={link.toLowerCase()}
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                activeClass="text-accent font-bold bg-accent/10 rounded-md px-3"
                                onClick={() => setOpen(false)}
                                className="cursor-pointer text-lightText hover:text-accent transition-all duration-300 py-3 text-lg font-medium border-b border-white/5 last:border-none flex items-center justify-between"
                            >
                                <span>{link}</span>
                                <span className="text-xs text-accent opacity-60">→</span>
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;