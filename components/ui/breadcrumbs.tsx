import { userData } from "@/lib/data";
import React from "react";
import {
	Breadcrumb,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbSeparator,
} from "./breadcrumb";
import { Slash } from "lucide-react";

export default function Breadcrumbs() {
	return (
		<Breadcrumb>
			<Breadcrumb>
				<BreadcrumbList>
					{userData.socials.map((social, index) => (
						<div className="flex items-center" key={index}>
							<BreadcrumbLink
								href={social.url}
								target="_blank"
								className="mr-2 hover:text-white text-neutral-300"
							>
								{social.name}
							</BreadcrumbLink>
							{index < userData.socials.length - 1 && (
								<BreadcrumbSeparator>
									<Slash className="-rotate-12" />
								</BreadcrumbSeparator>
							)}
						</div>
					))}
				</BreadcrumbList>
			</Breadcrumb>
		</Breadcrumb>
	);
}
