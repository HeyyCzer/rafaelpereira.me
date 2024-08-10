import Link from "next/link";

export default function NavbarLink({
	children,
	href,
	isExternal
}: Readonly<{
	children: React.ReactNode;
	href: string;
	isExternal?: boolean;
}>) {
	return (
		<Link
			href={href}
			passHref
			{...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
			className="uppercase text-sm text-white hover:text-gray-500 transition-colors font-medium"
		>
			{children}
		</Link>
	);
};