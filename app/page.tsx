import {
  FounderSection,
  HeroSection,
  PhilosophySection,
  SslMethodSection,
  TechnologyInPracticeSection,
  WhatWeBuildSection,
} from "@/components/home";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PhilosophySection />
      <SslMethodSection />
      <WhatWeBuildSection />
      <TechnologyInPracticeSection />
      <FounderSection />
    </>
  );
}
