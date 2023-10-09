import { useEffect, useState } from "react";
import React from "react";
import { gsap } from "gsap";

export const WindowSize = () => {
  const [size, setSize] = useState<number | undefined>(undefined);

  useEffect(() => {
    setSize(window.innerWidth);

    const updateSize = () => {
      setSize(window.innerWidth);
    };

    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, [size]);
  return size;
};

export default function RelaoadComponent() {
  const [key, setKey] = useState(Math.random());
  const [doMatchMedia, setDoMatchMedia] = useState(true);

  let width = WindowSize();
  useEffect(() => {
    if (width === 768) {
      setKey(Math.random()); // 新しいキーを設定してコンポーネントをリロード
    }
    if (width <= 768) {
      setDoMatchMedia(true);
    } else {
      setDoMatchMedia(false);
    }
  }, [width]);
  return (
    <div key={key}>
      <div>{width}</div>
      <p>ダミーテキストです。</p>
      <img
        src="/parts/card/img-parts-card-zoro.png"
        alt=""
        className={
          "reload-box w-64 h-64 " +
          (doMatchMedia ? "bg-yellow-800" : "bg-pink-600")
        }
      />
      {(() => {
        const boxes = [];
        for (let i = 0; i < 5; i++) {
          boxes.push(
            <div
              key={i}
              className={
                "reload-box w-8 h-8 " +
                (doMatchMedia ? "bg-yellow-800" : "bg-pink-600")
              }
            ></div>
          );
        }
        return boxes;
      })()}
    </div>
  );
}
