import React from "react";
import UserEmail from "./ui/user-email";
import Breadcrumbs from "./ui/breadcrumbs";
import { userData } from "@/lib/data";

export default function Navbar() {
	return (
		<header className="bg-dark-accent sticky top-0 backdrop-filter backdrop-blur-lg bg-opacity-30 z-10 border-b border-neutral-800">
			<nav className="flex items-center max-w-6xl h-16 justify-between mx-auto px-5 md:px-8 lg:px-0">
				<UserEmail mail={userData.email} name={userData.name} />
				<Breadcrumbs />
			</nav>
		</header>
	);
}
