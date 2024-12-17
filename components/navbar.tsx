import React from "react";
import UserEmail from "./ui/user-email";
import Breadcrumbs from "./ui/breadcrumbs";
import { userData } from "@/lib/data";

export default function Navbar() {
	return (
		<header>
			<nav className="flex items-center h-16 justify-between bg-dark-accent px-48">
				<UserEmail mail={userData.email} name={userData.name} />
				<Breadcrumbs />
			</nav>
		</header>
	);
}
