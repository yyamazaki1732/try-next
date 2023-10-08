import { usePathname } from "next/navigation";
import Link from "next/link";

const PATH_TO_HOME = "Top";
export function Links({ path }) {
  const pathname = usePathname().split("/");

  function capitalizeFirstString(string) {
    if (string === "/") {
      return PATH_TO_HOME;
    } else {
      string = string.slice(1);
      let first = string.charAt(0).toUpperCase();
      let rest = string.slice(1);
      return first + rest;
    }
  }

  const pathCapitalized = capitalizeFirstString(path);
  const isActivePath = pathname[1] === path.slice(1) && pathname[1] !== "";

  return (
    <Link
      className={`link ${isActivePath ? "text-pink-600 underline" : ""}`}
      href={`${path}`}
    >
      {pathCapitalized}
    </Link>
  );
}
