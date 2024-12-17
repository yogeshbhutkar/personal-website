"use client";

import React from "react";
import { BorderAnimatedButton } from "./border-animated-button";
import { Mail } from "lucide-react";

export default function UserEmail({
	mail,
	name,
}: {
	mail: string;
	name: string;
}) {
	return (
		<div className="flex items-center gap-x-2">
			<BorderAnimatedButton
				containerClassName="rounded-full w-10 h-10"
				as="button"
				onClick={() => {
					window.location.href = `mailto:${mail}`;
				}}
				className="flex items-center justify-center outline-none border-none bg-black"
			>
				<Mail className="h-4 w-4 text-neutral-300" />
			</BorderAnimatedButton>
			<p className="text-xs text-neutral-300">{name}</p>
		</div>
	);
}
