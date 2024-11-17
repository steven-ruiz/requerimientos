'use client'
import { useState, useEffect, createContext, useCallback } from "react";
import { useRouter } from "next/navigation";
import ServicesSection from "./components/ServicesSection";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const email = localStorage.getItem("email");

  useEffect(() => {
    if (email) {
      if (!isLoggedIn) {
        setIsLoggedIn(true);
      }
      router.push("/");
    } else {
      router.push("/login");
    }
  }, [isLoggedIn, email]);
  

  return (
      <ServicesSection />
  );
}
