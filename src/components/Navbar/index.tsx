"use client";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import NavbarLink from "./NavbarLink";

export default function Navbar() {
	const [isScrolled, setScrolled] = useState<boolean>(false);
	const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

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
		<nav className="fixed z-50 w-full lg:px-6 lg:py-4">
			<div className={twMerge("grid grid-cols-2 px-6 py-6 lg:px-12 lg:py-3 items-center transition-all lg:rounded-xl", ((isScrolled || !isCollapsed) && "bg-neutral-800/40 backdrop-blur-sm"))}>
				{/* Left-side (Logo) */}
				<div className="text-base font-semibold tracking-widest order-1">
					rafael
					<span className="text-cyan-400">pereira</span>
					.me
				</div>

				{/* Right-side (Links) */}
				<div className={twMerge("lg:flex flex-col lg:flex-row gap-y-4 gap-x-12 justify-end order-3 lg:order-2 mt-4 lg:mt-0 text-center lg:text-left col-span-full lg:col-span-1", (isCollapsed ? "hidden" : "flex"))}>
					<NavbarLink href="/">Início</NavbarLink>
					<NavbarLink href="#about-me">Sobre</NavbarLink>
					<NavbarLink href="#projects">Projetos</NavbarLink>
					<NavbarLink href="#contact">Contato</NavbarLink>
					<NavbarLink isExternal href="https://github.com/HeyyCzer">
						<FontAwesomeIcon icon={faGithub} className="text-xl" />
					</NavbarLink>
				</div>

				<div className="flex justify-end lg:hidden order-2">
					<button className="w-8 h-8 rounded-lg" onClick={() => setIsCollapsed(!isCollapsed)}>
						<FontAwesomeIcon icon={faBars} className="text-2xl lg:hidden" />
					</button>
				</div>
			</div>
		</nav>
	)
}