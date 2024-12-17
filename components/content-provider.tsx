import React from "react";

export default function ContentProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	return <div className="max-w-6xl mx-auto">{children}</div>;
}
