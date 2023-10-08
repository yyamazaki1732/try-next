export default function Card({ path, title, text }) {
  return (
    <div className="grid grid-cols-[4fr_6fr] gap-x-4 bg-yellow-100 p-4 rounded-md">
      <img
        className="bg-gray-100"
        src={`/parts/card/img-parts-card-${path}.png`}
        alt=""
      />
      <div>
        <h3 className="pb-2 mb-2 border-b border-gray-800">{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
