import { Cta } from "./components/cta";
import { Features } from "./components/features";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import Image from "next/image";
import { Sponsored } from "./components/sponsored";

export default function Home() {
  return (
    <main className="flex h-full flex-col">
      <Header />
      <Hero />
      <Sponsored />
      <Features />
      <Cta />
    </main>
  );
}
