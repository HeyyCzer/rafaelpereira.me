import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
	return (
		<footer className="border-t border-border py-12 px-6 md:px-12 lg:px-20">
			<div className="max-w-6xl mx-auto">
				<div className="flex flex-col md:flex-row items-center justify-between gap-8">
					<div className="flex flex-col items-center md:items-start gap-2">
						<a
							href="/"
							className="font-display text-2xl font-extrabold text-foreground"
						>
							RP<span className="text-primary">.</span>
						</a>
						<p className="text-sm text-muted-foreground font-mono">
							Back-end Developer
						</p>
					</div>

					<div className="flex items-center gap-3">
						<a
							href="https://github.com"
							target="_blank"
							className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
							aria-label="GitHub"
							rel="noopener"
						>
							<Github className="w-5 h-5" />
						</a>
						<a
							href="https://linkedin.com"
							target="_blank"
							className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
							aria-label="LinkedIn"
							rel="noopener"
						>
							<Linkedin className="w-5 h-5" />
						</a>
						<a
							href="mailto:seuemail@email.com"
							className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
							aria-label="Email"
						>
							<Mail className="w-5 h-5" />
						</a>
					</div>
				</div>

				<div className="mt-10 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
					<p className="text-sm text-muted-foreground font-mono">
						&copy; {new Date().getFullYear()} Rafael Pereira. Todos os direitos
						reservados.
					</p>
					<p className="text-sm text-muted-foreground font-mono">
						Feito com (muito){" "}
						<span className="not-sr-only">☕</span>
						<span className="sr-only">café</span>
					</p>
				</div>
			</div>
		</footer>
	);
}
