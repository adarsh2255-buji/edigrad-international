'use client'

import About from "@/components/About";
import Founder from "@/components/Founder";
import Hero from "@/components/Hero";
import Offer from "@/components/Offer";
import Preloader from "@/components/Preloader";
import SecondarySubjects from "@/components/SecondarySubjects";
import Testimonial from "@/components/Testimonial";
import WhyEdigrad from "@/components/WhyEdigrad";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2.5 seconds
    
    // cleanup timer
    return () => clearTimeout(timer);
  }, []); // Runs only once on mount

  return (
    <>
    {isLoading ? (
      <Preloader />
    ) : (
      <>
        <Hero />
        <Offer />
        <SecondarySubjects />
        <WhyEdigrad />
        <Founder />
        <Testimonial />
        <About />
      </>
    )}
    </>
  );
}
