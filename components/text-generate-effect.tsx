import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

export const TextGenerateEffect = ({
	words,
	className,
}: {
	words: string;
	className?: string;
}) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const renderWords = () => {
		const wordsArray = words.split(" ");
		return (
			<motion.div
				ref={ref}
				initial={{ opacity: 0 }}
				animate={{ opacity: isInView ? 1 : 0 }}
			>
				{wordsArray.map((word, idx) => {
					return (
						<motion.span
							key={word + idx}
							className="opacity-0"
							initial={{ opacity: 0, filter: "blur(10px)" }}
							animate={
								isInView
									? { opacity: 1, filter: "blur(0px)" }
									: { opacity: 0, filter: "blur(10px)" }
							}
							transition={{
								duration: 1,
								delay: idx * 0.1,
							}}
						>
							{word}{" "}
						</motion.span>
					);
				})}
			</motion.div>
		);
	};

	return (
		<div className={cn("font-bold", className)}>
			<div className="mt-4">
				<div className="text-2xl leading-snug tracking-wide">
					{renderWords()}
				</div>
			</div>
		</div>
	);
};
