"use client"

import Header from "@/components/Header";
import HeaderSecondary from "@/components/headerSecondary";
import List from "@/components/List";

export default function Home() {
  return (
    <main className="flex flex-col w-full items-center justify-center  ">
      <Header />
      <HeaderSecondary />
      <List/>

    </main>
  );
}
