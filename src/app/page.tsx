import { Cta } from "./components/cta";
import { Faq } from "./components/faq";
import { Features } from "./components/features";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Sponsored } from "./components/sponsored";
import { Testimonials } from "./components/testimonials";

export default function Home() {
  return (
    <main className="flex h-full flex-col">
      <Header />
      <Hero />
      <Sponsored />
      <Features />
      <Testimonials />
      <Cta />
      <Faq />
      <Footer />
    </main>
  );
}
