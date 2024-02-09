import { useTranslation } from "../i18n/client";

interface Props {
  lng: string;
}

export const ThirdSection = ({ lng }: Props): JSX.Element => {
  const { t } = useTranslation(lng, "sections");

  return (
    <section className="flex justify-center items-center px-10 h-screen sect">
      <div className="bg"></div>
      <p className="text-[#a8763e] text-2xl text-center font-bold w-5/6 h-[400px] p-5 flex justify-center items-center shadow-3 bg-[#161a1d]/50">
        {t("section2")}
      </p>
    </section>
  );
};
