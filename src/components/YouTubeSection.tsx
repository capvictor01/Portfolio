import { motion } from "framer-motion";
import { Youtube, ExternalLink } from "lucide-react";

const YouTubeSection = () => (

  <section className="section-padding section-alt">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">
          YouTube
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-2">
          TechGiants TZ Channel
        </h2>
        <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
          Sharing product reviews, tech accessories, and technology-related
          content with a growing community.
        </p>
      </motion.div>


  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className="max-w-3xl mx-auto"
  >
    <div className="rounded-2xl overflow-hidden shadow-xl border border-border aspect-video relative">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/E3SvSPcKDo0"
        title="TechGiants TZ Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>

    <div className="flex justify-center mt-8">
      <a
        href="https://www.youtube.com/@techgiants_tz"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-destructive text-destructive-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
      >
        <Youtube size={20} /> Subscribe to TechGiants TZ{" "}
        <ExternalLink size={14} />
      </a>
    </div>
  </motion.div>
</div>


  </section>
);

export default YouTubeSection;
