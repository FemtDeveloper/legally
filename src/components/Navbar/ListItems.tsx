import Link from "next/link";
import { linkItems } from "./links";

const ListItems = () => {
  return (
    <ul className="flex flex-2 justify-between">
      {linkItems.map((link, i) => (
        <li key={i}>
          <Link
            href={link.url}
            className="text-white md:hover:font-medium md:hover:scale-110 md:dark:hover:text-primaryOrange relative flex flex-col justify-center items-center transition-all duration-500 group"
            aria-label="link that redirects to other section"
          >
            <p className="b1 relative -top-1">{link.label}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ListItems;
