import Link from "next/link";
const links = ["useState", "anchorLink", "contact"];

export default function Footer() {
  return (
    <footer className="p-12 bg-gray-900 text-gray-50">
      <h2>footer area</h2>
      <ul>
        {links.map((link) => (
          <li key={link}>{link}</li>
        ))}
      </ul>
    </footer>
  );
}
