import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certifications = [
  {
    title: "The Science of Well-Being",
    issuer: "Yale University",
    description:
      "Completed a course exploring the psychology of happiness and life satisfaction, including strategies for building better habits."
  },
  {
    title: "Full Stack Web Development",
    issuer: "Online Certification",
    description:
      "Focused on modern web development technologies including front-end and back-end development concepts."
  }
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="section-padding">
      <div className="container mx-auto">

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

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-card border border-border rounded-2xl p-6 flex gap-4 items-start"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Award size={18} className="text-primary" />
              </div>

              <div>
                <h3 className="font-semibold text-foreground">
                  {cert.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {cert.issuer}
                </p>

                <p className="text-sm text-muted-foreground mt-2">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CertificationsSection;