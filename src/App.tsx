import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import Reservation from "./components/Reservation";
import Footer from "./components/Footer";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href')?.substring(1);
        const element = document.getElementById(targetId || "");
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="relative overflow-x-hidden selection:bg-wood selection:text-charcoal bg-rice">
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Menu />
        <Gallery />
        <Reservation />
      </main>
      <Footer />
    </div>
  );
}
