import React from "react";
import Navbar from "@/components/Navbar";
import HeroHeader from "@/components/HeroHeader";
import PhotoSection from "@/components/PhotoSection";
import AboutSection from "@/components/AboutSection";
import PartnersSection from "@/components/PartnersSection";
import PastEvents from "@/components/PastEvents";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/content/site.config";
import { upcomingEvents } from "@/content/events";

function buildHomeJsonLd() {
  const org = {
    "@type": "Organization",
    name: siteConfig.communityName,
    url: siteConfig.lumaUrl,
  };

  const eventItems = upcomingEvents
    .filter((event) => event.date)
    .map((event) => ({
      "@type": "Event",
      name: event.title,
      startDate: event.date,
      location: {
        "@type": "Place",
        name: event.location,
      },
      organizer: org,
      ...(event.lumaUrl ? { url: event.lumaUrl } : {}),
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
    }));

  return {
    "@context": "https://schema.org",
    "@graph": [org, ...eventItems],
  };
}

const SECTION_GAP = "pt-24 md:pt-40";

const Home: React.FC = () => (
  <main className="min-h-screen scroll-smooth bg-bg text-ink">
    <JsonLd data={buildHomeJsonLd()} />
    <Navbar />
    <div className="mx-auto w-full max-w-[1080px] px-6">
      <HeroHeader />
      <div className={SECTION_GAP}>
        <PhotoSection />
      </div>
      <div className={SECTION_GAP}>
        <PastEvents />
      </div>
      <div className={SECTION_GAP}>
        <AboutSection />
      </div>
      <div className={SECTION_GAP}>
        <ContactSection />
      </div>
      <PartnersSection />
    </div>
    <Footer />
  </main>
);

export default Home;
