import { Code2, Palette, Zap } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Code2 size={32} className="text-brand-cyan" />,
      title: 'Clean Code',
      description: 'I write scalable, maintainable, and highly optimized frontend code.'
    },
    {
      icon: <Palette size={32} className="text-purple-400" />,
      title: 'Premium Design',
      description: 'Translating UI/UX designs into pixel-perfect, glassmorphism interfaces.'
    },
    {
      icon: <Zap size={32} className="text-blue-400" />,
      title: 'Smooth Animations',
      description: 'Creating delightful user experiences with advanced CSS and JS animations.'
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-brand-cyan">Me</span>
          </h2>
          <div className="w-24 h-1 bg-brand-cyan mx-auto rounded-full glow-box"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right" data-aos-delay="100">
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Crafting Digital Experiences
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
              Hello! I'm a frontend developer who loves blending art with technology. I specialize in building modern, responsive, and beautifully animated web applications.
            </p>
            <p className="text-gray-300 leading-relaxed mb-8 text-lg">
              My journey started with a fascination for how things look and feel on the web. Today, I use tools like React, Tailwind CSS, and various animation libraries to bring ideas to life with a focus on performance and aesthetics.
            </p>
            
            <div className="glass p-6 rounded-2xl border-l-4 border-l-brand-cyan shadow-lg">
              <p className="italic text-gray-400">
                "Design is not just what it looks like and feels like. Design is how it works."
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 gap-6" data-aos="fade-left" data-aos-delay="200">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="glass p-6 rounded-2xl flex items-start space-x-4 hover:-translate-y-2 transition-transform duration-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] group"
              >
                <div className="p-3 bg-brand-dark rounded-xl group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-white">{feature.title}</h4>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
