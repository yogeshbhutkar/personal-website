import { userData } from "@/lib/data";
import React from "react";
import { OGPreview } from "./og-preview";

export default function LatestBlogs() {
	return (
		<section className="mt-10 mb-20 mx-4 md:mx-0">
			<h2 className="text-4xl md:text-5xl font-[family-name:var(--font-otterco-display)]">
				Latest Blogs
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6 mt-7">
				{userData.latestBlogs.map((blog, index) => (
					<OGPreview key={index} url={blog} />
				))}
			</div>
		</section>
	);
}
