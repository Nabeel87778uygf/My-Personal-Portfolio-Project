import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { Link } from "react-scroll";
import profile from "../assets/images/profile.jpg";

const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 pt-28 pb-16 overflow-hidden"
        >
            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
                {/* Left Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center md:text-left order-2 md:order-1"
                >
                    <span className="text-accent font-semibold tracking-wider text-sm sm:text-base uppercase mb-2 inline-block">
                        Welcome to my portfolio
                    </span>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
                        Hi, I Am{" "}
                        <span className="text-accent block sm:inline">Nabeel Ahmad</span>
                    </h1>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-accent/90 mt-2 sm:mt-3">
                        MERN Stack Developer.
                    </h2>
                    <p className="text-grayText text-sm sm:text-base mt-4 max-w-lg mx-auto md:mx-0 leading-relaxed">
                        I'm a MERN Stack Front-End & Back-End Developer building fast,
                        scalable, and responsive web applications with clean code, modern
                        UI, and smooth user experiences.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6 sm:mt-8">
                        <Link
                            to="contact"
                            smooth
                            duration={500}
                            className="w-full sm:w-auto text-center bg-accent text-darkBg px-7 py-3 rounded-lg font-bold cursor-pointer hover:bg-cyan-400 transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-accent/40"
                        >
                            Hire me
                        </Link>
                        <Link
                            to="contact"
                            smooth
                            duration={500}
                            className="w-full sm:w-auto text-center border-2 border-accent text-accent px-7 py-3 rounded-lg font-bold cursor-pointer hover:bg-accent hover:text-darkBg transition-all duration-300"
                        >
                            Let's Talk
                        </Link>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex justify-center md:justify-start items-center gap-4 mt-8 text-accent text-lg sm:text-xl">
                        <a
                            href="https://linkedin.com/in/nabeelahmad"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="border border-accent/40 p-3 rounded-full hover:bg-accent hover:text-darkBg hover:border-accent transition-all duration-300"
                        >
                            <FiLinkedin />
                        </a>
                        <a
                            href="https://github.com/Nabeel87778uygf"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="border border-accent/40 p-3 rounded-full hover:bg-accent hover:text-darkBg hover:border-accent transition-all duration-300"
                        >
                            <FiGithub />
                        </a>
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=nabeelahmad.orkz@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Email"
                            className="border border-accent/40 p-3 rounded-full hover:bg-accent hover:text-darkBg hover:border-accent transition-all duration-300"
                        >
                            <FiMail />
                        </a>
                    </div>
                </motion.div>

                {/* Right Profile Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center items-center order-1 md:order-2"
                >
                    <div className="relative w-52 h-52 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                        <div className="absolute inset-0 rounded-full border-4 border-accent/70 animate-pulse"></div>
                        <img
                            src={profile}
                            alt="Nabeel Ahmad"
                            className="w-full h-full object-cover rounded-full border-4 border-darkCard shadow-2xl shadow-accent/20 relative z-10"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;