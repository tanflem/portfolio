import HeroSection from "../app/components/HeroSection";
import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div className="container mx-auto py-4 px-12">
        <HeroSection />
      </div>
    </main>
  );
}
