import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavbarLink from "./NavbarLink";

export default function Navbar() {
	return (
		<nav className="grid grid-cols-3 px-8 py-4 items-center">
			{/* Left-side (Logo) */}
			<div className="text-lg font-code font-semibold tracking-widest">
				{"<"}Rafa.
				<span className="text-cyan-500">
					Pereira
				</span>
				{"/>"}
			</div>

			{/* Right-side (Links) */}
			<div className="flex gap-x-12 justify-center">
				<NavbarLink href="/">Início</NavbarLink>
				<NavbarLink href="#about-me">Sobre</NavbarLink>
				<NavbarLink href="#projects">Projetos</NavbarLink>
				<NavbarLink href="https://heyyshop.com.br">Loja</NavbarLink>
				<NavbarLink href="https://github.com/HeyyCzer">Github</NavbarLink>
			</div>

			<div className="flex justify-end">
				<a
					href="mailto:contato@heyyczer.com"
					className="bg-cyan-500 text-white font-code font-semibold px-4 py-2 rounded-lg"
				>
					<FontAwesomeIcon icon={faEnvelope} className="mr-2" />
					Contato
				</a>
			</div>
		</nav>
	)
}