import PrimaryButton from "@/components/parts/primaryLink";

export default function AsideBar() {
  return (
    <aside className="bg-gray-50 p-4 rounded-md h-min sticky top-8">
      <img
        className="border border-gray-300"
        src="/pages/common/img-com-asidebar-intro.png"
        width="340"
        height="400"
        alt="山﨑優介"
      />
      <h2 className="mt-6">山﨑優介</h2>
      <p className="text-14 mt-4">
        ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。
        ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。
      </p>
      <div className="mt-4">
        {" "}
        <PrimaryButton text="お問い合わせ" />
      </div>
    </aside>
  );
}
