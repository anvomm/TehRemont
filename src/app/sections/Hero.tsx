import { useTranslation } from "../i18n/client";

import { Gears } from "../components/Gears";

interface Props {
  lng: string;
}

export const Hero = ({ lng }: Props): JSX.Element => {
  const { t } = useTranslation(lng, "hero");

  return (
    <section className="flex justify-between">
      <div className="bg"></div>
      <Gears />
      <h1 className="text-[#bb0a21] text-5xl text-center pt-[100px] pl-5 font-bold block w-1/2">
        {t("title")}
      </h1>
      <Gears />
    </section>
  );
};
