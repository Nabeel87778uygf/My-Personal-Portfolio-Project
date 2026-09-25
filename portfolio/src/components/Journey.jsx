import { motion } from "framer-motion";

const education = [
    {
        year: "2017 - 2019",
        title: "Matriculation",
        desc: "Built a solid academic foundation in core sciences, mathematics, and analytical problem-solving.",
    },
    {
        year: "2019 - 2021",
        title: "FSC - Pre-Engineering",
        desc: "Developed strong analytical, logical, and quantitative skills with a focus on advanced mathematics and chemistry.",
    },
    {
        year: "2021 - 2025",
        title: "BS In Software Engineering",
        desc: "Pursuing a Bachelor's in Software Engineering at Islamia College & University Peshawar, focusing on modern software development, data structures, algorithms, and core engineering principles.",
    },
];

const experience = [
    {
        title: "Full MERN Stack Developer",
        desc: "I have been building full-stack web applications since 2023, specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js).",
    },
    {
        title: "E-Commerce Management",
        desc: "I manage Sasta Bazaar, an online store selling men's wallets and watches, transforming the platform from Shopify to a custom solution.",
    },
    {
        title: "Programming Skills",
        desc: "I am a full-stack developer proficient in JavaScript, with hands-on experience in front-end frameworks, back-end development, and database management and integration. I build end-to-end web applications, handling everything from user interface to server-side logic and data storage."
    },
];

const TimelineCard = ({ item, type }) => (
    <motion.div
        initial={{ opacity: 0, x: type === "edu" ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative bg-darkCard border border-accent/30 rounded-lg p-4 sm:p-5 mb-6 shadow-md hover:border-accent transition-all duration-300 ml-2 sm:ml-0"
    >
        <div className="absolute -left-[23px] sm:-left-[31px] top-5 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-accent rounded-full border-2 border-darkBg shadow-sm"></div>
        {item.year && (
            <span className="text-accent text-xs sm:text-sm font-semibold flex items-center gap-1">
                <span>📅</span> {item.year}
            </span>
        )}
        <h4 className="text-base sm:text-lg font-bold text-white mt-1.5">{item.title}</h4>
        <p className="text-grayText text-xs sm:text-sm mt-1.5 leading-relaxed">{item.desc}</p>
    </motion.div>
);

const Journey = () => {
    return (
        <section id="education" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#081426]">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white text-center tracking-tight">
                    My <span className="text-accent">Journey.</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 mt-12 md:mt-16">
                    <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 border-b border-accent/20 pb-2 inline-block">
                            Education
                        </h3>
                        <div className="border-l-2 border-accent/30 pl-4 sm:pl-6 ml-2 sm:ml-4">
                            {education.map((item, i) => (
                                <TimelineCard key={i} item={item} type="edu" />
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 border-b border-accent/20 pb-2 inline-block">
                            Experience
                        </h3>
                        <div className="border-l-2 border-accent/30 pl-4 sm:pl-6 ml-2 sm:ml-4">
                            {experience.map((item, i) => (
                                <TimelineCard key={i} item={item} type="exp" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Journey;