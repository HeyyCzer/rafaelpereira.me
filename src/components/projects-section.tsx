import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { Marquee } from "./marquee";

const projects = [
	{
		title: "HeyyShop",
		description:
			"Marketplace de scripts de alta performance para servidores FiveM. Plataforma completa com dashboard, sistema de licenças e documentação. Atende centenas de servidores de roleplay no Brasil.",
		tech: ["TypeScript", "Next.js", "Docker", "Mintlify"],
		stats: "+1300 licenças",
		live: "https://heyyshop.com.br",
	},
	{
		title: "API HeyyShop",
		description:
			"API de autenticação de software e processamento de pagamentos, garantindo proteção e monetização de recursos para desenvolvedores FiveM.",
		tech: ["TypeScript", "Docker", "JWT", "Pagamentos"],
		stats: "+1300 licenças",
		live: "https://api.heyyczer.com",
	},
	{
		title: "SirenX",
		description:
			"Ferramenta web open-source para criação e edição visual de arquivos carcols.meta do GTA V/FiveM. Simplifica a configuração de sereias e luzes de veículos sem edição manual de XML.",
		tech: ["TypeScript", "Next.js", "CSS"],
		stats: "25 stars",
		github: "https://github.com/HeyyCzer/SirenX",
		live: "https://sirenx.heyyczer.com",
	},
	{
		title: "Portfólio Pessoal",
		description:
			"Este portfólio — construído com React, Vite e Tailwind CSS, com foco em design moderno e performance.",
		tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
		live: "https://rafaelpereira.me",
	},
	{
		title: "FiveM Natives Skill",
		description:
			"Skill para Claude Code com referência completa das funções nativas do FiveM, auto-atualizada a cada 3 dias a partir do cfxnatives.dev. Organizada por namespace com boas práticas de desenvolvimento.",
		tech: ["TypeScript", "Bun", "Claude Code", "GitHub Actions"],
		stats: "AI Skill",
		github: "https://github.com/HeyyCzer/fivem-natives-skill",
	},
	{
		title: "Naval Battle TS",
		description:
			"Jogo de batalha naval multiplayer em tempo real, com comunicação via WebSockets e Socket.IO. Desenvolvido inteiramente em TypeScript.",
		tech: ["TypeScript", "Socket.IO", "WebSockets", "Node.js"],
		stats: "Multiplayer",
		github: "https://github.com/HeyyCzer/navalbattle-ts",
	},
	{
		title: "CreateProtected",
		description:
			"Mod NeoForge para Minecraft que impede interações com blocos do mod Create em chunks reivindicados por outros jogadores via FTB Chunks/FTB Teams. Proteção anti-grief para servidores modded.",
		tech: ["Java", "NeoForge", "Minecraft"],
		stats: "Anti-grief",
		github: "https://github.com/HeyyCzer/CreateProtected",
	},
	{
		title: "Monopoly Farming MC",
		description:
			"Plugin Minecraft para jogar Monopoly Farming — jogo de tabuleiro criado em um projeto escolar de Geografia — de forma digital e multiplayer, com mapa customizado.",
		tech: ["Java", "Bukkit/Spigot", "Minecraft"],
		stats: "Projeto escolar",
		github: "https://github.com/HeyyCzer/MonopolyFarming-MC",
	},
];

export function ProjectsSection() {
	return (
		<section id="projects" className="py-12">
			<Marquee text="PROJETOS" />

			<div className="py-24 px-6 md:px-12 lg:px-20">
				<div className="max-w-6xl mx-auto">
					<h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
						Observe os
						<br />
						<span className="text-primary">Projetos</span>
					</h2>
					<p className="text-muted-foreground text-lg mb-16 max-w-md">
						Sistemas construídos com foco em performance, escalabilidade e
						código limpo.
					</p>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
						{projects.map((project, index) => (
							<div
								key={project.title}
								className="group relative p-6 md:p-8 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300 flex flex-col"
							>
								<div className="flex items-start justify-between mb-4">
									<div>
										<span className="font-mono text-xs text-primary uppercase tracking-wider">
											Projeto {String(index + 1).padStart(2, "0")}
										</span>
										<h3 className="font-display text-2xl font-bold text-foreground mt-1">
											{project.title}
										</h3>
									</div>
									{project.stats && (
										<span className="px-3 py-1.5 rounded-full bg-primary/10 text-primary font-mono text-xs font-medium">
											{project.stats}
										</span>
									)}
								</div>

								<p className="text-muted-foreground mb-6 leading-relaxed">
									{project.description}
								</p>

								<div className="flex flex-wrap gap-2 mb-6">
									{project.tech.map((tech) => (
										<span
											key={tech}
											className="px-3 py-1.5 text-xs rounded-full border border-border text-muted-foreground font-mono"
										>
											{tech}
										</span>
									))}
								</div>

								<div className="flex items-center gap-4 mt-auto">
									<a
										href={project.github}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
									>
										<Github className="w-4 h-4" />
										<span className="font-mono">Código</span>
									</a>
									{project.live && (
										<a
											href={project.live}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
										>
											<ExternalLink className="w-4 h-4" />
											<span className="font-mono">Demo</span>
										</a>
									)}
								</div>

								<a
									href={project.live ?? project.github}
									target="_blank"
									rel="noopener noreferrer"
									className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity"
								>
									<ArrowUpRight className="w-5 h-5 text-primary" />
								</a>
							</div>
						))}
					</div>

					<div className="mt-12 text-center">
						<a
							href="https://github.com/HeyyCzer"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-display font-bold hover:opacity-90 transition-opacity"
						>
							Ver todos no GitHub
							<ArrowUpRight className="w-5 h-5" />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
