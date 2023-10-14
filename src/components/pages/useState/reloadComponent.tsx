import { useEffect, useState, useRef } from "react";
import { GetWindowSize } from "@/components/pages/useState/getWindowSize";

export default function ReloadComponent() {
  const [key, setKey] = useState(Math.random());
  const once = useRef(true);
  const { width: currentWidth } = GetWindowSize();
  const BREAK_POINT = 900;
  const mediaMatches = currentWidth >= BREAK_POINT ? true : false;

  useEffect(() => {
    if (currentWidth === BREAK_POINT && once.current) {
      setKey(Math.random());
      once.current = false;
    }
  }, [once]);

  return (
    <div key={key}>
      {currentWidth}
      <img
        src="/parts/card/img-parts-card-zoro.png"
        alt=""
        className={
          "reload-box w-64 h-64 " +
          (mediaMatches ? "bg-yellow-800" : "bg-pink-600")
        }
      />
    </div>
  );
}
