"use client";

import { useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import { Hero } from "../sections/Hero";
import { SecondSection } from "../sections/SecondSection";

import { useTranslation } from "../i18n/client";

interface Props {
  params: { lng: string };
}

export default function Home({ params: { lng } }: Props) {
  const { t } = useTranslation(lng, "secondSection");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Define a type for your section element
    type SectionElement = HTMLElement & {
      bg: HTMLElement | null;
    };

    // Function to get the ratio
    const getRatio = (el: SectionElement) =>
      window.innerHeight / (window.innerHeight + el.offsetHeight);

    // Iterate through sections
    gsap.utils.toArray<SectionElement>(".sect").forEach((section, i) => {
      // Check if 'section' exists before proceeding
      if (section) {
        section!.bg = section!.querySelector<HTMLElement>(".bg");

        // Check if 'section.bg' exists before proceeding
        if (section && section.bg) {
          // Give the backgrounds some random images
          section.bg.style.backgroundImage = `url(../../assets/images/bg/bg-${i})`;

          // the first image (i === 0) should be handled differently because it should start at the very top.
          // use function-based values in order to keep things responsive
          gsap.fromTo(
            section.bg,
            {
              backgroundPosition: () =>
                i
                  ? `50% ${-window.innerHeight * getRatio(section)}px`
                  : "50% 0px",
            },
            {
              backgroundPosition: () =>
                `50% ${window.innerHeight * (1 - getRatio(section))}px`,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: () => (i ? "top bottom" : "top top"),
                end: "bottom top",
                scrub: true,
                invalidateOnRefresh: true, // to make it responsive
              },
            }
          );
        }
      }
    });
  }, []);

  return (
    <main className="px-5">
      <Hero lng={lng} />
      <SecondSection lng={lng} />
      <section className="flex justify-center items-center px-10 sect">
        <div className="bg"></div>
        <p className="text-[#bb0a21] text-2xl text-center font-bold">
          {t("text")}
        </p>
      </section>
    </main>
  );
}
