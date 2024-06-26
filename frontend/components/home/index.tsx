"use client";

import { useUser } from "@/lib/providers/UserContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Home = ({ children }: { children: React.ReactNode }) => {
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user?.user?.isLoggedIn) {
      router.push("/signin");
    }
  }, []);

  useEffect(() => {
    const timerId = setTimeout(() => {
  
      localStorage.removeItem("isLoggedIn");

     
      router.push("/signin");
    }, 10000);

    return () => clearTimeout(timerId);
  }, [router]);

  return <>{user?.user?.isLoggedIn && children}</>;
};

export default Home;
