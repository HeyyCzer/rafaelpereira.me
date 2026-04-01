import { ArrowUpRight, Mail } from "lucide-react";

export function ContactSection() {
	return (
		<section id="contact" className="py-24 px-6 md:px-12 lg:px-20">
			<div className="max-w-6xl mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
					{/* Main CTA Card */}
					<div className="p-8 md:p-10 rounded-2xl border border-border bg-card">
						<span className="font-mono text-xs text-primary uppercase tracking-[0.2em]">
							Get in touch
						</span>
						<h2 className="font-display text-4xl md:text-5xl font-extrabold mt-4 mb-6 leading-tight">
							Vamos
							<br />
							<span className="text-primary">Conversar</span>
						</h2>
						<p className="text-muted-foreground text-lg mb-8 leading-relaxed">
							Interessado em trabalhar juntos? Entre em contato para discutir
							seu próximo projeto ou oportunidade.
						</p>
						<a
							href="mailto:contato@rafaelpereira.me"
							className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-display font-bold hover:opacity-90 transition-opacity"
						>
							<Mail className="w-5 h-5" />
							Mandar E-mail
						</a>
					</div>

					{/* Contact Links */}
					<div className="flex flex-col gap-4">
						<a
							href="mailto:contato@rafaelpereira.me"
							className="group flex items-center justify-between p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300"
						>
							<div>
								<span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
									E-mail
								</span>
								<p className="text-foreground font-medium mt-1">
									contato@rafaelpereira.me
								</p>
							</div>
							<ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
						</a>

						<a
							href="https://github.com/heyyczer"
							target="_blank"
							rel="noopener noreferrer"
							className="group flex items-center justify-between p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300"
						>
							<div>
								<span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
									GitHub
								</span>
								<p className="text-foreground font-medium mt-1">@heyyczer</p>
							</div>
							<ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
						</a>

						<a
							href="https://linkedin.com/in/heyypereira/"
							target="_blank"
							rel="noopener noreferrer"
							className="group flex items-center justify-between p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300"
						>
							<div>
								<span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
									LinkedIn
								</span>
								<p className="text-foreground font-medium mt-1">Rafael Pereira</p>
							</div>
							<ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
						</a>

						<div className="p-6 rounded-2xl border border-border bg-card">
							<span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
								Localização
							</span>
							<p className="text-foreground font-medium mt-1">São José do Rio Preto - SP, Brasil</p>
							<p className="text-muted-foreground text-sm mt-1">
								Disponível para trabalho remoto
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
