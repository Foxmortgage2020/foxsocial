import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import HowItWorks from "@/components/HowItWorks";
import Credibility from "@/components/Credibility";
import Industries from "@/components/Industries";
import Pricing from "@/components/Pricing";
import BetaForm from "@/components/BetaForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ticker />
      <HowItWorks />
      <Credibility />
      <Industries />
      <Pricing />
      <BetaForm />
      <Footer />
    </>
  );
}
