import { useEffect, useState, useRef } from "react";
import { GetWindowSize } from "@/components/pages/useState/getWindowSize";

export default function ReloadComponent() {
  const [key, setKey] = useState(Math.random());

  const {
    windowSize: { width },
  } = GetWindowSize();

  const once = useRef(true);
  const media = width >= 900 ? true : false;

  useEffect(() => {
    if (width === 768 && once.current) {
      setKey(Math.random());
      once.current = false;
    }
  }, [once]);

  return (
    <div key={key}>
      {width}
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
