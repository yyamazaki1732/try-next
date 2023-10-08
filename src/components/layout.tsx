import Navbar from "@/components/pages/common/header";
import Footer from "@/components/pages/common/footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="py-8 px-12 min-h-[70vh]">{children}</main>
      <Footer />
    </>
  );
}
