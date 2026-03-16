import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import ecommerceImg from "@/assets/project-ecommerce.png";
import artAssetImg from "@/assets/artnasset.png";
import powerbiImg from "@/assets/blinkit.png";

const projects = [
{
img: ecommerceImg,
title: "Female Clothing E-commerce Store",
desc: "A fully developed online clothing store for women built using WordPress and WooCommerce with a user-friendly design.",
tools: ["WordPress", "WooCommerce", "CSS"],
link: "https://monicacakes.org/",
},
{
  img: artAssetImg,
  title: "Art & Asset Marketplace",
  desc: "A web platform designed to help students buy and sell used products while also showcasing and selling creative artwork made by university students. The platform connects student sellers with buyers and provides a simple online marketplace for second-hand items and student art.",
  tools: ["Web Development", "WordPress", "SEO", "Digital Marketing"],
  link: "https://artnasset.in/"
},
{
img: powerbiImg,
title: "Blinkit Power BI Dashboard",
desc: "A dynamic Power BI dashboard analyzing Blinkit data and visualizing insights through interactive charts.",
tools: ["Power BI", "Data Analysis", "SQL"],
link: "https://github.com/capvictor01/Blinkit-Sales-Dashboard",
},
];

const PortfolioSection = () => (

  <section id="portfolio" className="section-padding">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">
          Projects
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-2">
          Featured Projects
        </h2>
      </motion.div>


  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {projects.map((p, i) => {
      const Wrapper = p.link ? "a" : "div";
      const wrapperProps = p.link
        ? { href: p.link, target: "_blank", rel: "noopener noreferrer" }
        : {};

      return (
        <motion.div
          key={p.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 }}
          className="bg-card rounded-2xl overflow-hidden card-hover border border-border group"
        >
          <Wrapper {...wrapperProps} className={p.link ? "block" : ""}>
            <div className="relative overflow-hidden h-52">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors flex items-center justify-center">
                <ExternalLink
                  className="text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                  size={28}
                />
              </div>
            </div>

            <div className="p-5">
              <h3 className="font-heading font-bold text-foreground mb-2">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {p.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {p.tools.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Wrapper>
        </motion.div>
      );
    })}
  </div>
</div>

  </section>
);

export default PortfolioSection;
