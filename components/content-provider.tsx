import React from "react";

export default function ContentProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-0">{children}</div>
	);
}
