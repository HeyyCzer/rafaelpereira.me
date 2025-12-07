"use client";

import profileImage from "@/assets/profile.jpeg";
import { Button } from "@/components/ui/button";
import { faArrowRight, faCode } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { TypewriterEffect } from "../ui/typewriter-effect";

export function Hero() {
	const words = [
		{
			text: "Olá,",
			className: "bg-clip-text text-transparent bg-linear-to-b from-neutral-200 to-neutral-400 text-center font-sans font-bold"
		},
		{
			text: "sou",
			className: "bg-clip-text text-transparent bg-linear-to-b from-neutral-200 to-neutral-400 text-center font-sans font-bold"
		},
		{
			text: "Rafael",
			className: "bg-clip-text text-transparent bg-linear-to-b from-neutral-200 to-neutral-400 text-center font-sans font-bold"
		}
	];

	return (
		<div className="h-160 w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
			<div className="z-10 max-w-2xl mx-auto py-4 px-8">
				<div className="min-w-fit mb-4">
					<Image src={profileImage} alt="Rafael Pereira" className="rounded-full aspect-square h-24 w-auto mx-auto outline-dashed outline-2 outline-offset-2 outline-white/40" />
				</div>
				<h1 className="relative z-10">
					<TypewriterEffect words={words} />
				</h1>
				<p className="text-neutral-400 max-w-lg mx-auto my-2 text-base text-center relative z-10 tracking-wide">
					Sou <span className="text-white font-semibold">desenvolvedor de software</span> e completamente
					apaixonado por tecnologia. Tenho experiência com <span className="text-white font-semibold">desenvolvimento fullstack</span>.
				</p>

				<div className="flex justify-center gap-x-4 mt-4 z-10">
					<Button variant="outline" asChild className="border-white text-white hover:bg-white hover:text-black">
						<Link href="#projects">
							Meus projetos
							<FontAwesomeIcon icon={faCode} className="ml-2" />
						</Link>
					</Button>
					<Button asChild className="bg-white text-black hover:bg-cyan-500 hover:text-white">
						<Link href="#about-me">
							Sobre mim
							<FontAwesomeIcon icon={faArrowRight} className="ml-2" />
						</Link>
					</Button>
				</div>
			</div>
		</div>
	);
}
