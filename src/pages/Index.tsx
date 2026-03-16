import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import CertificationsSection from "@/components/CertificationsSection";
import YouTubeSection from "@/components/YouTubeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ServicesSection />
    <PortfolioSection />
    <CertificationsSection />
    <YouTubeSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
