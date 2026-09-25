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
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        arrows: false,
        pauseOnHover: true,
        swipeToSlide: true,
        touchThreshold: 10,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
        ],
    };

    return (
        <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#081426] overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white text-center tracking-tight">
                    My <span className="text-accent">Projects</span>
                </h2>

                <div className="mt-10 sm:mt-16 pb-8 px-2 sm:px-0">
                    <SliderComponent {...settings}>
                        {projects.map((p, i) => (
                            <div key={i} className="py-2 px-1">
                                <motion.div
                                    whileHover={{ y: -6 }}
                                    className="bg-darkCard border border-accent/30 rounded-2xl overflow-hidden shadow-xl flex flex-col h-full"
                                >
                                    <div className="overflow-hidden h-48 sm:h-52 w-full bg-darkBg/50 relative">
                                        <img
                                            src={p.img}
                                            alt={p.title}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop";
                                            }}
                                        />
                                    </div>
                                    <div className="p-5 text-center flex flex-col justify-between flex-grow">
                                        <div>
                                            <h3 className="text-lg font-bold text-white tracking-wide">{p.title}</h3>
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
                                                borderRadius: "8px",
                                                py: 1,
                                                width: "100%",
                                                "&:hover": { bgcolor: "#00b8e6" },
                                            }}
                                        >
                                            View Project
                                        </Button>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </SliderComponent>
                </div>
            </div>
        </section>
    );
};

export default Projects;