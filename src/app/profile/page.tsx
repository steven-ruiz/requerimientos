'use client'

import { useState, useEffect } from "react";


export default function Profile() {
    const [user, setUser] = useState<{ email: string, username: string }>({ email: "", username: "" });
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user") || "{}");
        setUser(user);
    }, []);
    return(
        <div className="max-w-2xl mx-auto p-8">
            <div className="flex items-center gap-8">
                <div className="w-32 h-32 rounded-full bg-gray-200 overflow-hidden">
                    <img 
                        src="/avatar.jpg" 
                        alt="Profile avatar"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="text-3xl font-bold">Perfil</h1>
                    <div className="space-y-2">
                        <p className="text-lg">
                            <span className="font-semibold">Nombre: </span>
                            <span>{user.username}</span>
                        </p>
                        <p className="text-lg">
                            <span className="font-semibold">Correo: </span>
                            <span>{user.email}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}