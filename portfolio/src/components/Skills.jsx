import { motion } from "framer-motion";

const codingSkills = [
    { name: "HTML", level: 100 },
    { name: "CSS", level: 100 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Material Ui", level: 100 },
    { name: "JavaScript", level: 95 },
    { name: "React.js", level: 95 },
    { name: "Node.js", level: 100 },
    { name: "Express.js", level: 100 },
    { name: "MongoDB", level: 100 },
    { name: "MySql", level: 90 },
];

const professionalSkills = [
    { name: "Web Development", level: 90 },
    { name: "Full-Stack Development", level: 85 },
    { name: "Database Management", level: 80 },
    { name: "Problem Solving & Algorithms", level: 75 },
    { name: "UI/UX & Web Animations", level: 80 },
    { name: "Backend Development", level: 85 }
];

const SkillBar = ({ name, level }) => (
    <div className="mb-4">
        <div className="flex justify-between text-sm mb-1">
            <span className="text-lightText font-medium">{name}</span>
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
        <section id="skills" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center">
                    My <span className="text-accent">Skills</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-12 mt-16">
                    <div className="bg-darkCard border border-accent/30 rounded-lg p-6">
                        <h3 className="text-xl font-bold text-white mb-6">Coding Skills</h3>
                        {codingSkills.map((s, i) => (
                            <SkillBar key={i} {...s} />
                        ))}
                    </div>

                    <div className="bg-darkCard border border-accent/30 rounded-lg p-6">
                        <h3 className="text-xl font-bold text-white mb-6">
                            Professional Skills
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