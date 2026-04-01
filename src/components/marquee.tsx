interface MarqueeProps {
	text: string;
	className?: string;
}

export function Marquee({ text, className = "" }: MarqueeProps) {
	const repeatedText = Array(10).fill(text).join(" • ");

	return (
		<div className={`overflow-hidden py-4 border-y border-border ${className}`}>
			<div className="animate-marquee whitespace-nowrap flex">
				<span className="font-display text-4xl md:text-5xl font-extrabold text-foreground/10 uppercase tracking-wider">
					{repeatedText}
				</span>
				<span className="font-display text-4xl md:text-5xl font-extrabold text-foreground/10 uppercase tracking-wider ml-8">
					{repeatedText}
				</span>
			</div>
		</div>
	);
}
