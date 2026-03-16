import { motion } from "framer-motion";
import { Globe, ShoppingCart, Megaphone, Star } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    desc: "Design and develop user-friendly websites using WordPress and WooCommerce, including e-commerce platforms.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Store Setup",
    desc: "Create engaging online stores, especially fashion or product-based websites with intuitive shopping experiences.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing Support",
    desc: "Assist with marketing campaigns using tools like MailChimp, poster designs, and online promotional strategies.",
  },
  {
    icon: Star,
    title: "Product Reviews",
    desc: "Offer honest product reviews on YouTube, helping brands showcase their products to wider audiences.",
  },
];

const ServicesSection = () => (
  <section id="services" className="section-padding section-alt">
    <div className="container mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">Services</span>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-2">What I Can Do For You</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-2xl p-6 card-hover border border-border group"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
              <s.icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-3">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
