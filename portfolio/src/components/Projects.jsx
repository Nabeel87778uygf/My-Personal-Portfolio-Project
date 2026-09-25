import Slider from "react-slick";
import { motion } from "framer-motion";
import { Button } from "@mui/material";

const SliderComponent = Slider.default || Slider;


const projects = [
    {
        title: "Gasp Apple Web",
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
        autoplaySpeed: 3000,
        centerMode: true,
        centerPadding: "0px",
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 640, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <section id="projects" className="py-24 px-6 bg-[#081426]">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center">
                    My <span className="text-accent">Projects</span>
                </h2>

                <div className="mt-16">
                    <SliderComponent {...settings}>
                        {projects.map((p, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.03 }}
                                className="bg-darkCard border border-accent/30 rounded-lg overflow-hidden"
                            >
                                <img
                                    src={p.img}
                                    alt={p.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-5 text-center">
                                    <h3 className="text-lg font-bold text-white">{p.title}</h3>
                                    <p className="text-grayText text-sm mt-2">{p.desc}</p>
                                    <Button
                                        href={p.link}
                                        variant="contained"
                                        sx={{
                                            mt: 2,
                                            bgcolor: "#00d4ff",
                                            color: "#0a192f",
                                            fontWeight: "bold",
                                            "&:hover": { bgcolor: "#00b8e6" },
                                        }}
                                    >
                                        View
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