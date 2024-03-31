import { useEffect } from "react";
import axios from "axios";

function useUserSong(token: string) {
  useEffect(() => {
    async function getUserSong(token: string) {
      try {
        const response = await axios.get(
          "https://api.spotify.com/v1/me/player/currently-playing",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        console.log(response);
      } catch (error) {
        console.error("Error fetching user song:", error);
      }
    }
    getUserSong(token);
  }, [token]);
}

export default useUserSong;
