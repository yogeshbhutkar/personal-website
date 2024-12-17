import React from "react";
import { Timeline } from "./timeline";
import { OGPreview } from "./og-preview";

const data = [
	{
		title: "Software Engineer Trainee @rtCamp",
		content: (
			<div>
				<p className="text-neutral-400 dark:text-neutral-200 text-lg font-normal mb-8">
					Currently contributing to open source projects like
					WordPress and Gutenberg to make 43% of the web better.
				</p>
				<div className="grid grid-cols-2 gap-4">
					<OGPreview url="https://rtcamp.com" />
					<OGPreview url="https://github.com/WordPress/wordpress-develop" />
					<OGPreview url="https://github.com/WordPress/gutenberg" />
					<OGPreview url="https://profiles.wordpress.org/yogeshbhutkar/" />
				</div>
			</div>
		),
	},
	{
		title: "Full Stack Developer @eGov Foundation",
		content: (
			<div>
				<p className="text-neutral-400 dark:text-neutral-200 text-lg font-normal mb-8">
					Contributed to CARE, a Digital Public Good enabling TeleICU
					and decentralized healthcare administration across states.
				</p>
				<div className="grid grid-cols-2 gap-4">
					<OGPreview url="https://ohc.network/" />
					<OGPreview url="https://github.com/ohcnetwork/care_fe" />
				</div>
			</div>
		),
	},
	{
		title: "Full Stack Intern @M0 Ventures",
		content: (
			<div>
				<p className="text-neutral-400 dark:text-neutral-200 text-lg font-normal mb-8">
					Created scalable web applications using React, Next.js,
					Nest.js, MongoDB, PostgreSQL, Apache Kafka, Redis and AWS
					which schedules cron jobs, sends emails, and processes data
					in real-time using Trigger Dev.
				</p>
				<div className="grid grid-cols-2 gap-4">
					<OGPreview url="https://nestjs.com/" />
					<OGPreview url="https://redis.io/" />
					<OGPreview url="https://trigger.dev/" />
					<OGPreview url="https://www.m0.ventures/" />
				</div>
			</div>
		),
	},
];

export default function Experience() {
	return (
		<section>
			<Timeline data={data} />
		</section>
	);
}
