export default function CodeBox({ heading, children }) {
  return (
    <div className="p-4 border border-yellow-900 [&:not(:first-child)]:mt-4">
      <h2>{heading}</h2>
      {children}
    </div>
  );
}
