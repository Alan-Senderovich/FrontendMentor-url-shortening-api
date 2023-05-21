import "./globals.css";
import Hero from "../src/components/Hero";
import Nav from "../src/components/Nav";
import Statistics from "../src/components/Statistics";
import Banner from "../src/components/Banner";
import Footer from "../src/components/Footer";

export default function Home() {
  return (
    <main className="w-full">
      <Nav />
      <Hero />
      <Statistics />
      <Banner />
      <Footer />
    </main>
  )
}
