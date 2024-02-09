import { useRef, MouseEvent, ChangeEvent, useState } from "react";

import { useTranslation } from "../i18n/client";
import { useForm, ValidationError } from "@formspree/react";

import { RemoveIcon } from "../icons/Remove";

interface Props {
  lng: string;
}

export const ContactForm = ({ lng }: Props): JSX.Element => {
  const { t } = useTranslation(lng, "form");

  const [state, handleSubmit] = useForm("xeqyaebd");
  const [picture, setPicture] = useState<string>("");

  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    if (hiddenFileInput.current) {
      hiddenFileInput.current.click();
    }
  };

  const removePicture = () => {
    setPicture("");
  };
  
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files !== null) {
      const fileUploaded = event.target.files[0];
      setPicture(fileUploaded.name);
      console.log(fileUploaded.name);
    }
  };

  if (state.succeeded) {
    setPicture("");
    return <p>{t("success")}</p>;
  }

  return (
    <form
      method="POST"
      action="https://formspree.io/f/xeqyaebd"
      encType="multipart/form-data"
      className="flex flex-col gap-5 w-[500px]"
      onSubmit={handleSubmit}
    >
      <label className="flex flex-col gap-1 text-[#1f135e] font-medium">
        {t("email")}:
        <input
          className="bg-zinc-500 text-[#0a0a0a] rounded h-10 pl-3 outline-none"
          id="email"
          type="email"
          name="email"
        />
      </label>
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label className="flex flex-col gap-1 text-[#1f135e] font-medium">
      {t("message")}:
        <textarea
          className="bg-zinc-500 rounded text-[#0a0a0a] h-20 pl-3 pt-3 outline-none"
          id="message"
          name="message"
        />
      </label>

      <ValidationError prefix="Message" field="message" errors={state.errors} />
      {/* <div className="flex gap-3 items-center">
        <div
          className="text-[#061069] bg-zinc-500 w-[180px] py-3 flex justify-center items-center font-medium rounded cursor-pointer"
          onClick={handleClick}
        >
          {t("upload")}
        </div>
        {picture && (
          <p className="flex gap-1 items-center text-xs">
            {picture}{" "}
            <RemoveIcon
              classNames="cursor-pointer"
              removeImage={removePicture}
            />
          </p>
        )}
      </div>
      <input
        ref={hiddenFileInput}
        onChange={handleChange}
        className="hidden"
        type="file"
        name="attachment"
        accept="image/png, image/jpeg"
      /> */}
      <button
        className="mt-8 py-3 rounded-md bg-[#061069] text-zinc-400 font-medium w-[120px] self-center flex justify-center items-center"
        type="submit"
        disabled={state.submitting}
      >
        {t("submit")}
      </button>
      <ValidationError errors={state.errors} />
    </form>
  );
};
