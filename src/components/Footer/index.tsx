import { faCoffee } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="tracking-wide w-full border-t border-white/10 bg-neutral-900 py-8 px-12 text-center">
			Feito com{" "}
			<FontAwesomeIcon icon={faCoffee} className="mx-1 text-cyan-400" />{" "}
			por{" "}
			<Link
				href="https://github.com/heyyczer"
				target="_blank" rel="noopener noreferrer"
				className="text-cyan-500 font-semibold"
			>
				Rafael
			</Link>.
		</footer>
	)
}