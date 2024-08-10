import { type ReactNode } from "react";

export default function Title({ children }: { children: ReactNode }) {
	return (
		<h1 className="text-center text-3xl font-semibold text-white">
			{children}
			<span className="font-extrabold ml-1 text-cyan-400">.</span>
		</h1>
	)
}