"use client";

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Banner({
	bannerId,
	children,
	className
}: Readonly<{
	bannerId: string;
	children: React.ReactNode;
	className?: string;
}>) {
	const ref = useRef<HTMLDivElement>(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		if (window.localStorage.getItem(`banner_dismissed:${bannerId}`) !== "true") {
			setVisible(true);
		}
	}, [bannerId]);

	const dismiss = useCallback(() => {
		if (!ref.current) return;
		ref.current.classList.add("animate-slideOutUp");

		setTimeout(() => {
			setVisible(false);
			window.localStorage.setItem(`banner_dismissed:${bannerId}`, "true");
		}, 400);
	}, [ref, bannerId]);

	if (!visible) return null;
	return (
		<div ref={ref} className={twMerge("animate-slideInDown relative tracking-wide bg-blue-500 text-white text-center py-1", className)}>
			{children}

			<button
				className="absolute right-12"
				onClick={dismiss}
			>
				<FontAwesomeIcon icon={faXmark} />
			</button>
		</div>
	)
}
