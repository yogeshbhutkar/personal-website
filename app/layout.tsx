import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import AnimatedCursor from "@/components/ui/animated-cursor";

const ottercoDisplay = localFont({
	src: [
		{
			path: "../public/fonts/Otterco-Display-Regular.woff2",
			weight: "400",
		},
		{
			path: "../public/fonts/Otterco-Display-Medium.woff2",
			weight: "500",
		},
		{
			path: "../public/fonts/Otterco-Display-SemiBold.woff2",
			weight: "600",
		},
	],
	variable: "--font-otterco-display",
});

const otterco = localFont({
	src: [
		{
			path: "../public/fonts/Otterco-Medium.woff2",
			weight: "500",
		},
	],
	variable: "--font-otterco",
});

export const metadata: Metadata = {
	title: "Yogesh Bhutkar",
	description: "Yogesh Bhutkar's personal website",
	icons: {
		icon: [
			{ url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
			{ url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
		],
		apple: [
			{
				url: "/apple-touch-icon.png",
				sizes: "180x180",
				type: "image/png",
			},
		],
		shortcut: ["/favicon.ico"],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${otterco.variable} ${ottercoDisplay.variable} antialiased`}
			>
				{children}
				<AnimatedCursor />
			</body>
		</html>
	);
}
