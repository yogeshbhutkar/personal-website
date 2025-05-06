"use client";

import UserProfile from "@/components/user-profile";
import Navbar from "../components/navbar";
import ContentProvider from "@/components/content-provider";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import LatestBlogs from "@/components/latest-blogs";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
}

export default function Home() {

	useGSAP(
		() => {
		  ScrollSmoother.create({
			smooth: 1,
			effects: true,
			content: '.animate-smooth',
			normalizeScroll: true,
		  });
		},
	  );

	return (
		<main className="animate-smooth">
			<Navbar />
			<ContentProvider>
				<UserProfile />
				<Experience />
				<LatestBlogs />
			</ContentProvider>
			<Footer />
		</main>
	);
}
