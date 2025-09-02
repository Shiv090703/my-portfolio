"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { 
  SiSharp,       // C#
  SiPython,       // Python
  SiJavascript,   // JavaScript
  SiDotnet,       // ASP.NET
  SiHtml5,        // HTML
  SiCss3,         // CSS
  SiMysql,        // MySQL
  SiGit,          // Git
  SiVsco,         // VS Code
    
} from "react-icons/si";
import { FaJava, FaMicrosoft } from "react-icons/fa"; // Java, SQL Server alternative
import { FaGraduationCap } from "react-icons/fa";

export default function Portfolio() {
  const [active, setActive] = useState("Home");

  // Smooth scroll
  const scrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActive(id);
    }
  };

  // Highlight active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "Home",
        "about",
        "skills",
        "education",
        "projects",
        "resume",
        "contact",
      ];
      let current = "Home";
      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el && window.scrollY >= el.offsetTop - 200) {
          current = sec;
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-[#0a192f] text-gray-300 font-sans scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-[#0a192f]/90 backdrop-blur border-b border-gray-800 text-white z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-lg font-bold tracking-wide">Shivam Rana</h1>
          <div className="space-x-6">
            {[
              "Home",
              "about",
              "skills",
              "education",
              "projects",
              "resume",
              "contact",
            ].map((id) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`capitalize text-sm transition ${
                  active === id
                    ? "text-green-400 font-semibold"
                    : "text-gray-400 hover:text-green-400"
                }`}
              >
                {id}
              </button>
            ))}
          </div>
        </div>
      </nav>

                {/* Home Section */}
                <section
            id="Home"
            className="min-h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left px-6 gap-10"
          >
            {/* Profile Photo */}
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
            variants={fadeInUp}
            className="flex justify-center"
          >
            <img
              src="/profile.jpg" // 👉 place your image in /public/profile.jpg
              alt="Shivam Rana"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-lg object-cover"
            />
          </motion.div>


  {/* Home Text */}
  <motion.div
    initial="hidden"
    animate="visible"
    transition={{ duration: 1 }}
    variants={fadeInUp}
    className="max-w-2xl"
  >
    <p className="text-green-400 mb-2 text-sm">Hi, my name is</p>

          <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-4">
            Shivam Rana<span className="text-green-400">.</span>
          </h2>

          <h3 className="text-2xl md:text-4xl font-semibold text-gray-300 mb-6">
            I’m a <span className="text-blue-400">.NET & Web Developer</span> passionate about building 
            clean, modern, and high-performance digital experiences.
          </h3>

          <p className="text-gray-400 max-w-xl mb-8 leading-relaxed">
            Currently pursuing <span className="text-white font-semibold">MSc in Information Technology</span>, 
            with a strong foundation in <span className="text-white font-semibold">C#, ASP.NET, Java, and modern web technologies</span>.  
            I enjoy solving real-world problems through <span className="text-white font-semibold">clean code</span>, 
            continuous learning, and creating software that makes an impact.
          </p>

    <div className="flex flex-wrap justify-center md:justify-start gap-4">
      <a
        href="/Shivam Rana G (1) (1) (1).pdf"
        download
        className="px-6 py-3 border border-green-400 text-green-400 rounded-md hover:bg-green-400 hover:text-[#0a192f] transition"
      >
        ⬇ Resume
      </a>
      <a
        href="https://linkedin.com/in/shivam-rana-35513a300"
        target="_blank"
        className="px-6 py-3 border border-blue-400 text-blue-400 rounded-md hover:bg-blue-400 hover:text-[#0a192f] transition"
      >
        LinkedIn
      </a>
      <a
        href="https://github.com/Shiv090703"
        target="_blank"
        className="px-6 py-3 border border-gray-400 text-gray-300 rounded-md hover:bg-gray-300 hover:text-[#0a192f] transition"
      >
        GitHub
      </a>
    </div>
  </motion.div>
                </section>

                      {/* About */}
                <section id="about" className="max-w-6xl mx-auto px-6 py-20">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    variants={fadeInUp}
                  >
                    <h2 className="text-3xl font-bold text-white mb-6">
                      <span className="text-green-400">01.</span> About Me
                    </h2>

                    <p className="text-gray-400 leading-relaxed max-w-3xl mb-4">
                      Hello! I’m <span className="text-white font-semibold">Shivam Rana</span>, 
                      an MSc IT graduate with a passion for building modern, scalable, and 
                      user-friendly applications. My journey into tech started with curiosity 
                      about how software shapes everyday life, and over time it has grown into 
                      a deep interest in problem-solving and full-stack development.
                    </p>

                    <p className="text-gray-400 leading-relaxed max-w-3xl mb-4">
                      I specialize in <span className="text-blue-400">.NET technologies</span> and 
                      <span className="text-blue-400"> web development</span>, but I’m also 
                      comfortable working with Java, Python, SQL, and modern frontend frameworks. 
                      I enjoy turning ideas into real solutions that are clean, efficient, and 
                      impactful.
                    </p>

                    <p className="text-gray-400 leading-relaxed max-w-3xl">
                      Outside of coding, I’m always learning — whether it’s exploring new tools, 
                      collaborating on projects, or staying updated with industry trends. 
                      I’m eager to contribute my skills to a forward-thinking team and create 
                      digital experiences that make a difference.
                    </p>
                  </motion.div>
                </section>
                {/* Skills */}
          <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold text-white mb-12">
                <span className="text-green-400">02.</span> My Skills
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                {[
                  { name: "C#", icon: <SiSharp size={48} className="text-green-400" /> },
                  { name: "Java", icon: <FaJava size={48} className="text-orange-500" /> },
                  { name: "Python", icon: <SiPython size={48} className="text-yellow-400" /> },
                  { name: "JavaScript", icon: <SiJavascript size={48} className="text-yellow-300" /> },
                  { name: "ASP.NET", icon: <SiDotnet size={48} className="text-blue-500" /> },
                  { name: "HTML & CSS", icon: <><SiHtml5 size={48} className="text-orange-600 mr-2" /><SiCss3 size={48} className="text-blue-600" /></> },
                  { name: "SQL Server", icon: <FaMicrosoft size={48} className="text-blue-700" /> },
                  { name: "MySQL", icon: <SiMysql size={48} className="text-blue-500" /> },
                  { name: "Visual Studio", icon: <FaMicrosoft size={48} className="text-purple-500" /> },
                  { name: "VS Code", icon: <SiVsco size={48} className="text-blue-400" /> },
                  { name: "Git", icon: <SiGit size={48} className="text-red-500" /> },
                ].map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center bg-[#112240] p-6 rounded-lg border border-gray-700 hover:border-green-400 shadow-md transition cursor-pointer"
                  >
                    <div className="mb-4">{skill.icon}</div>
                    <span className="text-green-400 font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>
                {/* Education */}
          <section id="education" className="max-w-6xl mx-auto px-6 py-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold text-white mb-12">
                <span className="text-green-400">03.</span> My Journey
              </h2>

              <div className="relative border-l border-gray-700 pl-8 space-y-12">
                {/* MSc IT */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative"
                >
                  <span className="absolute -left-5 top-0 w-3 h-3 bg-green-400 rounded-full" />
                  <div className="flex items-center mb-2">
                    <FaGraduationCap className="w-6 h-6 text-green-400 mr-2" />
                    <h3 className="text-lg font-semibold text-white">MSc IT</h3>
                  </div>
                  <p className="text-gray-400 mb-1">
                    Sardar Patel University (2025) — CGPA: 7.11
                  </p>
                  <p className="text-gray-400 text-sm">
                    Key Subjects: Software Engineering, Database Management, Web Technologies.
                  </p>
                </motion.div>

                {/* BSc CS */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative"
                >
                  <span className="absolute -left-5 top-0 w-3 h-3 bg-green-400 rounded-full" />
                  <div className="flex items-center mb-2">
                    <FaGraduationCap className="w-6 h-6 text-green-400 mr-2" />
                    <h3 className="text-lg font-semibold text-white">BSc CS</h3>
                  </div>
                  <p className="text-gray-400 mb-1">
                    S. P. University (2023) — CGPA: 7.56
                  </p>
                  <p className="text-gray-400 text-sm">
                    Key Subjects: Programming, Algorithms, Database Systems, Web Development.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </section>


      {/* Projects */}
          <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold text-white mb-12">
                <span className="text-green-400">04.</span> My Projects
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#112240] p-6 rounded-md border border-gray-700 hover:border-green-400 shadow-md transition cursor-pointer"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Shivam Agarbatti – E-commerce Website
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Built with ASP.NET (C#), SQL Server, and HTML/CSS. Features user login, product management, cart system, and order tracking for both admin and client.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-green-400 text-[#0a192f] text-xs rounded-md">ASP.NET</span>
                    <span className="px-2 py-1 bg-green-400 text-[#0a192f] text-xs rounded-md">C#</span>
                    <span className="px-2 py-1 bg-green-400 text-[#0a192f] text-xs rounded-md">SQL Server</span>
                    <span className="px-2 py-1 bg-green-400 text-[#0a192f] text-xs rounded-md">HTML/CSS</span>
                  </div>
                </motion.div>
                {/* Add more projects here with same structure */}
              </div>
            </motion.div>
          </section>

            {/* Resume */}
            <section id="resume" className="max-w-6xl mx-auto px-6 py-20">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                variants={fadeInUp}
                className="flex flex-col md:flex-row items-start gap-10"
              >
                {/* Left Side - Text & Button */}
                <div className="md:w-2/3">
                  <h2 className="text-3xl font-bold text-white mb-6">
                    <span className="text-green-400">05.</span> Resume
                  </h2>
                  <p className="text-gray-400 mb-6">
                    Download my resume to see my full education, projects, and skills.
                  </p>
                  <a
                    href="/Shivam Rana G (1) (1).pdf"
                    download
                    className="px-8 py-3 border border-green-400 text-green-400 rounded-md hover:bg-green-400 hover:text-[#0a192f] transition text-sm font-medium"
                  >
                    ⬇ Download My Resume
                  </a>
                </div>
               </motion.div>
            </section>

            {/* Contact */}
            <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                variants={fadeInUp}
                className="flex flex-col md:flex-row items-start gap-10"
              >
                {/* Left Side - Text & Button */}
                <div className="md:w-2/3">
                  <h2 className="text-3xl font-bold text-white mb-6">
                    <span className="text-green-400">06.</span> Get In Touch
                  </h2>
                  <p className="text-gray-400 mb-6">
                    I’m open to new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
                  </p>
                  <a
                    href="mailto:Shivamrana090703@gmail.com"
                    className="px-6 py-3 border border-blue-400 text-blue-400 rounded-md hover:bg-blue-400 hover:text-[#0a192f] transition"
                  >
                    Say Hello
                  </a>

                  <div className="flex gap-6 mt-6 text-gray-400">
                    <a href="mailto:Shivamrana090703@gmail.com" target="_blank" className="hover:text-green-400 transition">
                      <Mail className="w-6 h-6" />
                    </a>
                    <a href="tel:+918799341427" target="_blank" className="hover:text-green-400 transition">
                      <Phone className="w-6 h-6" />
                    </a>
                    <a href="https://linkedin.com/in/shivam-rana-35513a300" target="_blank" className="hover:text-green-400 transition">
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="https://github.com/Shiv090703" target="_blank" className="hover:text-green-400 transition">
                      <Github className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </section>
      {/* Footer */}
      <footer className="bg-[#0a192f] border-t border-gray-800 text-gray-500 py-6 text-center text-sm">
        <p>
          Designed & Built by{" "}
          <span className="text-green-400">Shivam Rana</span> © 2025
        </p>
      </footer>
    </div>
  );
}
