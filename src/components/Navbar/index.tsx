"use client";

import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import NavbarLink from "./NavbarLink";

export default function Navbar() {
	const [scrolled, setScrolled] = useState<boolean>(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 100) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		}

		handleScroll();

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);	

	return (
		<nav className={twMerge("fixed z-50 grid grid-cols-2 w-full px-16 py-6 items-center", (scrolled && "bg-black/5 backdrop-blur-lg"))}>
			{/* Left-side (Logo) */}
			<div className="text-lg font-code font-semibold tracking-widest">
				{"<"}Rafa.
				<span className="text-cyan-500">
					Pereira
				</span>
				{"/>"}
			</div>

			{/* Right-side (Links) */}
			<div className="flex gap-x-12 justify-end">
				<NavbarLink href="/">Início</NavbarLink>
				<NavbarLink href="#about-me">Sobre</NavbarLink>
				<NavbarLink href="#projects">Projetos</NavbarLink>
				<NavbarLink href="https://heyyshop.com.br">Loja</NavbarLink>
				<NavbarLink href="https://github.com/HeyyCzer">Github</NavbarLink>
			</div>
		</nav>
	)
}