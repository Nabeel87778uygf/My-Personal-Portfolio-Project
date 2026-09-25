import Slider from "react-slick";
import { motion } from "framer-motion";
import { Button } from "@mui/material";

const SliderComponent = Slider.default || Slider;

const projects = [
    {
        title: "Gsap Apple Web",
        desc: "A modern website for Apple iPhone using Gsap, Three.js and React.",
        img: "/images/project1.jpg",
        link: "#",
    },
    {
        title: "E-Commerce Store",
        desc: "Full-stack MERN e-commerce store with cart and payment integration.",
        img: "/images/project2.jpg",
        link: "#",
    },
    {
        title: "Portfolio Website",
        desc: "Personal portfolio built with React, Tailwind CSS and Framer Motion.",
        img: "/images/project3.jpg",
        link: "#",
    },
];

const Projects = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        arrows: false,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
            { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
    };

    return (
        <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#081426] overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white text-center tracking-tight">
                    My <span className="text-accent">Projects</span>
                </h2>

                <div className="mt-12 sm:mt-16 pb-6">
                    <SliderComponent {...settings}>
                        {projects.map((p, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -6 }}
                                className="bg-darkCard border border-accent/30 rounded-xl overflow-hidden shadow-xl transition-all duration-300 my-2"
                            >
                                <div className="overflow-hidden h-44 sm:h-48">
                                    <img
                                        src={p.img}
                                        alt={p.title}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-5 text-center flex flex-col justify-between min-h-[160px]">
                                    <div>
                                        <h3 className="text-base sm:text-lg font-bold text-white">{p.title}</h3>
                                        <p className="text-grayText text-xs sm:text-sm mt-2 leading-relaxed">{p.desc}</p>
                                    </div>
                                    <Button
                                        href={p.link}
                                        variant="contained"
                                        sx={{
                                            mt: 3,
                                            bgcolor: "#00d4ff",
                                            color: "#0a192f",
                                            fontWeight: "bold",
                                            textTransform: "none",
                                            borderRadius: "6px",
                                            py: 0.8,
                                            "&:hover": { bgcolor: "#00b8e6" },
                                        }}
                                    >
                                        View Demo
                                    </Button>
                                </div>
                            </motion.div>
                        ))}
                    </SliderComponent>
                </div>
            </div>
        </section>
    );
};

export default Projects;