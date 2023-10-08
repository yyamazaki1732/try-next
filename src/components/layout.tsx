import Navbar from "./common/header";
import Footer from "./common/footer";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="py-8 px-12 min-h-[70vh]">
        {children} <Link href="/">To Top</Link>
      </main>
      <Footer />
    </>
  );
}
