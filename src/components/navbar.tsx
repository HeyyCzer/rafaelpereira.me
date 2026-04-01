import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
	{ href: "#skills", label: "Skills" },
	{ href: "#projects", label: "Projetos" },
	{ href: "#contact", label: "Contato" },
];

export function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
					? "bg-background/90 backdrop-blur-lg border-b border-border"
					: ""
				}`}
		>
			<nav className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-5 flex items-center justify-between">
				<a
					href="/"
					className="font-display text-2xl font-extrabold text-foreground hover:text-primary transition-colors"
				>
					RP<span className="text-primary">.</span>
				</a>

				{/* Desktop Nav */}
				<div className="hidden md:flex items-center gap-10">
					{navLinks.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider"
						>
							{link.label}
						</a>
					))}
					<a
						href="https://github.com"
						target="_blank"
						rel="noopener noreferrer"
						className="px-6 py-2.5 rounded-full border border-border text-sm font-mono text-foreground hover:border-primary hover:text-primary transition-all uppercase tracking-wider"
					>
						GitHub
					</a>
				</div>

				{/* Mobile Menu Button */}
				<button
					type="button"
					onClick={() => setIsOpen(!isOpen)}
					className="md:hidden p-2 text-foreground"
					aria-label="Toggle menu"
				>
					{isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
				</button>
			</nav>

			{/* Mobile Nav */}
			{isOpen && (
				<div className="md:hidden bg-background border-b border-border">
					<div className="px-6 py-6 flex flex-col gap-6">
						{navLinks.map((link) => (
							<a
								key={link.href}
								href={link.href}
								onClick={() => setIsOpen(false)}
								className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider"
							>
								{link.label}
							</a>
						))}
						<a
							href="https://github.com"
							target="_blank"
							rel="noopener noreferrer"
							className="px-6 py-2.5 rounded-full border border-border text-sm font-mono text-foreground hover:border-primary hover:text-primary transition-all text-center uppercase tracking-wider"
						>
							GitHub
						</a>
					</div>
				</div>
			)}
		</header>
	);
}
