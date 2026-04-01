import { Cloud, Code2, Database, Layers, Server, Shield } from "lucide-react";

const skills = [
	{
		icon: Code2,
		title: "Linguagens",
		items: ["TypeScript", "JavaScript", "Java", "Lua", "HTML/CSS"],
	},
	{
		icon: Database,
		title: "Bancos de Dados",
		items: ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
	},
	{
		icon: Cloud,
		title: "Cloud & DevOps",
		items: ["Docker", "GitHub Actions", "CI/CD", "VPS"],
	},
	{
		icon: Server,
		title: "Frameworks",
		items: ["Next.js", "React", "NestJS", "Express", "Socket.IO"],
	},
	{
		icon: Layers,
		title: "Arquitetura",
		items: ["REST APIs", "WebSockets", "Microservices", "Event-Driven"],
	},
	{
		icon: Shield,
		title: "Segurança",
		items: ["JWT", "Licenciamento", "Anti-cheat", "RBAC"],
	},
];

export function SkillsSection() {
	return (
		<section id="skills" className="py-24 px-6 md:px-12 lg:px-20">
			<div className="max-w-6xl mx-auto">
				<h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
					Domine a
					<br />
					<span className="text-primary">Stack</span>
				</h2>
				<p className="text-muted-foreground text-lg mb-16 max-w-md">
					Tecnologias e ferramentas que utilizo para construir sistemas robustos
					e escaláveis.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{skills.map((skill) => (
						<div
							key={skill.title}
							className="group p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300"
						>
							<div className="flex items-center gap-4 mb-5">
								<div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
									<skill.icon className="w-6 h-6 text-primary" />
								</div>
								<h3 className="font-display text-xl font-bold text-foreground">
									{skill.title}
								</h3>
							</div>
							<div className="flex flex-wrap gap-2">
								{skill.items.map((item) => (
									<span
										key={item}
										className="px-3 py-1.5 text-sm rounded-full bg-secondary text-muted-foreground font-mono hover:text-primary hover:bg-primary/10 transition-colors cursor-default"
									>
										{item}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
