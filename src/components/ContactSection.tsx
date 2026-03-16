import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Youtube, Send } from "lucide-react";
import { toast } from "sonner";
import emailjs from "emailjs-com";

const contactInfo = [
  { icon: Mail, label: "vpsquare35@icloud.com", href: "mailto:vpsquare35@icloud.com" },
  { icon: Phone, label: "+255 747 053 076", href: "tel:+255747053076" },
  { icon: MapPin, label: "Tanzania", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/victorpaul" },
  { icon: Github, label: "GitHub", href: "https://github.com/capvictor01" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com/@techgiants_tz" },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_hceqk0s",
        "template_zyj4zvc",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "huq_tnjtno2g5jsDA"
      )
      .then(() => {
        toast.success("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => {
        toast.error("Failed to send message. Please try again.");
      });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Contact
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-2">
            Got A Project? Let's Talk
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading text-xl font-bold text-foreground mb-6">
              Get in Touch
            </h3>

            <div className="space-y-4">
              {contactInfo.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <c.icon
                      size={18}
                      className="text-primary group-hover:text-primary-foreground transition-colors"
                    />
                  </div>

                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {c.label}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />

            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />

            <textarea
              placeholder="Your Message"
              required
              rows={5}
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
            />

            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              Send Message <Send size={16} />
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;