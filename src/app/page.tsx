import ContactForm from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import Title from "@/components/Title";
import { faDiscord, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faExternalLink } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateTime } from "luxon";
import Link from "next/link";
import { useMemo } from "react";

export default function Home() {
	const age = useMemo(() => (
		Math.floor(DateTime.now().diff(DateTime.fromFormat("2005-06-14", "yyyy-MM-dd")).as("years"))
	), []);
	return (
		<main className="min-h-screen">
			<Hero />

			<section className="relative scroll-m-24 max-w-[1024px] mx-auto px-8 lg:px-24 pb-12">
				{/* Anchor */}
				<a id="about-me" className="absolute -top-24" />

				{/* Content */}
				<Title>Sobre mim</Title>

				<div className="mt-8">
					<p className="text-neutral-200 tracking-wide font-light text-center lg:text-justify">
						Me chamo <span className="font-medium">Rafael Pereira</span>, sou desenvolvedor de software e completamente apaixonado por tecnologia.
						No momento, tenho <span className="font-medium">{age} anos</span> e estou cursando <span className="font-medium">Ciência da Computação</span>.
						Comecei a programar com meus 13 anos, mexendo com Minecraft. Desde então, venho me aprimorando cada vez mais. Atualmente, tenho conhecimento em diversas tecnologias, dentre elas: <span className="font-medium">React, Next.js, MySQL, MongoDB, Postgres, Docker e muitas outras.</span>
					</p>
					<p className="text-neutral-200 tracking-wide font-light text-center lg:text-justify mt-4">
						Quando não estou programando, gosto de jogar video games, assistir séries e filmes, ouvir música e outras coisas. Sou uma pessoa muito curiosa e sempre estou em busca de novos conhecimentos.
					</p>
					<p className="text-neutral-200 tracking-wide font-light text-center lg:text-justify mt-4">
						Se você quiser saber mais sobre mim ou conversar, fique à vontade para entrar em contato comigo.
					</p>
				</div>
			</section>

			<section className="relative max-w-screen-xl mx-auto px-8 lg:px-24 pb-12">
				{/* Anchor */}
				<a id="projects" className="absolute -top-24" />

				{/* Content */}
				<Title>Projetos</Title>

				<ProjectsGrid />
			</section>

			<section className="relative max-w-[1024px] mx-auto px-8 lg:px-24 pb-12">
				{/* Anchor */}
				<a id="contact" className="absolute -top-24" />

				{/* Content */}
				<Title>Contato</Title>

				<p className="text-neutral-200 tracking-wide font-light text-center lg:text-justify mt-4">
					Se você gostou do meu trabalho e quer me contratar para desenvolver um projeto, ou simplesmente quer conversar, entre em contato comigo através do formulário abaixo.
				</p>

				<div className="flex flex-col gap-y-2 mx-auto max-w-xl my-8">
					<ContactForm />
					
					<div className="w-full grid grid-cols-1 lg:grid-cols-3 lg:gap-x-2 lg:gap-y-0 gap-y-2">
						<Link className="w-full flex items-center justify-between gap-x-2 py-1.5 px-2 rounded-lg bg-neutral-800" href={"https://github.com/heyy.pereira"} target="_blank">
							<div className="flex items-center gap-x-2">
								<FontAwesomeIcon icon={faGithub} className="text-xl text-cyan-400" />
								@heyyczer
							</div>

							<FontAwesomeIcon icon={faExternalLink} className="text-xs text-neutral-500" />
						</Link>
						<Link className="w-full flex items-center justify-between gap-x-2 py-1.5 px-2 rounded-lg bg-neutral-800" href={"https://instagram.com/heyy.pereira"} target="_blank">
							<div className="flex items-center gap-x-2">
								<FontAwesomeIcon icon={faInstagram} className="text-xl text-cyan-400" />
								@heyy.pereira
							</div>

							<FontAwesomeIcon icon={faExternalLink} className="text-xs text-neutral-500" />
						</Link>
						<div className="w-full flex items-center justify-between gap-x-2 py-1.5 px-2 rounded-lg bg-neutral-800">
							<div className="flex items-center gap-x-2">
								<FontAwesomeIcon icon={faDiscord} className="text-xl text-cyan-400" />
								@heyyczer
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
