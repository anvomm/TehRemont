import { useTranslation } from "../i18n/client";

interface Props {
  lng: string;
}

export const SecondSection = ({ lng }: Props): JSX.Element => {
  const { t } = useTranslation(lng, "secondSection");

  return (
    <section className="flex justify-center items-center px-10 sect">
      <div className="bg"></div>
      <p className="text-[#bb0a21] text-2xl text-center font-bold">
        {t("text")}
      </p>
    </section>
  );
};
