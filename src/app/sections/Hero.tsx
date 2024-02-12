import { useTranslation } from "../i18n/client";

import { Gears } from "../components/Gears";

interface Props {
  lng: string;
}

export const Hero = ({ lng }: Props): JSX.Element => {
  const { t } = useTranslation(lng, "hero");

  return (
    <section className="flex justify-between h-screen sect">
      <div className="bg"></div>
      <Gears />
      <h1 className="text-[#fca311] text-3xl md:text-4xl lg:text-5xl text-center p-3  pl-5 font-bold block w-2/3 h-[210px] xl:h-[250px] flex justify-center items-center absolute shadow position bg-zinc-400/50">
        {t("title")}
      </h1>
      <Gears />
    </section>
  );
};
