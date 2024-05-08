"use client";
import clsx from "clsx";

import LoadingDots from "./LoadingDots";

interface Props {
  title: string;
  size?: "xLarge" | "large" | "medium" | "small";
  variant?: "success" | "danger" | "neutral" | "primary" | "transparent";
  btnType?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  loading?: boolean;
}

const CustomButton = ({
  title,
  size = "medium",
  btnType = "button",
  onClick = () => null,
  loading = false,
  variant = "primary",
}: Props) => {
  const getWidth = () => {
    if (size === "xLarge") return "w-[310px] py-3 lg:py-4";
    if (size === "large") return "w-[270px] py-3 lg:py-4 px-6";
    if (size === "medium") return "w-[197px] py-3 lg:py-4 px-4";
    return "w-[140px] py-2 px-3";
  };

  const getBgColor = () => {
    if (variant === "primary") return "bg-primaryPink";
    if (variant === "danger") return "bg-primaryRed";
    if (variant === "success") return "bg-primaryGreen";
    return "text-primary border";
  };

  return (
    <button
      aria-label={`Botón que dirige a la sección ${title}`}
      name="Botón"
      type={btnType}
      onClick={onClick}
      className={clsx(
        "rounded-full z-10 flex justify-center items-center font-semibold text-white tracking-wider hover:shadow-sm hover:shadow-blur hover:-translate-y-[2px] transition duration-300 max-h-12",
        getWidth(),
        (size === "large" || size === "xLarge") && "b1",
        getBgColor()
      )}
    >
      {loading ? <LoadingDots /> : <p className="tracking-widest">{title}</p>}
    </button>
  );
};

export default CustomButton;
