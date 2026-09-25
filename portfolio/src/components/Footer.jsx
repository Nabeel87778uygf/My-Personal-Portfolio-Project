import { FiArrowUp } from "react-icons/fi";
import { Link } from "react-scroll";

const Footer = () => {
    return (
        <footer className="bg-darkCard py-6 px-6 relative">
            <div className="max-w-7xl mx-auto text-center text-grayText text-sm">
                Copyright © 2026 by Nabeel Ahmad | All Rights Reserved.
            </div>

            <Link
                to="home"
                smooth
                duration={500}
                className="absolute right-6 top-1/2 -translate-y-1/2 bg-accent text-darkBg p-3 rounded-full cursor-pointer hover:bg-cyan-400 transition"
            >
                <FiArrowUp />
            </Link>
        </footer>
    );
};

export default Footer;