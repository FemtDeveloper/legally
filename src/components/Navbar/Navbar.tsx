import Image from "next/image";
import ListItems from "./ListItems";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  return (
    <>
      <MobileNavbar />
      <nav className="hidden fixed md:flex py-4 max-w-wrapper w-full gap-4 bg-transparent rounded-2xl z-40">
        <div className="flex flex-1 text-white items-center justify-between">
          <a
            href="/"
            className="flex items-center gap-3 flex-1"
            aria-label="Link to redirect to homepage"
          >
            <Image
              src="/assets/iso.png"
              width={40}
              height={40}
              alt="iso icon"
            />
            <h3 className="h3 font-bold">RECLÁMALO</h3>
          </a>
          <ListItems />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
