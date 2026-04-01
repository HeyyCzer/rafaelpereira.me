import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
	{
		icon: Github,
		platform: "GitHub",
		handle: "@heyyczer",
		href: "https://github.com/heyyczer",
	},
	{
		icon: Linkedin,
		platform: "LinkedIn",
		handle: "Rafael Pereira",
		href: "https://www.linkedin.com/in/heyypereira/",
	},
	{
		icon: Mail,
		platform: "E-mail",
		handle: "contato@rafaelpereira.me",
		href: "mailto:contato@rafaelpereira.me",
	},
	// TODO: Adicionar currículo
	// {
	// 	icon: FileCode,
	// 	platform: "Currículo",
	// 	handle: "Download PDF",
	// 	href: "#",
	// },
];

export function HeroSection() {
	return (
		<section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-20">
			<div className="max-w-6xl mx-auto w-full">
				<h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold leading-[0.9] tracking-tight">
					<span className="text-foreground">Rafael</span>
					<br />
					<span className="text-primary">Pereira</span>
				</h1>

				<p className="mt-8 text-xl md:text-2xl text-muted-foreground max-w-lg leading-relaxed">
					Transformando regras de negócio em sistemas robustos e escaláveis
				</p>

				<div className="mt-12">
					<p className="font-mono text-xs text-muted-foreground uppercase tracking-[0.2em] mb-6">
						Conecte-se Comigo
					</p>

					<div className="flex flex-wrap gap-3">
						{socialLinks.map((link) => (
							<a
								key={link.platform}
								href={link.href}
								target={link.href.startsWith("http") ? "_blank" : undefined}
								rel={
									link.href.startsWith("http")
										? "noopener noreferrer"
										: undefined
								}
								className="flex items-center gap-3 px-5 py-3.5 rounded-full border border-border bg-card hover:border-primary/50 hover:bg-secondary transition-all duration-300 group"
							>
								<link.icon className="w-5 h-5 text-primary" />
								<div className="flex flex-col">
									<span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
										{link.platform}
									</span>
									<span className="text-sm text-foreground group-hover:text-primary transition-colors">
										{link.handle}
									</span>
								</div>
							</a>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
