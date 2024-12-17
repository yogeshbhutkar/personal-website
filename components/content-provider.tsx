import React from "react";

export default function ContentProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	return <div className="mx-48">{children}</div>;
}
