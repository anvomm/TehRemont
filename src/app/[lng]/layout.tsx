import type { Metadata } from "next";
import { dir } from "i18next";

import { languages } from "../i18n/settings";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import { montserrat } from "@/utils/fonts";
import "./globals.css";

interface Props {
  children: React.ReactNode;
  params: { lng: string };
}

const metadataEst: Metadata = {
  title: "TehRemont - sinu abi remondis",
  description:
    "Tehremont.eu erialad: erikeevitus, treimis- ja freesimistööd, erinevate metallide ja plastide töötlus, tehnika hooldus ja remont platsil ja väljasõidul.",
  icons: {
    icon: "/favicon.ico",
  },
};

const metadataEn: Metadata = {
  title: "TehRemont - your assistant repair",
  description:
    "Tehremont.eu deals with spec.welding processes, material machining processes, processing different types of metals and plastics, different machinery service and repair.",
  icons: {
    icon: "/favicon.ico",
  },
};

const metadataRu: Metadata = {
  title: "TehRemont - твой помощник в ремонте",
  description:
    "Tehremont.eu производит работы по спец.сварке, токарному и фрезерному делу, обработке различных металлов и пластиков, ремонту и обслуживанию различной техники.",
  icons: {
    icon: "/favicon.ico",
  },
};

export async function generateMetadata({ params }: Props) {
  return params.lng === "en"
    ? metadataEn
    : params.lng === "et"
    ? metadataEst
    : metadataRu;
}

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({ children, params: { lng } }: Props) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body className={`${montserrat.className}`}>
        <Header lng={lng} />
        {children}
        <Footer lng={lng} />
      </body>
    </html>
  );
}
