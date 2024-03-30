"use client"

import React, { useState, useEffect } from 'react';

import { useSession } from "next-auth/react";
import { error } from 'console';


export default function UserInfo() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>();
  const [error, setError] = useState(true);
  const { data: session, status } = useSession();


  useEffect(() => {
    if (status == 'loading') {
      setLoading(true)
    } else if (status == 'unauthenticated') {
      setLoading(false)
      setError(true)
    }
    else if (status == "authenticated" && session.user) {
      setData(session.user)
      setError(false)
      setLoading(false)
    }
  }, [status, session])


  return { error, loading, data }

} 
