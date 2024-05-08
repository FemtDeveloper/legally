"use client";

import Image from "next/image";
import Link from "next/link";
import MenuIcon from "../Icons/MenuIcon";

const MobileNavbar = () => {
  return (
    <div className="fixed flex md:hidden max-w-wrapper w-full  items-center justify-between px-4 py-3 bg-secondaryBlue backdrop-blur-sm glass z-40">
      <Link href="/" className="flex flex-1" aria-label="link to homepage">
        <Image src="/assets/iso1.png" width={40} height={40} alt="iso icon" />
      </Link>
      <div className="toggleContainer flex gap-3 items-center">
        <button
          // onClick={toggleLanguage}
          className="theme dark:bg-neutral-800 rounded-full"
        >
          <MenuIcon size={32} />
        </button>
      </div>
    </div>
  );
};

export default MobileNavbar;
