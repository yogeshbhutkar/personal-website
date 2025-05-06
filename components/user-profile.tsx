import { userData } from "@/lib/data";
import Image from "next/image";
import React, { useRef } from "react";
import GitHubRedirect from "./github-redirect";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function UserProfile() {
	const profileSection = useRef<HTMLDivElement>(null);

	useGSAP( () => {
		gsap.to(".hero-asset-animate", {
			y: 50,
			duration: 5,
			repeat: -1,
			yoyo: true,
			ease: "sine.inOut",
		});
	}, { scope: profileSection } )

	return (
		<section
			className="relative flex flex-col items-center justify-center text-center h-[90vh]"
			ref={profileSection}
		>
			<div className="absolute right-0 top-0 h-full hidden md:flex flex-col items-center justify-center space-y-32">
				<Image
					src={"/icons/rocket.svg"}
					className="hero-asset-animate"
					alt="data-icon"
					height={250}
					width={250}
					draggable={false}
				/>
				<Image 
					src={"/icons/diamond.svg"}
					className="hero-asset-animate"
					alt="data-icon"
					height={300}
					width={300}
					draggable={false}
				/>
			</div>
			<div data-speed="clamp(1.25)" className="flex flex-col items-center justify-center md:mt-32">
				<div className="rounded-full overflow-hidden w-44 h-44">
					<Image
						src={"/images/user-profile.jpg"}
						alt="User profile"
						width={200}
						height={200}
						className="object-cover w-full h-full transition-transform duration-300 ease-in-out scale-110 hover:scale-125 select-none"
						draggable={false}
					/>
				</div>
				<p className="mt-3 text-neutral-400 text-lg">
					{userData.introLine}
				</p>
				<h1 className="font-[family-name:var(--font-otterco-display)] font-normal text-5xl md:text-7xl max-w-2xl mt-6 bg-gradient-to-r from-neutral-400 via-neutral-500 to-neutral-800 text-transparent bg-clip-text bg-300% animate-gradient">
					{userData.about}
				</h1>
				<GitHubRedirect />
			</div>
			<div className="absolute left-0 top-0 h-full hidden md:flex flex-col items-center justify-center space-y-8">
				<Image
					className="hero-asset-animate"
					src={"/icons/ufo.svg"}
					alt="data-icon"
					height={250}
					width={250}
					draggable={false}
				/>
				<Image
					src={"/icons/text.svg"}
					className="hero-asset-animate"
					alt="data-icon"
					height={250}
					width={250}
					draggable={false}
				/>
			</div>
		</section>
	);
}
