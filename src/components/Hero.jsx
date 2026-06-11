import { Download, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background glowing effects */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-brand-cyan rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side: Text Content */}
        <div data-aos="fade-right" data-aos-duration="1000">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="text-cyan-500 glow-text ">
              Ayush
            </span>{" "}
            <span className="inline-block animate-bounce origin-bottom">
              👋
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-lg leading-relaxed">
            A passionate{" "}
            <span className="text-white font-semibold">Frontend Developer</span>{" "}
            dedicated to building futuristic, premium, and highly interactive
            web experiences. Let's create something extraordinary together.
          </p>

          <div className="flex flex-wrap gap-5">
            <a
              href="#contact"
              className="flex items-center gap-2 px-8 py-3.5 bg-brand-cyan text-brand-dark font-bold rounded-full hover:scale-105 hover:bg-cyan-300 hover:text-brand-dark transition-all duration-300 glow-box group"
            >
              Hire Me
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="/src/assets/my front-end_cv.pdf"
              className="flex items-center gap-2 px-8 py-3.5 border-2 border-brand-cyan text-brand-cyan font-bold rounded-full hover:scale-105 hover:bg-brand-cyan/10 transition-all duration-300 group"
            >
              Download Resume
              <Download
                size={20}
                className="group-hover:-translate-y-1 transition-transform"
              />
            </a>
          </div>
        </div>

        {/* Right Side: 3D Avatar & Blob */}
        <div
          className="flex justify-center items-center lg:justify-end relative"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 animate-float">
            {/* Glowing Blob SVG Background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-cyan to-blue-600 rounded-full filter blur-xl opacity-30 animate-pulse"></div>

            {/* The actual blob shape framing the avatar */}
            <div
              className="absolute inset-0 border-2 border-brand-cyan shadow-[0_0_30px_rgba(0,240,255,0.4)] overflow-hidden flex items-center justify-center bg-brand-dark/50 backdrop-blur-sm"
              style={{
                borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                animation: "blob 8s ease-in-out infinite alternate",
              }}
            >
              {/* Fallback avatar if image isn't provided yet */}
              <div className="w-full h-full bg-gradient-to-b from-transparent to-brand-cyan/20 flex flex-col items-center justify-end pt-10">
                {/* Placeholder for 3D Avatar */}
                <div className="w-48 h-48 md:w-64 md:h-64 bg-[url('https://api.dicebear.com/7.x/bottts/svg?seed=Ayush&backgroundColor=transparent')] bg-contain bg-no-repeat bg-bottom drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
