"use client";

import React from "react";
import { Button } from "./ui/button";
import { GitBranch } from "lucide-react";
import { userData } from "@/lib/data";

export default function GitHubRedirect() {
	return (
		<Button
			onClick={() =>
				window.open(userData.githubUrl, "_blank", "noopener,noreferrer")
			}
			className={"mt-8 hover:bg-white hover:text-black text-neutral-200"}
		>
			<span>View More</span>
			<GitBranch className="w-6 h-6 ml-2" />
		</Button>
	);
}
