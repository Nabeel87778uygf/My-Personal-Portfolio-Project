import { FiArrowUp } from "react-icons/fi";
import { Link } from "react-scroll";

const Footer = () => {
    return (
        <footer className="bg-darkCard py-6 px-4 sm:px-8 border-t border-accent/10 relative">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left text-grayText text-xs sm:text-sm">
                <div>
                    Copyright © 2026 by <span className="text-white font-semibold">Nabeel Ahmad</span> | All Rights Reserved.
                </div>
                <div className="text-xs text-grayText/70">
                    Designed & Developed with React & Tailwind CSS
                </div>
            </div>

            <Link
                to="home"
                smooth
                duration={500}
                aria-label="Scroll to top"
                className="fixed bottom-6 right-6 z-40 bg-accent text-darkBg p-3 rounded-full cursor-pointer hover:bg-cyan-300 hover:scale-110 shadow-lg shadow-accent/30 transition-all duration-300"
            >
                <FiArrowUp className="text-xl" />
            </Link>
        </footer>
    );
};

export default Footer;