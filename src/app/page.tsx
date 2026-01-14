import { Navbar, Footer } from "@/components/layout";
import {
  Hero,
  Clients,
  Problem,
  Services,
  Pricing,
  Testimonials,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Clients />
        <Problem />
        <Services />
        <Pricing />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
