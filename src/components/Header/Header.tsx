import Image from "next/image";
import { CustomButton } from "../ui";

const Header = () => {
  return (
    <section
      id="header"
      className="w-full md:mt-20 relative max-w-wrapper  overflow-x-hidden items-center flex flex-col md:flex-row gap-4 lg:gap-16 "
    >
      <div className="w-full md:w-[55%] gap-3 md:gap-4 flex flex-col justify-center  text-white">
        <h1 className="h1 md:d2 text-center md:text-left">
          Hacemos tus reclamos
        </h1>
        <h2 className="b1 md:h3 animated-gradient-text dark:text-primaryOrange text-center md:text-left">
          Por ti
        </h2>
        <CustomButton title="Hagámoslo" variant="primary" />
      </div>
      <Image
        src="/assets/header.png"
        className="md:w-[45%] md:h-full h-96 w-96 object-cover"
        width={500}
        priority
        height={500}
        alt="gif header"
      />
    </section>
  );
};

export default Header;
