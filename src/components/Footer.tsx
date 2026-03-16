import { Github, Linkedin, Youtube, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-heading text-xl font-bold text-background">Victor<span className="text-primary">.</span></h3>
          <p className="text-sm text-background/60 mt-1">Full Stack Developer & Content Creator</p>
        </div>
        <div className="flex gap-4">
          {[
            { icon: Github, href: "https://github.com/capvictor01" },
            { icon: Linkedin, href: "https://linkedin.com/in/victorpaul" },
            { icon: Youtube, href: "https://youtube.com/@techgiants_tz" },
            { icon: Mail, href: "mailto:vpmkondokwa@gmail.com" },
          ].map((s) => (
            <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
              <s.icon size={16} className="text-background" />
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-background/10 mt-8 pt-6 text-center">
        <p className="text-sm text-background/50">© {new Date().getFullYear()} Victor Paul Mkondokwa. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
