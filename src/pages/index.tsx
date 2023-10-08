import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
      <p>これはNext.jsの練習用のサイトです。</p>
      <Link href="/about">About</Link>
      <Link href="/try/children">children</Link>
    </div>
  );
}
