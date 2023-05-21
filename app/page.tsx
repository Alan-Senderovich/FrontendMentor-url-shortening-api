"use client";

import { useRef } from 'react';
import "./globals.css";
import Hero from "../src/components/Hero";
import Nav from "../src/components/Nav";
import Statistics from "../src/components/Statistics";
import Banner from "../src/components/Banner";
import Footer from "../src/components/Footer";

export default function Home() {
  const scrollTargetRef = useRef<HTMLDivElement>(null);

  return (
    <main className="w-full">
      <Nav />
      <Hero scrollTargetRef={scrollTargetRef}/>
      <Statistics scrollTargetRef={scrollTargetRef} />
      <Banner scrollTargetRef={scrollTargetRef}/>
      <Footer />
    </main>
  )
}
