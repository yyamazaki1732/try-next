import Card from "@/components/parts/card";

const cardArray = [
  { path: "ninja", title: "title", text: "text" },
  { path: "koudan", title: "title", text: "text" },
  { path: "zoro", title: "title", text: "text" },
  { path: "joumon_yayoi", title: "title", text: "text" },
  { path: "ninja", title: "title", text: "text" },
  { path: "koudan", title: "title", text: "text" },
  { path: "zoro", title: "title", text: "text" },
  { path: "joumon_yayoi", title: "title", text: "text" },
  { path: "ninja", title: "title", text: "text" },
  { path: "koudan", title: "title", text: "text" },
  { path: "zoro", title: "title", text: "text" },
  { path: "joumon_yayoi", title: "title", text: "text" },
  { path: "ninja", title: "title", text: "text" },
  { path: "koudan", title: "title", text: "text" },
  { path: "zoro", title: "title", text: "text" },
  { path: "joumon_yayoi", title: "title", text: "text" },
];

export default function Page() {
  return (
    <section className="grid grid-cols-2 gap-4">
      {cardArray.map((card, index) => (
        <Card
          key={index}
          path={card.path}
          title={card.title}
          text={card.text}
        />
      ))}
    </section>
  );
}
