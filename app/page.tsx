import { Hero } from "@/components/hero";
import { BentoGrid } from "@/components/landing/bento-grid";
import { Footer } from "@/components/landing/footer";
import { Navbar } from "@/components/navbar";

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <BentoGrid />
      <Footer />
    </>
  );
}
