import { motion } from "framer-motion";

const codingSkills = [
    { name: "HTML", level: 100 },
    { name: "CSS", level: 100 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Material UI", level: 100 },
    { name: "JavaScript", level: 95 },
    { name: "React.js", level: 95 },
    { name: "Node.js", level: 100 },
    { name: "Express.js", level: 100 },
    { name: "MongoDB", level: 100 },
    { name: "MySQL", level: 90 },
];

const professionalSkills = [
    { name: "Web Development", level: 90 },
    { name: "Database Management", level: 80 },
    { name: "Problem Solving & Algorithms", level: 75 },
    { name: "UI/UX & Web Animations", level: 80 },
    { name: "Backend Development", level: 85 }
];

const SkillBar = ({ name, level }) => (
    <div className="mb-4">
        <div className="flex justify-between text-xs sm:text-sm mb-1.5 font-medium">
            <span className="text-lightText">{name}</span>
            <span className="text-accent font-semibold">{level}%</span>
        </div>
        <div className="skill-bar">
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${level}%` }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: true }}
                className="skill-bar-fill"
            ></motion.div>
        </div>
    </div>
);

const Skills = () => {
    return (
        <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white text-center tracking-tight">
                    My <span className="text-accent">Skills</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-12 md:mt-16">
                    <div className="bg-darkCard border border-accent/30 rounded-xl p-5 sm:p-6 shadow-lg">
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-6 border-b border-accent/20 pb-3 flex items-center gap-2">
                            <span>💻</span> Coding Skills
                        </h3>
                        {codingSkills.map((s, i) => (
                            <SkillBar key={i} {...s} />
                        ))}
                    </div>

                    <div className="bg-darkCard border border-accent/30 rounded-xl p-5 sm:p-6 shadow-lg">
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-6 border-b border-accent/20 pb-3 flex items-center gap-2">
                            <span>🚀</span> Professional Skills
                        </h3>
                        {professionalSkills.map((s, i) => (
                            <SkillBar key={i} {...s} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;