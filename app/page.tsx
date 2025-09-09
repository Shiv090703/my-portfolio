"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { FaGraduationCap } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter';
import TargetCursor from '../components/TargetCursor';
import Image from "next/image"; 
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

  const [selectedProject, setSelectedProject] = useState<null | {
    title: string;
    desc: string;
    tech: string[];
    images: string[];
    github: string;
  }>(null);

  const projects = [
    {
      title: "Shivam Agarbatti – E-commerce Website",
      desc: "Built with ASP.NET (C#), SQL Server, and HTML/CSS. Features user login, product management, cart system, and order tracking for both admin and client.",
      tech: ["ASP.NET", "C#", "SQL Server", "HTML/CSS"],
      images: ["/01.png", "/02.png", "/03.png", "/04.png", "/05.png", "/06.png", "/07.png", "/08.png", "/09.png", "/10.png"], // 👉 put screenshots in /public
      github: "https://github.com/Shiv090703/ShivamAgarbatti",
    },
    // ➕ Add more projects here
  ];
  return (

    <div className="bg-[#0a192f] text-gray-300 font-sans scroll-smooth">
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}
      />
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-[#0a192f]/90 backdrop-blur border-b border-gray-800 text-white z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          {/* Logo / Title → scrolls to Home */}
          <button
            onClick={() => scrollTo("Home")}
            className="text-3xl md:text-4xl font-extrabold tracking-wide text-white hover:text-green-400 transition cursor-target"
          >
            Shivam Rana
          </button>

          {/* Menu */}
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
                className={`capitalize text-sm transition cursor-target ${active === id
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
        className="min-h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left px-6 gap-10 relative"
      >
        {/* Background Decoration */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0a192f] via-[#0f223f] to-[#0a192f]" />

        {/* Profile Photo with Floating Effect + ShapeBlur */}
        <div className="relative flex justify-center items-center">
          

          {/* Floating Photo */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="relative"
          >
            <Image
              src="/profile.jpg"
              alt="Shivam Rana"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-lg object-cover cursor-target"
            />

            {/* Open to Work Badge */}
            <div className="absolute bottom-2 right-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full shadow-lg">
              Open to Work
            </div>
          </motion.div>
        </div>
        {/* Home Text */}
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
          variants={fadeInUp}
          className="max-w-2xl"
        >
          <p className="text-green-400 mb-2 text-sm ">Hi, my name is</p>

          <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-4 cursor-target">
            Shivam Rana
          </h2>

          <h3 className="text-2xl md:text-4xl font-semibold text-gray-300 mb-6">
            I’m a{" "}
            <span className="text-blue-400">
              <Typewriter
                words={[".NET Developer", "Web Developer", "Problem Solver", "Open to Opportunities"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h3>

          <p className="text-gray-400 max-w-xl mb-8 leading-relaxed cursor-target">
            I have recently completed my <span className="text-white font-semibold">MSc in Information Technology</span>,
            building a solid foundation in <span className="text-white font-semibold">C#, ASP.NET, Java, and modern web technologies</span>.
            Currently, I am seeking new opportunities to apply my knowledge, sharpen my skills, and contribute to impactful digital solutions
            through <span className="text-white font-semibold">clean code</span>, continuous learning, and innovation.
          </p>


          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="/Shivam-Rana.pdf"
              download
              className="px-6 py-3 border border-green-400 text-green-400 rounded-md hover:bg-green-400 hover:text-[#0a192f] transition flex items-center gap-2 cursor-target"
            >
              ⬇ Resume
            </a>
            <a
              href="https://linkedin.com/in/shivam-rana-35513a300"
              target="_blank"
              className="px-6 py-3 border border-blue-400 text-blue-400 rounded-md hover:bg-blue-400 hover:text-[#0a192f] transition flex items-center gap-2 cursor-target"
            >
              <Linkedin /> LinkedIn
            </a>
            <a
              href="https://github.com/Shiv090703"
              target="_blank"
              className="px-6 py-3 border border-gray-400 text-gray-300 rounded-md hover:bg-gray-300 hover:text-[#0a192f] transition flex items-center gap-2 cursor-target"
            >
              <FaGithub /> GitHub
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
          <h2 className="text-3xl font-bold text-white mb-6 ">
            <span className="text-green-400 cursor-target">01.</span> About Me
          </h2>

          <p className="text-gray-400 leading-relaxed max-w-3xl mb-4">
            Hello! I’m <span className="text-white font-semibold cursor-target">Shivam Rana</span>,
            an MSc IT graduate with a passion for building modern, scalable, and
            user-friendly applications. My journey into tech started with curiosity
            about how software shapes everyday life, and over time it has grown into
            a deep interest in problem-solving and full-stack development.
          </p>

          <p className="text-gray-400 leading-relaxed max-w-3xl mb-4">
            I specialize in <span className="text-blue-400 cursor-target">.NET technologies</span> and
            <span className="text-blue-400 cursor-target"> web development</span>, but I’m also
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
            <span className="text-green-400 cursor-target">02.</span> My Skills
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 ">
            {[
              { name: "C#", icon: "devicon-csharp-plain colored cursor-target" },
              { name: "Java", icon: "devicon-java-plain colored cursor-target" },
              { name: "Python", icon: "devicon-python-plain colored cursor-target" },
              { name: "JavaScript", icon: "devicon-javascript-plain colored cursor-target" },
              { name: "ASP.NET", icon: "devicon-dot-net-plain colored cursor-target" },
              { name: "HTML", icon: "devicon-html5-plain colored cursor-target" },
              { name: "CSS", icon: "devicon-css3-plain colored cursor-target" },
              { name: "SQL Server", icon: "devicon-microsoftsqlserver-plain colored cursor-target" },
              { name: "MySQL", icon: "devicon-mysql-plain colored cursor-target" },
              { name: "Visual Studio", icon: "devicon-visualstudio-plain colored cursor-target" },
              { name: "VS Code", icon: "devicon-vscode-plain colored cursor-target" },
              { name: "Git", icon: "devicon-git-plain colored cursor-target" },
            ].map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center justify-center p-6 bg-[#112240] rounded-lg border border-gray-700 hover:border-green-400 hover:scale-105 transition transform"
              >
                <i className={`${skill.icon} text-5xl`}></i>
                <p className="mt-3 text-sm font-semibold text-green-400">{skill.name}</p>
              </div>
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
            <span className="text-green-400 cursor-target">03.</span> My Journey
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
                <h3 className="text-lg font-semibold text-white cursor-target">MSc IT</h3>
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
                <h3 className="text-lg font-semibold text-white cursor-target">BSc CS</h3>
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
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h2 className="text-3xl font-bold text-white mb-12">
            <span className="text-green-400 cursor-target">04.</span> My Projects
          </h2>
          {/* Project Grid */}
          <div className="grid md:grid-cols-2 gap-6 ">
            {projects.map((proj, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedProject(proj)}
                className="bg-[#112240] p-6 rounded-md border border-gray-700 hover:border-green-400 shadow-md transition cursor-pointer"
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  {proj.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{proj.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 bg-green-400 text-[#0a192f] text-xs rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur flex justify-center items-center z-50"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="bg-[#0a192f] max-w-2xl w-full p-6 rounded-lg shadow-lg text-white relative"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-3 right-3 text-gray-400 hover:text-green-400 text-xl cursor-target"
                >
                  ✕
                </button>

                <h3 className="text-2xl font-bold mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400 mb-4">{selectedProject.desc}</p>

                {/* Image Slider */}
                <div className="flex overflow-x-auto gap-4 snap-x mb-4">
                  {selectedProject.images.map((Image, idx) => (
                    <img
                      key={idx}
                      src={Image}
                      alt="Project screenshot"
                      className="w-80 h-48 object-cover rounded-md shadow-md snap-center"
                    />
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 bg-green-400 text-[#0a192f] text-xs rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* GitHub Link */}
                <a
                  href={selectedProject.github}
                  target="_blank"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-green-400 text-[#0a192f] font-semibold rounded-md hover:bg-green-500 transition cursor-target"
                >
                  <FaGithub /> View on GitHub
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
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
              <span className="text-green-400 cursor-target">05.</span> Resume
            </h2>
            <p className="text-gray-400 mb-6">
              Download my resume to see my full education, projects, and skills.
            </p>
            <a
              href="/Shivam-Rana.pdf"
              download
              className="px-8 py-3 border border-green-400 text-green-400 rounded-md hover:bg-green-400 hover:text-[#0a192f] transition text-sm font-medium cursor-target"
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
              <span className="text-green-400 cursor-target">06.</span> Get In Touch
            </h2>
            <p className="text-gray-400 mb-6">
              I’m open to new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
            </p>
            <a
              href="mailto:Shivamrana090703@gmail.com"
              className="px-6 py-3 border border-blue-400 text-blue-400 rounded-md hover:bg-blue-400 hover:text-[#0a192f] transition cursor-target"
            >
              Say Hello
            </a>

            <div className="flex gap-6 mt-6 text-gray-400">
              <a href="mailto:Shivamrana090703@gmail.com" target="_blank" className="hover:text-green-400 transition cursor-target">
                <Mail className="w-6 h-6" />
              </a>
              <a href="tel:+918799341427" target="_blank" className="hover:text-green-400 transition cursor-target">
                <Phone className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/shivam-rana-35513a300" target="_blank" className="hover:text-green-400 transition cursor-target">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com/Shiv090703" target="_blank" className="hover:text-green-400 transition cursor-target">
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
          <span className="text-green-400 cursor-target">Shivam Rana</span> © 2025
        </p>
      </footer>
    </div>
  );
}
