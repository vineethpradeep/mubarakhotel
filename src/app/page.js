"use client";

import { useEffect } from "react";
import AOS from "aos";

import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Menu from "@/components/menu/Menu";
import Testimonials from "@/components/testimonials/Testimonials";
import BookATable from "@/components/bookATable/BookATable";
import Location from "@/components/location/Location";
import Events from "@/components/events/Events";
import Contact from "@/components/contact/Contact";

export default function HomePage() {
  useEffect(() => {
    // Initialize AOS
    AOS.init();

    // Dynamically import DOM-dependent libraries
    (async () => {
      const { default: Swiper } = await import("swiper");
      const { default: GLightbox } = await import("glightbox");

      // Initialize Swiper
      document.querySelectorAll(".swiper-container").forEach((el) => {
        new Swiper(el, {});
      });

      // Initialize GLightbox
      GLightbox({ selector: ".glightbox" });
    })();
  }, []);

  return (
    <main className="main">
      <Hero />
      <About />
      <Menu />
      <Testimonials />
      <BookATable />
      <Location />
      <Events />
      <Contact />
    </main>
  );
}
