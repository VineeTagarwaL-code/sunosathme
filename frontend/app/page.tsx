"use client"
import { useEffect, useState } from 'react'; // Add import for useState
import { signIn } from 'next-auth/react';
import UserInfo from '@/components/user-info';
import { ModeToggle } from '@/components/toggle';
import { Button } from '@/components/ui/button';
import { userInfo } from 'os';

export default function Home() {
  const { error, data, loading } = UserInfo();
  const [userData, setUserData] = useState<any>({}); // Add state to store user data


  useEffect(() => {
    setUserData(data);
  }, [data])
  // // Parse user data if available
  // useEffect(() => {
  //   console.log(data)
  // }, [data])
  return (
    <>{
      loading ? <div>Loading...</div> : (
        <>
          <ModeToggle />

          {
            userData && <div>{userData.name}</div>
          }
          <Button onClick={() => signIn('spotify')}>Login with Spotify</Button>
          <div>Page</div>

        </>
      )
    }
    </>
  );
}
