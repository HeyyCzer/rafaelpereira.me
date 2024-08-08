import { Hero } from "@/components/Hero";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { DateTime } from "luxon";
import { useMemo } from "react";

export default function Home() {
	const age = useMemo(() => (
		Math.floor(DateTime.now().diff(DateTime.fromFormat("2005-06-14", "yyyy-MM-dd")).as("years"))
	), []);
	return (
		<main className="h-screen">
			<Hero />

			<section id="#about-me" className="max-w-[1024px] mx-auto px-24 pb-12">
				<h1 className="text-3xl font-semibold text-center mb-8">Sobre mim</h1>
				<p className="text-neutral-200 tracking-wide font-light text-justify">
					Me chamo <span className="font-medium">Rafael Pereira</span>, sou desenvolvedor de software e completamente apaixonado por tecnologia.
					No momento, tenho <span className="font-medium">{age} anos</span> e estou cursando <span className="font-medium">Ciência da Computação</span>.
					Comecei a programar com meus 13 anos, mexendo com Minecraft. Desde então, venho me aprimorando cada vez mais. Atualmente, tenho conhecimento em diversas tecnologias, dentre elas: <span className="font-medium">React, Next.js, MySQL, MongoDB, Postgres, Docker e muitas outras.</span>
				</p>
				<p className="text-neutral-200 tracking-wide font-light text-justify mt-4">
					Quando não estou programando, gosto de jogar video games, assistir séries e filmes, ouvir música e outras coisas. Sou uma pessoa muito curiosa e sempre estou em busca de novos conhecimentos.
				</p>
				<p className="text-neutral-200 tracking-wide font-light text-justify mt-4">
					Se você quiser saber mais sobre mim ou conversar, fique à vontade para entrar em contato comigo.
				</p>
			</section>

			<section className="max-w-[1024px] mx-auto px-24 pb-12">
				<h1 className="text-center text-3xl font-semibold text-white">Projetos</h1>

				<ProjectsGrid />
			</section>
		</main>
	);
}
