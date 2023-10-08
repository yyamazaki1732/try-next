import { usePathname } from "next/navigation";
import Link from "next/link";
const pathToHome = "Next.js";

export function Links({ path }) {
  const pathname = usePathname();

  function CapitalizeFirstString(string) {
    if (string === "/") {
      return pathToHome;
    } else {
      let first = string.charAt(0).toUpperCase();
      let rest = string.slice(1);
      return first + rest;
    }
  }

  const pathCapitalized = CapitalizeFirstString(path);

  return (
    <Link
      className={`link ${
        pathname === `/${path}` ? "text-pink-600 underline" : ""
      }`}
      href={path}
    >
      {pathCapitalized}
    </Link>
  );
}
