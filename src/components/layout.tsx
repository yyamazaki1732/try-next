import { Header, Footer, AsideBar } from "@/components/pages/common/index";

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
