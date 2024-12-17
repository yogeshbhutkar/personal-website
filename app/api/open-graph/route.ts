import { NextResponse } from "next/server";
import ogs from "open-graph-scraper";

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const url = searchParams.get("url");

	if (!url) {
		return NextResponse.json({ error: "URL is required" }, { status: 400 });
	}

	try {
		const { result } = await ogs({ url });
		return NextResponse.json(result);
	} catch (error) {
		return NextResponse.json(
			{
				error: "An error occurred while fetching the Open Graph data",
				message: error ?? "Unknown error",
			},
			{ status: 500 }
		);
	}
}
