"use client";
import { useEffect, useState } from "react"; // Add import for useState
import { signIn, signOut } from "next-auth/react";
import UserInfo from "@/components/user-info";
import { ModeToggle } from "@/components/toggle";
import { Button } from "@/components/ui/button";
import Loader from "@/components/loader";

export default function Home() {
  const { error, data, loading, isAuthenticated } = UserInfo();
  const [userData, setUserData] = useState<any>({}); // Add state to store user data
  async function getPlaying(token: string) {
    const response = await fetch("/api/spotify", {
      method: "POST",
      body: JSON.stringify({ accessToken: token }),
    });
    console.log(response);
  }
  useEffect(() => {
    setUserData(data);
    if (data) {
      setUserData(data);
      if (data.accessToken) {
        getPlaying(data.accessToken);
      }
    }
  }, [data]);

  return (
    <div className="h-screen w-screen border-red ">
      {loading ? (
        <Loader />
      ) : (
        <div className="flex justify-center item-center py-22">
          <ModeToggle />

          {isAuthenticated ? (
            <Button onClick={() => signOut()} className="fixed ">
              Logout
            </Button>
          ) : (
            <Button onClick={() => signIn("spotify")}>
              Login with Spotify
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
