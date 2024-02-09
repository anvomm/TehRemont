"use client";

import Link from "next/link";
import Image from "next/image";

import { useState } from "react";

import { useOutsideClick } from "@/hooks/useOutsideClick";
import { useTranslation } from "../i18n/client";

import ReactCountryFlag from "react-country-flag";

import { GlobeIcon } from "../icons/Globe";

import { krona, goldman } from "@/utils/fonts";

interface Props {
  lng: string;
}

export const Header = ({ lng }: Props): JSX.Element => {
  const { t } = useTranslation(lng, "header");

  const [showLangBar, setShowLangBar] = useState<boolean>(false);

  const openLangBar = () => setShowLangBar(!showLangBar);

  const closeLangBar = () =>
    showLangBar ? setShowLangBar(!showLangBar) : null;

  const ref = useOutsideClick(closeLangBar);

  return (
    <header className="py-7 px-8 bg-zinc-400 flex justify-between items-center">
      <p className="flex items-center">
        <span className={`${krona.className} text-4xl text-[#fca311] shadow`}>
          TEH
        </span>
        <span className={`${goldman.className} text-4xl text-stone-700`}>
          Rem
        </span>
        <Image
          priority
          src={"/cog-icon.svg"}
          alt="cog icon as o letter"
          width={40}
          height={40}
        />
        <span className={`${goldman.className} text-4xl text-stone-700`}>
          nt
        </span>
      </p>
      <div className="flex items-center gap-[50px]">
        <Link
          className="font-medium hover:text-[#fca311] focus:text-[#fca311]"
          href={"/#contacts"}
        >
          {t("contacts")}
        </Link>
        <div ref={ref}>
          <GlobeIcon
            openLangBar={openLangBar}
            classNames="text-[#fca311] cursor-pointer"
          />
        </div>
      </div>
      {showLangBar && (
        <div className="absolute right-5 top-16 w-30 z-20 h-50 p-5 bg-[#6c757d] rounded-md">
          <ul className="flex flex-col gap-5">
            <li className="cursor-pointer hover:text-[#fca311] hover:font-semibold focus:text-[#fca311] focus:font-semibold">
              <Link className="flex items-center gap-2" href={`/et`}>
                <ReactCountryFlag
                  style={{ fontSize: "25px" }}
                  svg
                  countryCode="EE"
                />
                {t("languages.est")}
              </Link>
            </li>
            <li className="cursor-pointer hover:text-[#fca311] hover:font-semibold focus:text-[#fca311] focus:font-semibold">
              <Link className="flex items-center gap-2" href={`/en`}>
                <ReactCountryFlag
                  style={{ fontSize: "25px" }}
                  svg
                  countryCode="GB"
                />
                {t("languages.en")}
              </Link>
            </li>
            <li className="cursor-pointer hover:text-[#fca311] hover:font-semibold focus:text-[#fca311] focus:font-semibold">
              <Link className="flex items-center gap-2" href={`/ru`}>
                <ReactCountryFlag
                  style={{ fontSize: "25px" }}
                  svg
                  countryCode="RU"
                />
                {t("languages.ru")}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
