import { useEffect, useState, useRef } from "react";
import { GetWindowSize } from "@/components/pages/useState/getWindowSize";

const bp = 900;

export default function RelaoadComponent() {
  const [key, setKey] = useState(Math.random());

  const {
    windowSize: { width },
    media,
  } = GetWindowSize(bp);

  const once = useRef(true);

  useEffect(() => {
    if (width === 768 && once.current) {
      setKey(Math.random());
      once.current = false;
    }
  }, [once]);

  return (
    <div key={key}>
      <img
        src="/parts/card/img-parts-card-zoro.png"
        alt=""
        className={
          "reload-box w-64 h-64 " + (media ? "bg-yellow-800" : "bg-pink-600")
        }
      />
    </div>
  );
}
