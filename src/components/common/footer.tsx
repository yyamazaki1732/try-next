import Link from "next/link";
const links = ["about", "service", "contact"];

export default function Footer() {
  return (
    <footer className="p-12 bg-gray-900 text-gray-50">
      <h2>footer area</h2>
      <ul>
        {links.map((link) => (
          <li>{link}</li>
        ))}
      </ul>
    </footer>
  );
}
