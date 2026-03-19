import { motion } from "framer-motion";
import { CheckCircle2, Rocket, GraduationCap, Download, Eye } from "lucide-react";
import profileImg from "@/assets/AboutPhoto.png";

const highlights = [
  {
    icon: GraduationCap,
    title: "Lovely Professional University",
    desc: "Bachelor of Technology – Computer Science Engineering | Full Stack Software Development | CGPA: 7.1 | Aug 2023 – Present | Punjab, India"
  },
  {
    icon: GraduationCap,
    title: "St. Joseph Cathedral High School",
    desc: "Intermediate | Division: 2.10 | July 2021 – May 2023 | Dar Es Salaam, Tanzania"
  },
  {
    icon: GraduationCap,
    title: "Marian Boys Secondary School",
    desc: "O-Level (Grade 10) | Division: 1.8 | Jan 2017 – Nov 2020 | Bagamoyo, Tanzania"
  }
];

const AboutSection = () => (
  <section id="about" className="section-padding section-alt">
    <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <div className="w-full max-w-md mx-auto">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-primary/5" />
            <img
              src={profileImg}
              alt="Victor Paul"
              className="w-full h-auto relative z-10"
            />
          </div>

          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-secondary/20 rounded-2xl -z-10" />
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full -z-10" />
        </div>
      </motion.div>

      {/* About Content */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">
          About Me
        </span>

        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-6">
          Designing Solutions, Not Just Visuals
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-8">
          Victor is a technology enthusiast and aspiring entrepreneur who enjoys building digital solutions
          and creating online content. While studying Full Stack Software Development, he is also developing
          skills in digital marketing and content creation. His long-term goal is to build his own successful
          business ventures, including a future real estate company.
        </p>

        {/* Highlights */}
        <div className="space-y-5">
          {highlights.map((h) => (
            <div key={h.title} className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <h.icon size={18} className="text-primary" />
              </div>

              <div>
                <h4 className="font-semibold text-foreground">{h.title}</h4>
                <p className="text-sm text-muted-foreground">{h.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CV Buttons */}
        <div className="flex gap-4 mt-8">

          {/* View CV */}
          <a
            href="/Victor%20CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-secondary text-secondary px-6 py-3 rounded-lg font-semibold hover:bg-secondary hover:text-secondary-foreground transition"
          >
            <Eye size={18} />
            View CV
          </a>

          {/* Download CV */}
          <a
            href="/Victor%20CV.pdf"
            download
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            <Download size={18} />
            Download CV
          </a>

        </div>

      </motion.div>
    </div>
  </section>
);

export default AboutSection;