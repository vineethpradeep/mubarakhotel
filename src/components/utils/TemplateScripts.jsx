"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function TemplateScripts() {
  useEffect(() => {
    // Initialize AOS safely
    AOS.init({ duration: 600, easing: "ease-in-out", once: true });

    (async () => {
      // Dynamically import DOM-dependent libraries
      const { default: Swiper } = await import("swiper");
      const { default: GLightbox } = await import("glightbox");
      const { default: Isotope } = await import("isotope-layout");
      const imagesLoaded = (await import("imagesloaded")).default;

      // ===== Scroll Scrolled Toggle =====
      const body = document.body;
      const header = document.querySelector("#header");
      const toggleScrolled = () => {
        if (!header) return;
        if (
          !header.classList.contains("scroll-up-sticky") &&
          !header.classList.contains("sticky-top") &&
          !header.classList.contains("fixed-top")
        )
          return;
        window.scrollY > 100
          ? body.classList.add("scrolled")
          : body.classList.remove("scrolled");
      };
      window.addEventListener("scroll", toggleScrolled);
      toggleScrolled();

      // ===== Mobile Nav Toggle =====
      const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");
      const mobileNavToggle = () => {
        body.classList.toggle("mobile-nav-active");
        mobileNavToggleBtn?.classList.toggle("bi-list");
        mobileNavToggleBtn?.classList.toggle("bi-x");
      };
      mobileNavToggleBtn?.addEventListener("click", mobileNavToggle);

      // Close mobile nav on link click
      document.querySelectorAll("#navmenu a").forEach((link) =>
        link.addEventListener("click", () => {
          if (body.classList.contains("mobile-nav-active")) mobileNavToggle();
        })
      );

      // ===== Scroll-to-top button =====
      const scrollTop = document.querySelector(".scroll-top");
      const toggleScrollTop = () => {
        if (scrollTop) {
          window.scrollY > 100
            ? scrollTop.classList.add("active")
            : scrollTop.classList.remove("active");
        }
      };
      scrollTop?.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
      window.addEventListener("scroll", toggleScrollTop);
      toggleScrollTop();

      // ===== Preloader =====
      const preloader = document.querySelector("#preloader");
      if (preloader) window.addEventListener("load", () => preloader.remove());

      // ===== Isotope =====
      document.querySelectorAll(".isotope-layout").forEach((el) => {
        const layout = el.getAttribute("data-layout") ?? "masonry";
        const filter = el.getAttribute("data-default-filter") ?? "*";
        const sort = el.getAttribute("data-sort") ?? "original-order";

        let iso;
        imagesLoaded(el.querySelector(".isotope-container"), () => {
          iso = new Isotope(el.querySelector(".isotope-container"), {
            itemSelector: ".isotope-item",
            layoutMode: layout,
            filter,
            sortBy: sort,
          });
        });

        el.querySelectorAll(".isotope-filters li").forEach((f) =>
          f.addEventListener("click", function () {
            el.querySelector(".filter-active")?.classList.remove(
              "filter-active"
            );
            this.classList.add("filter-active");
            iso.arrange({ filter: this.getAttribute("data-filter") });
            AOS.refresh();
          })
        );
      });

      // ===== Swiper =====
      document.querySelectorAll(".init-swiper").forEach((swiperEl) => {
        const configEl = swiperEl.querySelector(".swiper-config");
        if (!configEl) return;
        const config = JSON.parse(configEl.innerHTML.trim());
        new Swiper(swiperEl, config);
      });

      // ===== GLightbox =====
      GLightbox({ selector: ".glightbox" });
    })();

    // Cleanup
    return () => {
      window.removeEventListener("scroll", () => {});
      // Optionally remove other listeners if needed
    };
  }, []);

  return null;
}
