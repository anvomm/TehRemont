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
    <footer id="contacts" className="bg-zinc-600 pt-[60px] px-8 pb-5">
      <p className="text-center w-1/2 mx-auto mb-11">
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
          avtootmine@gmail.com
        </Link>
      </p>
      <div className="flex justify-between">
        <ContactForm lng={lng} />
        <div className="w-1/3">
          <p className="mb-5">{t("contact-text")}: </p>
          <div className="w-full pl-4 flex flex-col gap-3">
            <p>Komposti, Rohuneeme küla,</p>
            <p> Viimsi vald, Harjumaa, Eesti.</p>
            <Link
              href="https://maps.app.goo.gl/RCH3ybsQzh47ra1C8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LocationIcon classNames="w-[180px] h-[180px] mt-7 cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
      <p className="text-center mt-14 text-sm">
        © <span id="current-year"></span> TehRemont. All rights reserved.
      </p>
    </footer>
  );
};
