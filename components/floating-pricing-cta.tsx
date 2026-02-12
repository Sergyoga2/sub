"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

const FloatingPricingCta = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const pricingSection = document.getElementById("pricing");

    if (!pricingSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHidden(entry.isIntersecting);
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(pricingSection);

    return () => observer.disconnect();
  }, []);

  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing");

    pricingSection?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      className={`fixed right-0 bottom-4 left-0 z-50 flex justify-center px-4 transition-all duration-300 ${
        hidden ? "pointer-events-none translate-y-8 opacity-0" : "opacity-100"
      }`}
    >
      <Button
        onClick={scrollToPricing}
        className="h-14 w-full max-w-sm rounded-xl text-base font-semibold shadow-xl transition hover:brightness-110"
      >
        Выбрать подписку
      </Button>
    </div>
  );
};

export { FloatingPricingCta };
