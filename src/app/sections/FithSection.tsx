import { useTranslation } from "../i18n/client";

interface Props {
  lng: string;
}

export const FithSection = ({ lng }: Props): JSX.Element => {
  const { t } = useTranslation(lng, "sections");

  return (
    <section className="flex justify-center items-center px-10 h-screen sect">
      <div className="bg"></div>
      <p className="text-[#f2e552] text-lg sm:text-xl lg:text-[22px] xl:text-2xl text-center font-bold w-5/6 h-[250px] xl:h-[260px] p-5 flex justify-center items-center bg-[#7d0404]/50">
        {t("section4")}
      </p>
    </section>
  );
};
