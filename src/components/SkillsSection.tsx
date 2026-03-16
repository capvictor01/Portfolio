import { motion } from "framer-motion";

const technicalSkills = [
  { name: "Java", level: 80 },
  { name: "Python", level: 75 },
  { name: "C++", level: 65 },
  { name: "SQL", level: 78 },
  { name: "HTML & CSS", level: 90 },
  { name: "WordPress / WooCommerce", level: 85 },
  { name: "Power BI", level: 70 },
];

const professionalSkills = [
  "Analytical Problem Solving",
  "Collaborative Teamwork",
  "Empathetic Communication",
  "Adaptive Mindset",
];

const additionalSkills = [
  "Digital Marketing",
  "Product Reviewing",
  "Content Creation",
  "Website Development",
];

const SkillsSection = () => (
  <section id="skills" className="section-padding">
    <div className="container mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">Skills</span>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-2">My Expertise</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Technical */}
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h3 className="font-heading text-xl font-bold text-foreground mb-6">Technical Skills</h3>
          <div className="space-y-5">
            {technicalSkills.map((s) => (
              <div key={s.name}>
                <div className="flex justify-between mb-1.5">
                  <span className="text-sm font-medium text-foreground">{s.name}</span>
                  <span className="text-sm text-muted-foreground">{s.level}%</span>
                </div>
                <div className="h-2.5 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-primary"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Professional & Additional */}
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h3 className="font-heading text-xl font-bold text-foreground mb-6">Professional Skills</h3>
          <div className="flex flex-wrap gap-3 mb-10">
            {professionalSkills.map((s) => (
              <span key={s} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                {s}
              </span>
            ))}
          </div>

          <h3 className="font-heading text-xl font-bold text-foreground mb-6">Additional Skills</h3>
          <div className="flex flex-wrap gap-3">
            {additionalSkills.map((s) => (
              <span key={s} className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default SkillsSection;
