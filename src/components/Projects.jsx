import { ExternalLink } from 'lucide-react';

const GithubIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Projects = () => {
  const projects = [
    {
      title: 'Neon E-Commerce',
      description: 'A futuristic e-commerce platform featuring 3D product previews and a sleek dark mode UI.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tech: ['React', 'Tailwind', 'Three.js'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      title: 'Crypto Dashboard',
      description: 'Real-time cryptocurrency tracking dashboard with advanced charts and glassmorphism design.',
      image: 'https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tech: ['Next.js', 'Chart.js', 'Tailwind'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      title: 'AI Image Generator',
      description: 'Web interface for generating images using AI models, wrapped in a beautiful, responsive layout.',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tech: ['React', 'OpenAI API', 'Framer'],
      liveLink: '#',
      githubLink: '#'
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-brand-cyan">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-brand-cyan mx-auto rounded-full glow-box"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              data-aos="fade-up" 
              data-aos-delay={index * 150}
              className="glass rounded-2xl overflow-hidden group hover:shadow-[0_0_25px_rgba(0,240,255,0.15)] transition-all duration-300"
            >
              {/* Image Container with Overlay */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-brand-cyan/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-300 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 relative">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-brand-cyan transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed h-16 overflow-hidden">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium bg-brand-dark/50 text-brand-cyan rounded-full border border-brand-cyan/20">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a 
                    href={project.liveLink}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-brand-cyan/10 text-brand-cyan hover:bg-brand-cyan hover:text-brand-dark rounded-xl transition-all duration-300 font-semibold text-sm"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a 
                    href={project.githubLink}
                    className="flex items-center justify-center p-2.5 glass text-white hover:text-brand-cyan hover:border-brand-cyan rounded-xl transition-all duration-300"
                    aria-label="GitHub Repository"
                  >
                    <GithubIcon size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
