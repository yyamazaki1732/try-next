import Block from "@/components/pages/service/block";
const headingArray = ["法人設立", "人事", "会計", "法務"];

export default function Service() {
  return (
    <div>
      <h1 className="text-30">Service</h1>
      {headingArray.map((heading, index) => (
        <Block heading={heading} />
      ))}
    </div>
  );
}
