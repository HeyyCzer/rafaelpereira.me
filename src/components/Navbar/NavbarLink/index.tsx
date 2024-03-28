import Link from "next/link";

export default function NavbarLink({
	children,
	href,
}: Readonly<{
	children: React.ReactNode;
	href: string;
}>) {
	return (
		<Link
			href={href}
			className="uppercase text-sm text-white hover:text-cyan-500 transition-colors font-medium"
		>
			{children}
		</Link>
	);
};