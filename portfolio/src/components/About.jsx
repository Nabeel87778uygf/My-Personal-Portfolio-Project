import { motion } from "framer-motion";
import { Button } from "@mui/material";
import profile from "../assets/images/profile.jpg";

const About = () => {
    return (
        <section id="about" className="py-16 sm:py-24 px-4 sm:px-6">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto text-center"
            >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                    About <span className="text-accent">Me</span>
                </h2>

                <div className="relative w-36 h-36 sm:w-48 sm:h-48 mx-auto mt-8 sm:mt-10">
                    <div className="absolute inset-0 rounded-full border-2 border-accent animate-pulse pointer-events-none"></div>
                    <img
                        src={profile}
                        alt="profile"
                        className="w-full h-full object-cover rounded-full border-4 border-darkCard relative z-10 shadow-lg shadow-accent/20"
                    />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mt-6">
                    Frontend & Back-End <span className="text-accent">Developer!</span>
                </h3>

                <p className="text-grayText text-sm sm:text-base mt-4 leading-relaxed max-w-3xl mx-auto">
                    I am a passionate MERN Stack Front-End and Back-End Developer with
                    expertise in React.js, Node.js, Express.js, MongoDB, and modern
                    JavaScript technologies. I create responsive, high-performance, and
                    visually polished websites with seamless user experiences. I'm
                    currently pursuing a BS in Computer Science at Qurtuba University,
                    continuously sharpening my development skills. I blend creativity,
                    clean code, and strong technical knowledge to build powerful,
                    scalable, and engaging digital solutions.
                </p>

                <Button
                    variant="contained"
                    sx={{
                        mt: 4,
                        bgcolor: "#00d4ff",
                        color: "#0a192f",
                        fontWeight: "bold",
                        px: { xs: 4, sm: 5 },
                        py: 1.2,
                        borderRadius: "8px",
                        textTransform: "none",
                        fontSize: { xs: "0.9rem", sm: "1rem" },
                        "&:hover": { bgcolor: "#00b8e6" },
                    }}
                >
                    Read More
                </Button>
            </motion.div>
        </section>
    );
};

export default About;