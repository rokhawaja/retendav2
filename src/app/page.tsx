import { Navbar, Footer } from "@/components/layout";
import {
  Hero,
  Clients,
  Problem,
  InvisibleLeak,
  Services,
  RetendaMethod,
  DropProtocol,
  Testimonials,
  MeetFounder,
  Pricing,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Clients />
        <Problem />
        <InvisibleLeak />
        <Services />
        <RetendaMethod />
        <DropProtocol />
        <Testimonials />
        <MeetFounder />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
