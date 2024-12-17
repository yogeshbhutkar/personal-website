import { userData } from "@/lib/data";
import Image from "next/image";
import React from "react";
import GitHubRedirect from "./github-redirect";

export default function UserProfile() {
	return (
		<main className="flex flex-col items-center justify-center py-[10vh] text-center">
			<div className="rounded-full overflow-hidden w-44 h-44">
				<Image
					src={"/images/user-profile.jpg"}
					alt="User profile"
					width={200}
					height={200}
					className="object-cover w-full h-full transition-transform duration-300 ease-in-out scale-110 hover:scale-125"
				/>
			</div>
			<p className="mt-3 text-neutral-500 text-lg font-light">
				{userData.introLine}
			</p>
			<h1 className="font-[family-name:var(--font-otterco-display)] font-normal text-7xl max-w-2xl mt-6 bg-gradient-to-r from-neutral-300 via-neutral-500 to-neutral-800 text-transparent bg-clip-text">
				{userData.about}
			</h1>
			<GitHubRedirect />
		</main>
	);
}
