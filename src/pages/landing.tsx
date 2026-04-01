import { ContactSection } from "../components/contact-section";
import { Footer } from "../components/footer";
import { HeroSection } from "../components/hero-section";
import { Marquee } from "../components/marquee";
import { Navbar } from "../components/navbar";
import { ProjectsSection } from "../components/projects-section";
import { SkillsSection } from "../components/skills-section";

export function LandingPage() {
	return (
		<main className="min-h-screen bg-background text-foreground">
			<Navbar />
			<HeroSection />
			<Marquee text="BACKEND" />
			<SkillsSection />
			<ProjectsSection />
			<ContactSection />
			<Footer />
		</main>
	);
}
