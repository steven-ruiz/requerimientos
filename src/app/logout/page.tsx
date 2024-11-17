'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Logout() {
    const router = useRouter();
    useEffect(() => {
        localStorage.removeItem("user");
        localStorage.removeItem("email");
        router.push("/");
    }, []);
}