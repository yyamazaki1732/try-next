import Header from "@/components/pages/common/header";
import AsideBar from "@/components/pages/common/asideBar";
import Footer from "@/components/pages/common/footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="py-8 px-12 min-h-[70vh] grid grid-cols-[1fr_minmax(12vw,14rem)] gap-x-4 max-w-7xl">
        <section className="px-4">{children}</section>
        <AsideBar />
      </main>
      <Footer />
    </>
  );
}
