"use client";

import Link from "next/link";

import { useEffect } from "react";

import { useTranslation } from "../i18n/client";

import { ContactForm } from "./ContactForm";
import { LocationIcon } from "../icons/Location";

interface Props {
  lng: string;
}

export const Footer = ({ lng }: Props): JSX.Element => {
  const { t } = useTranslation(lng, "footer");

  useEffect(() => {
    const year = document.getElementById("current-year");
    year ? (year.textContent = new Date().getFullYear().toString()) : null;
  }, []);

  return (
    <footer
      id="contacts"
      className="bg-zinc-400 pt-10 md:pt-[50px] lg:pt-[60px] px-3 md:px-5 lg:px-8 pb-5"
    >
      <p className="text-xs sm:text-sm lg:text-base text-center xl:w-1/2 mx-auto mb-11">
        {t("deal-part1")}:{" "}
        <Link
          className="text-[#040f36] font-semibold"
          href={"tel: +37258885273"}
        >
          +37258885273
        </Link>{" "}
        {t("deal-part2")}:{" "}
        <Link
          className="text-[#040f36] font-semibold"
          href={"mailto: avtootmine@gmail.com"}
        >
          info@tehremont.eu
        </Link>
      </p>
      <div className="flex flex-col items-center  md:flex-row md:justify-between">
        <ContactForm lng={lng} />
        <div className="md:w-1/3 text-xs sm:text-sm lg:text-base">
          <p className="mb-5">{t("contact-text")}: </p>
          <div className="w-full md:pl-4 flex flex-col items-center gap-3">
            <p>Komposti, Rohuneeme küla,</p>
            <p> Viimsi vald, Harjumaa, Eesti.</p>
            <Link
              href="https://maps.app.goo.gl/RCH3ybsQzh47ra1C8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LocationIcon classNames="w-[100px] sm:w-[140px] lg:w-[180px] h-[100px] sm:h-[140px] lg:h-[180px] mt-7 cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
      <p className="text-center mt-14 text-[10px] sm:text-xs lg:text-sm">
        © <span id="current-year"></span> TehRemont. All rights reserved.
      </p>
    </footer>
  );
};
