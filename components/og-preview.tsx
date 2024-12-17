"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface OGData {
	ogTitle?: string;
	ogDescription?: string;
	ogImage?: { url: string }[];
	ogUrl?: string;
}

export function OGPreview({ url }: { url: string }) {
	const [ogData, setOgData] = useState<OGData | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(`/api/open-graph?url=${encodeURIComponent(url)}`)
			.then((res) => res.json())
			.then((data) => {
				setOgData(data);
				setLoading(false);
			})
			.catch(() => setLoading(false));
	}, [url]);

	if (loading) return <div className="h-80 w-72">Loading...</div>;
	if (!ogData) return null;

	return (
		<a href={url} target="_blank" rel="noopener noreferrer">
			<div className="rounded-lg overflow-hidden border border-neutral-700 lg:border-neutral-800 dark:border-neutral-800 hover:shadow-lg transition-shadow">
				{ogData.ogImage?.[0]?.url && (
					<div className="relative h-48 overflow-hidden">
						<Image
							src={ogData.ogImage[0].url}
							alt={ogData.ogTitle || ""}
							fill
							className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-110"
						/>
					</div>
				)}
				<div className="p-4">
					<h3 className="font-medium text-lg text-neutral-300">
						{ogData?.ogTitle?.length && ogData?.ogTitle?.length > 75
							? ogData?.ogTitle?.slice(0, 75) + "..."
							: ogData?.ogTitle}
					</h3>
					<p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2">
						{ogData?.ogDescription?.length &&
						ogData?.ogDescription?.length > 100
							? ogData?.ogDescription?.slice(0, 100) + "..."
							: ogData?.ogDescription}
					</p>
				</div>
			</div>
		</a>
	);
}
