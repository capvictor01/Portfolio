import { motion } from "framer-motion";
import { ArrowRight, Play, Youtube } from "lucide-react";
import profileImg from "@/assets/profile.png";

const HeroSection = () =>
<section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16">
    {/* Decorative blobs */}
    <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 blob animate-blob" />
    <div className="absolute bottom-20 left-0 w-56 h-56 bg-secondary/10 blob animate-blob" style={{ animationDelay: "2s" }} />
    <div className="absolute top-40 left-1/3 w-16 h-16 bg-secondary/20 rounded-full animate-float" />

    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
      <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
        <span className="inline-block bg-primary/10 text-primary font-semibold text-sm px-4 py-1.5 rounded-full mb-6">
          👋 Welcome to my portfolio
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-4">
          Hello, I'm{" "}
          <span className="gradient-text">Victor Paul</span>{" "}
          Mkondokwa
        </h1>
        <p className="text-lg text-muted-foreground font-medium mb-2">
          Full Stack Developer | Content Creator | Future Entrepreneur
        </p>
        <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
          I am a Computer Science student specializing in Full Stack Software Development at Lovely Professional University.
          Passionate about building digital products, creating engaging tech content, and exploring opportunities in digital marketing and entrepreneurship.
        </p>

        <div className="flex flex-wrap gap-4">
          <a href="#portfolio" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
            View My Work <ArrowRight size={18} />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">
            Contact Me
          </a>
          <a target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity" href="https://www.youtube.com/@techgiants_tz">
            <Youtube size={18} /> YouTube
          </a>
        </div>

        <div className="flex items-center gap-6 mt-8">
          <div className="text-center">
            <p className="font-heading text-2xl font-bold text-foreground">8+</p>
            <p className="text-xs text-muted-foreground">Projects Done</p>
          </div>
          <div className="w-px h-10 bg-border" />
          <div className="text-center">
            <p className="font-heading text-2xl font-bold text-foreground">5+</p>
            <p className="text-xs text-muted-foreground">Happy Clients</p>
          </div>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative flex justify-center">
        <div className="relative w-72 h-72 sm:w-96 sm:h-96">
          <div className="absolute inset-0 bg-secondary/30 blob animate-blob" />
          <img src={profileImg} alt="Victor Paul Mkondokwa" className="relative z-10 w-full h-full object-cover blob" />
        </div>
        {/* Floating badge */}
        <a href="https://www.youtube.com/@techgiants_tz" target="_blank" rel="noopener noreferrer" className="absolute bottom-6 right-4 bg-card shadow-lg rounded-xl px-4 py-3 flex items-center gap-2 animate-float z-20 hover:shadow-xl transition-shadow cursor-pointer">
          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
            <Play size={14} className="text-primary" />
          </div>
          <div>
            <p className="text-xs font-bold text-foreground">TechGiants TZ</p>
            <p className="text-[10px] text-muted-foreground">YouTube Channel</p>
          </div>
        </a>
      </motion.div>
    </div>
  </section>;


export default HeroSection;