"use client"

import React from "react";
import Image from "next/image";
import HeaderSecondary from "./headerSecondary";
export default function Header() {
  return (
    <section className=" flex items-center w-full py-2 justify-center top-0 h-[6rem] bg-orange-400">
      <h1 className="font-bold text-3xl px-4">🏝️ My Travel List 🏝️</h1>
    </section>
  );
}
