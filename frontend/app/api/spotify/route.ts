import { NextResponse } from "next/server";
const NOW_PLAYING_ENDPOINT =
  "https://api.spotify.com/v1/me/player/currently-playing";
export const nowPlaying = async (token: string) => {
  const res = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const response = await res.json();
  return response;
};

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { accessToken } = data;
    const response = await nowPlaying(accessToken);
    return NextResponse.json({ data: response }, { status: 200 });
  } catch (error) {
    console.error("Error fetching data from Spotify API:", error);
    return NextResponse.json({ error: "Internal error" }, { status: 400 });
  }
}
