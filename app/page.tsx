import Image from "next/image";
import HeroSection from "./components/hero-section/heroSection";
import WhyChooseRolDrive from "./components/why-choose-rol-drive/whyChooseRolDrive";
import OccasionSection from "./components/occasion/occasion";
import ChauffeurService from "./components/chauffeur-service/chauffeurService";
import ClientsSay from "./components/clients-say/clientsSay";
import FleetCarousel from "./components/fleet-carousel/fleetCarousel";
import FAQAccordion from "./components/faq-accordion/faqAccordion";
import AppPromotion from "./components/app-promotion/appPromotion";
import RequestQuote from "./components/request-quote/requestQuote";
import BookChauffeur from "./components/book-chauffeur/bookChauffeur";
export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyChooseRolDrive />
      <OccasionSection />
      <ChauffeurService />
      <FleetCarousel />
      <RequestQuote />

      <ClientsSay />
      <AppPromotion />
      <FAQAccordion />
      <BookChauffeur />
    </>
  );
}
