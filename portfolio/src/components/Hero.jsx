import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { Link } from "react-scroll";
import profile from "../assets/images/profile.jpg";

const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative px-6 pt-24"
        >
            <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Hi, I Am{" "}
                        <span className="text-accent">Nabeel Ahmad</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-bold text-accent mt-2">
                        MERN Stack Developer.
                    </h2>
                    <p className="text-grayText mt-4 max-w-lg">
                        I'm a MERN Stack Front-End & Back-End Developer building fast,
                        scalable, and responsive web applications with clean code, modern
                        UI, and smooth user experiences.
                    </p>

                    <div className="flex gap-4 mt-6">
                        <Link
                            to="contact"
                            smooth
                            duration={500}
                            className="bg-accent text-darkBg px-6 py-2 rounded-md font-semibold cursor-pointer hover:bg-cyan-400 transition"
                        >
                            Hire me
                        </Link>
                        <Link
                            to="contact"
                            smooth
                            duration={500}
                            className="border border-accent text-accent px-6 py-2 rounded-md font-semibold cursor-pointer hover:bg-accent hover:text-darkBg transition"
                        >
                            Let's Talk
                        </Link>
                    </div>

                    <div className="flex gap-4 mt-8 text-accent text-xl">
                        <a
                            href="https://linkedin.com/in/nabeelahmad"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="border border-accent p-2 rounded-full hover:bg-accent hover:text-darkBg transition"
                        >
                            <FiLinkedin />
                        </a>
                        <a
                            href="https://github.com/Nabeel87778uygf"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="border border-accent p-2 rounded-full hover:bg-accent hover:text-darkBg transition"
                        >
                            <FiGithub />
                        </a>
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=nabeelahmad.orkz@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Email"
                            className="border border-accent p-2 rounded-full hover:bg-accent hover:text-darkBg transition"
                        >
                            <FiMail />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center items-center"
                >
                    <div className="relative w-72 h-72 md:w-96 md:h-96">
                        <div className="absolute inset-0 rounded-full border-4 border-accent animate-pulse"></div>
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