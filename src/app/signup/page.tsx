"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log({ email, username, password, confirmPassword });

    if (password === confirmPassword) {
      // Redirige a la página home después de registrarse
      localStorage.setItem("user", JSON.stringify({ email, username, password }));
      localStorage.setItem("email", email);
      router.push("/");
    } else {
      localStorage.removeItem("user");
      alert("Las contraseñas no coinciden");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <form
        className="space-y-6 font-[sans-serif] text-[#333] max-w-md mx-auto"
        onSubmit={handleSubmit}
      >
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Nombre de Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="px-6 py-4 bg-[#f0f1f2] focus:bg-transparent w-full text-sm border outline-[#007bff] rounded transition-all"
          />
        </div>

        <div className="relative flex items-center">
          <input
            type="email"
            placeholder="Correo Electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-6 py-4 bg-[#f0f1f2] focus:bg-transparent w-full text-sm border outline-[#007bff] rounded transition-all"
          />
        </div>

        <div className="relative flex items-center">
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-6 py-4 bg-[#f0f1f2] focus:bg-transparent w-full text-sm border outline-[#007bff] rounded transition-all"
          />
        </div>

        <div className="relative flex items-center">
          <input
            type="password"
            placeholder="Verificar Contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="px-6 py-4 bg-[#f0f1f2] focus:bg-transparent w-full text-sm border outline-[#007bff] rounded transition-all"
          />
        </div>

        <button
          type="submit"
          className="bg-white border border-black py-3 px-6 cursor-pointer font-bold w-full"
        >
          Registrarse
        </button>

        <hr className="my-6" />
        <p className="text-center">
          <a href="/login" className="text-black hover:underline">
            Inicio de sesión
          </a>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
