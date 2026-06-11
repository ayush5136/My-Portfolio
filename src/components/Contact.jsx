import { Mail, Send } from "lucide-react";
import { useState } from "react";

const GithubIcon = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ size = 24 }) => (
 <svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
  <path d="M16 11.37a4 4 0 1 1-7.75 1.26 4 4 0 0 1 7.75-1.26z" />
  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
</svg>
);

const Contact = () => {

const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: "",
});

const handleSubmit = (e) => {
  e.preventDefault();
  // Handle form submission logic here
  setFormData({
    name: "",
    email: "",
    message: "",
  });
};

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden bg-brand-dark/50"
    >
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-cyan rounded-full mix-blend-screen filter blur-[150px] opacity-10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-brand-cyan">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-brand-cyan mx-auto rounded-full glow-box"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Currently open for new opportunities. Whether you have a question or
            just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Info */}
          <div data-aos="fade-right">
            <h3 className="text-2xl font-semibold mb-6">
              Let's talk about everything!
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Don't like forms? Send me an email. 👋
            </p>

            <a
              href="mailto:thakuraayush536@gmail.com"
              className="flex items-center gap-4 text-xl font-medium hover:text-brand-cyan transition-colors mb-12 group w-fit"
            >
              <div className="p-4 glass rounded-2xl group-hover:bg-brand-cyan/20 transition-colors">
                <Mail size={24} className="text-brand-cyan" />
              </div>
              thakuraayush536@gmail.com
            </a>

            <div>
              <h4 className="text-lg font-medium mb-4 text-gray-300">
                Find me on
              </h4>
              <div className="flex gap-4">
                {[
                  {
                    icon: <GithubIcon size={20} />,
                    href: "https://github.com/ayush5136",
                  },
                  {
                    icon: <LinkedinIcon size={20} />,
                    href: "https://www.linkedin.com/in/ayush-yadav-b2644022b/",
                  },
                  { icon: <InstagramIcon size={20} />, href: "" },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    className="p-3 glass rounded-xl hover:text-brand-cyan hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            data-aos="fade-left"
            className="glass p-8 md:p-10 rounded-3xl relative"
          >
            {/* Subtle inner glow */}
            <div className="absolute inset-0 rounded-3xl shadow-[inset_0_0_50px_rgba(0,240,255,0.02)] pointer-events-none"></div>

            <form
              className="flex flex-col gap-6"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-400 pl-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Wick"
                  className="w-full bg-brand-dark/50 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-400 pl-1"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full bg-brand-dark/50 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-400 pl-1"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hello, I'd like to talk about..."
                  className="w-full bg-brand-dark/50 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="mt-4 flex items-center justify-center gap-2 w-full py-4 bg-brand-cyan text-brand-dark font-bold rounded-xl hover:bg-cyan-500 cursor-pointer active:scale-90 transition-all duration-500 glow-box"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full text-center py-6 mt-20 border-t border-white/5 text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} Ayush. Designed with React & Tailwind
          CSS.
        </p>
      </div>
    </section>
  );
};

export default Contact;
