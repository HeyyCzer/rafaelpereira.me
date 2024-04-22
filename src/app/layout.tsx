import type { Metadata } from "next";
import "./globals.css";

// Fix FontAwesome Icons showing up as giant icons
import Navbar from "@/components/Navbar";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Link from "next/link";
config.autoAddCss = false;
//

export const metadata: Metadata = {
	title: "Rafael Pereira - Desenvolvedor",
	description: "Meu nome é Rafael, sou desenvolvedor full-stack. Tenho experiência com React, Node.js, Java e mais.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt">
			<body>
				<Navbar />

				{children}
			</body>
		</html>
	);
}
