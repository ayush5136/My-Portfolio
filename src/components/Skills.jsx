import { useState } from "react";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    { name: "React", level: "80%", color: "#61DAFB" },
    { name: "JavaScript", level: "90%", color: "#F7DF1E" },
    { name: "Tailwind CSS", level: "95%", color: "#38B2AC" },
    { name: "HTML/CSS", level: "98%", color: "#E34F26" },
    { name: "Framer Motion", level: "85%", color: "#FF0055" },
    { name: "Git & GitHub", level: "90%", color: "#F05032" },
  ];

  return (
    <section id="skills" className="py-24 relative bg-brand-dark/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-brand-cyan">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-brand-cyan mx-auto rounded-full glow-box"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            A look at the technologies I use to bring ideas to life. I focus on
            modern frontend stacks to ensure scalable and beautiful
            applications.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="glass p-6 rounded-2xl flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group"
              style={{
                boxShadow:
                  hoveredSkill === index ? `0 0 20px ${skill.color}40` : "none",
                borderColor:
                  hoveredSkill === index
                    ? `${skill.color}80`
                    : "rgba(255,255,255,0.05)",
              }}
            >
              {/* Background Glow Effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                style={{ backgroundColor: skill.color }}
              ></div>

              <h3
                className="text-xl font-bold mb-2 transition-colors duration-300 z-10"
                style={{
                  color: hoveredSkill === index ? skill.color : "white",
                }}
              >
                {skill.name}
              </h3>

              {/* Progress Bar Container */}
              <div className="w-full bg-brand-dark/50 rounded-full h-1.5 mt-4 z-10 overflow-hidden">
                <div
                  className="h-1.5 rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: hoveredSkill === index ? skill.level : "0%",
                    backgroundColor: skill.color,
                    boxShadow: `0 0 10px ${skill.color}`,
                  }}
                ></div>
              </div>
              <span className="text-xs text-gray-400 mt-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                {skill.level} Proficiency
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
