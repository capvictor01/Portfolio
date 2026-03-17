import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { useRef, useState } from "react";

const certifications = [
  {
    title: "The Science of Well-Being",
    issuer: "Yale University",
    description: "Completed a course exploring the psychology of happiness and life satisfaction.",
    link: "https://www.coursera.org/account/accomplishments/verify/..." 
  },
  {
    title: "Full Stack Web Development",
    issuer: "Online Certification",
    description: "Focused on modern web development technologies including front-end and back-end concepts.",
    link: "#"
  },
  {
    title: "Java Programming – Self Paced",
    issuer: "GeeksforGeeks",
    description: "Completed a comprehensive Java Programming course covering core concepts and OOP skills.",
    link: "https://media.geeksforgeeks.org/courses/certificates/da5e203f652ca271a31db32f06fbe14a.pdf"
  }
];

const duplicatedCerts = [...certifications, ...certifications];

const CertificationsSection = () => {
  const constraintsRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  return (
    <section id="certifications" className="section-padding overflow-hidden">
      <div className="container mx-auto" ref={constraintsRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Certifications
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-2">
            Professional Certifications
          </h2>
        </motion.div>

        <div className="relative flex overflow-hidden group cursor-grab active:cursor-grabbing">
          <motion.div
            className="flex gap-6" // Reduced gap between cards
            drag="x"
            dragConstraints={constraintsRef}
            dragElastic={0.1}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
            animate={!isDragging ? { x: ["0%", "-50%"] } : {}}
            transition={{
              ease: "linear",
              duration: 20, 
              repeat: Infinity,
            }}
            whileHover={{ transition: { duration: 0 } }} 
            style={{ width: "max-content" }}
          >
            {duplicatedCerts.map((cert, index) => (
              <div 
                key={index}
                // SMALLER WIDTHS APPLIED HERE
                className="block shrink-0 w-[75vw] md:w-[40vw] lg:w-[30vw] max-w-[420px]"
              >
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  draggable="false"
                  onClick={(e) => isDragging && e.preventDefault()}
                >
                  <motion.div
                    whileHover={{ 
                      borderColor: "var(--primary)",
                      boxShadow: "0px 10px 25px -5px rgba(0, 0, 0, 0.1), 0px 8px 10px -6px rgba(0, 0, 0, 0.1)"
                    }}
                    // Adjusted padding (p-5) to fit the smaller card size
                    className="bg-card border border-border rounded-2xl p-5 flex gap-4 items-start h-full transition-colors duration-300"
                  >
                    <div className="w-10 h-10 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                      <Award size={18} className="text-primary" />
                    </div>

                    <div className="overflow-hidden">
                      <h3 className="font-semibold text-foreground text-sm md:text-base truncate">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {cert.issuer}
                      </p>
                      {/* Description truncated to keep card height consistent */}
                      <p className="text-xs text-muted-foreground mt-2 line-clamp-2">
                        {cert.description}
                      </p>
                      {cert.link && (
                        <span className="text-primary text-xs font-medium mt-3 inline-block">
                          View Certificate →
                        </span>
                      )}
                    </div>
                  </motion.div>
                </a>
              </div>
            ))}
          </motion.div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;