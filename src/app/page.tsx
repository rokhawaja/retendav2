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
    <div className="overflow-x-hidden max-w-full">
      <Navbar />
      <main className="overflow-x-hidden">
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
    </div>
  );
}
