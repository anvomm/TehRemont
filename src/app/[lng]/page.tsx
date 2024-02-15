"use client";

import { useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import { Hero } from "../sections/Hero";
import { SecondSection } from "../sections/SecondSection";
import { ThirdSection } from "../sections/ThirdSection";
import { FourthSection } from "../sections/FourthSection";
import { FithSection } from "../sections/FithSection";

import bg1 from "../../assets/images/bg/bg-1.jpg";
import bg2 from "../../assets/images/bg/bg-2.jpg";
import bg3 from "../../assets/images/bg/bg-3.jpg";
import bg4 from "../../assets/images/bg/bg-4.jpg";
import bg5 from "../../assets/images/bg/bg-5.jpg";

interface Props {
  params: { lng: string };
}

const backgrounds = [bg1, bg2, bg3, bg4, bg5];

export default function Home({ params: { lng } }: Props) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    type SectionElement = HTMLElement & {
      bg: HTMLElement | null;
    };

    const getRatio = (el: SectionElement) =>
      window.innerHeight / (window.innerHeight + el.offsetHeight);

    gsap.utils.toArray<SectionElement>(".sect").forEach((section, i) => {
      if (section) {
        section!.bg = section!.querySelector<HTMLElement>(".bg");

        if (section && section.bg) {
          const bgImage = backgrounds[i];
          section.bg.style.backgroundImage = `url(${bgImage.src})`;

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
                invalidateOnRefresh: true,
              },
            }
          );
        }
      }
    });
  }, []);

  return (
    <main>
      <Hero lng={lng} />
      <SecondSection lng={lng} />
      <ThirdSection lng={lng} />
      <FourthSection lng={lng} />
      <FithSection lng={lng} />
    </main>
  );
}
