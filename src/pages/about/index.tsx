import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">About / index</h1>
      <Link href="about/page">page</Link>
    </>
  );
}
