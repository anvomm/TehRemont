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
    <header className="py-4 md:py-6 xl:py-7 px-3 md:px-5 xl:px-8 bg-zinc-400 flex justify-between items-center">
      <p className="flex items-center">
        <span
          className={`${krona.className} text-2xl sm:text-3xl xl:text-4xl text-[#fca311] shadow`}
        >
          TEH
        </span>
        <span
          className={`${goldman.className} text-2xl sm:text-3xl xl:text-4xl text-stone-700`}
        >
          Rem
        </span>
        <Image
          priority
          src={"/cog-icon.svg"}
          alt="cog icon as o letter"
          width={30}
          height={30}
          className="sm:w-[35px] sm:h-[35px] xl:w-[40px] xl:h-[40px]"
        />
        <span
          className={`${goldman.className} text-2xl sm:text-3xl xl:text-4xl text-stone-700`}
        >
          nt
        </span>
      </p>
      <div className="flex items-center gap-[50px]">
        <Link
          className="font-medium text-xs sm:text-sm md:text-base lg:text-lg hover:text-[#fca311]"
          href={"/#contacts"}
        >
          {t("contacts")}
        </Link>
        <div ref={ref}>
          <GlobeIcon
            openLangBar={openLangBar}
            classNames="text-[#fca311] sm:w-6 md:w-7 xl:w-8 sm:h-6 md:h-7 xl:h-8 cursor-pointer"
          />
        </div>
      </div>
      {showLangBar && (
        <div className="absolute right-4 top-14 md:right-5 md:top-16 w-30 z-20 h-50 p-4 md:p-5 bg-[#6c757d] rounded-md">
          <ul className="flex flex-col gap-2 xs:gap-3 md:gap-4 xl:gap-5">
            <li className="text-xs sm:text-[13px] md:text-sm lg:text-base cursor-pointer hover:text-[#fca311] hover:font-semibold focus:text-[#fca311] focus:font-semibold">
              <Link className="flex items-center gap-2 " href={`/et`}>
                <ReactCountryFlag
                  className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[25px]"
                  svg
                  countryCode="EE"
                />
                {t("languages.est")}
              </Link>
            </li>
            <li className="text-xs sm:text-[13px] md:text-sm lg:text-base cursor-pointer hover:text-[#fca311] hover:font-semibold focus:text-[#fca311] focus:font-semibold">
              <Link className="flex items-center gap-2" href={`/en`}>
                <ReactCountryFlag
                  className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[25px]"
                  svg
                  countryCode="GB"
                />
                {t("languages.en")}
              </Link>
            </li>
            <li className="text-xs sm:text-[13px] md:text-sm lg:text-base cursor-pointer hover:text-[#fca311] hover:font-semibold focus:text-[#fca311] focus:font-semibold">
              <Link className="flex items-center gap-2" href={`/ru`}>
                <ReactCountryFlag
                  className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[25px]"
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
