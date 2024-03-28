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
			className="text-white font-medium font-code"
		>
			{children}
		</Link>
	);
};