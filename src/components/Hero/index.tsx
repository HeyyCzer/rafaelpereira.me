"use client";

import { faArrowRight, faCode } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { BackgroundBeams } from "../ui/background-beams";
import { TypewriterEffect } from "../ui/typewriter-effect";

export function Hero() {
	const words = [
		{
			text: "Rafael",
			className: "bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-400 text-center font-sans font-bold"
		},
		{
			text: "Pereira",
			className: "bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-400 text-center font-sans font-bold"
		},
	];

	return (
		<div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
			<div className="z-10 max-w-2xl mx-auto p-4">
				<p className="text-neutral-400 max-w-lg mx-auto text-lg text-center relative z-10">
					Olá, meu nome é
				</p>
				<h1 className="relative z-10 text-lg md:text-7xl">
					<TypewriterEffect words={words} />
				</h1>
				<p className="text-neutral-400 max-w-lg mx-auto my-2 text-base text-center relative z-10 tracking-wide">
					Sou <span className="text-white">desenvolvedor de software</span> e completamente
					apaixonado por tecnologia. Tenho experiência com desenvolvimento fullstack.
				</p>

				<div className="flex justify-center gap-x-4 mt-4 z-10">
					<Link
						href="#projects"
						className="flex items-center bg-transparent border border-white text-white rounded-lg px-4 py-2 font-medium text-sm hover:bg-white hover:text-black transition-colors"
					>
						Meus projetos
						<FontAwesomeIcon icon={faCode} className="ml-2" />
					</Link>
					<Link
						href="#about-me"
						className="flex items-center bg-white rounded-lg px-4 py-2 text-black font-medium text-sm hover:bg-neutral-500 hover:text-white transition-colors"
					>
						Sobre mim
						<FontAwesomeIcon icon={faArrowRight} className="ml-2" />
					</Link>
				</div>
			</div>
			<BackgroundBeams />
		</div>
	);
}
