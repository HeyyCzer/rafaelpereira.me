import type { Metadata } from "next";
import "./globals.css";

// Fix FontAwesome Icons showing up as giant icons
import Navbar from "@/components/Navbar";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
//

export const metadata: Metadata = {
	title: "Rafael Pereira | Software Developer",
	description: "Sou Rafael, um desenvolvedor de software e este é o meu site pessoal. Aqui você pode encontrar informações sobre mim, meus projetos e como entrar em contato comigo.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt">
			<body className="dark">
				<Navbar />
				{children}
			</body>
		</html>
	);
}
