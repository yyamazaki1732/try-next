import { useState, useEffect } from "react";

export default function BgChange() {
  const [h, setH] = useState(0);

  useEffect(() => {
    const handler = () => {
      setH((h) => (h + 1) % 360);
    };
    window.addEventListener("pointermove", handler);
    return () => {
      window.removeEventListener("pointermove", handler);
    };
  }, []);

  return (
    <div
      style={{
        backgroundColor: `hsl(${h}, 100%, 50%)`,
        width: "100px",
        height: "100px",
      }}
    />
  );
}
