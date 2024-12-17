import UserProfile from "@/components/user-profile";
import Navbar from "../components/navbar";
import ContentProvider from "@/components/content-provider";

export default function Home() {
	return (
		<>
			<Navbar />
			<ContentProvider>
				<UserProfile />
			</ContentProvider>
		</>
	);
}
