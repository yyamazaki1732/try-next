import { Links } from "@/components/parts/headerLink";

export default function Header() {
  return (
    <header className="py-8 px-12 text-2xl border-b border-blue-900">
      <nav className="flex gap-x-4">
        <Links path="/" />
        <Links path="/useState" />
        <Links path="/useEffect" />
        <Links path="/anchorLink" />
      </nav>
    </header>
  );
}
