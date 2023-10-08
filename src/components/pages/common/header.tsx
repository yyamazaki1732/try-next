import { Links } from "@/components/parts/headerLink";

export default function Footer() {
  return (
    <header className="py-8 px-12 text-2xl border-b border-blue-900">
      <nav className="flex gap-x-4">
        <Links path="/" />
        <Links path="/about" />
        <Links path="/service" />
      </nav>
    </header>
  );
}
