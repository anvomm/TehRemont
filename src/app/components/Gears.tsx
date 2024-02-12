import { GearIcon } from "../icons/Gear";

export const Gears = (): JSX.Element => {
  return (
    <div className="relative w-[340px] h-80  hidden lg:flex items-center justify-center">
      <GearIcon classNames={"gear1 spin"} />
      <GearIcon classNames={"gear2 spin-back"} />
      <GearIcon classNames={"gear3 spin"} />
    </div>
  );
};
