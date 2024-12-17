import UserProfile from "@/components/user-profile";
import Navbar from "../components/navbar";
import ContentProvider from "@/components/content-provider";
import Experience from "@/components/experience";

export default function Home() {
	return (
		<>
			<Navbar />
			<ContentProvider>
				<UserProfile />
				<Experience />
			</ContentProvider>
		</>
	);
}
