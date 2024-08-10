"use client";

import { cn } from "@/lib/utils";
import { faCode, faExternalLink } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
	items,
	className,
}: {
	items: {
		title: string;
		description: string;
		link: string;
		preview: string;
	}[];
	className?: string;
}) => {
	let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	return (
		<div
			className={cn(
				"grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
				className
			)}
		>
			{items.map((item, idx) => (
				<Link
					href={item?.link}
					key={item?.link}
					className="relative group  block p-2 h-full w-full"
					onMouseEnter={() => setHoveredIndex(idx)}
					onMouseLeave={() => setHoveredIndex(null)}
				>
					<AnimatePresence>
						{hoveredIndex === idx && (
							<motion.span
								className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-neutral-800/[0.8] block  rounded-3xl"
								layoutId="hoverBackground"
								initial={{ opacity: 0 }}
								animate={{
									opacity: 1,
									transition: { duration: 0.15 },
								}}
								exit={{
									opacity: 0,
									transition: { duration: 0.15, delay: 0.2 },
								}}
							/>
						)}
					</AnimatePresence>
					<Card>
						<div>
							{
								item.preview ? (
									<div className="rounded-lg w-full mt-2 overflow-hidden">
										<Image
											src={`https://cms.heyyczer.com/assets/${item.preview}`}
											alt="Project preview"
											className="w-full aspect-video"
											width={1920}
											height={1080}
										/>
									</div>
								) : (
									<div className="rounded-lg w-full aspect-video flex items-center justify-center bg-gradient-to-tr from-neutral-800 to-neutral-700">
										<FontAwesomeIcon icon={faCode} className="text-2xl" />
									</div>
								)
							}
							<CardTitle>{item.title}</CardTitle>
							<CardDescription>{item.description}</CardDescription>
						</div>

						<div className="mt-4">
							<FontAwesomeIcon icon={faExternalLink} className="text-zinc-100" />
						</div>
					</Card>
				</Link>
			))}
		</div>
	);
};

export const Card = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				"rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-white/40 relative z-20",
				className
			)}
		>
			<div className="relative z-50 h-full">
				<div className="p-4 flex flex-col justify-between h-full">{children}</div>
			</div>
		</div>
	);
};
export const CardTitle = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	return (
		<h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
			{children}
		</h4>
	);
};
export const CardDescription = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	return (
		<p
			className={cn(
				"mt-4 text-zinc-400 tracking-wide leading-relaxed text-sm",
				className
			)}
		>
			{children}
		</p>
	);
};
