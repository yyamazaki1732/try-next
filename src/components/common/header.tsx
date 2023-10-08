import Link from "next/link";

export default function Footer() {
  return (
    <header className="py-8 px-12 text-2xl border-b border-blue-900">
      <nav className="flex gap-x-4">
        <Link href="/">Next.js</Link>
        <Link href="/about">About</Link>
        <Link href="/service">Service</Link>
      </nav>
    </header>
  );
}
