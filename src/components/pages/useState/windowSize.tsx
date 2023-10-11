import { useEffect, useState } from "react";
export const WindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    } else {
      return;
    }
  }, []);
  return windowSize;
};

export default function RelaoadComponent() {
  const [key, setKey] = useState(Math.random());
  const [bpFlag, setBpFlag] = useState(true);

  let width = WindowSize().width;
  useEffect(() => {
    if (width == 768) {
      setBpFlag((prevState) => !prevState);
      setKey(Math.random()); // 新しいキーを設定してコンポーネントをリロード
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
          "reload-box w-64 h-64 " + (bpFlag ? "bg-yellow-800" : "bg-pink-600")
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
                (bpFlag ? "bg-yellow-800" : "bg-pink-600")
              }
            ></div>
          );
        }
        return boxes;
      })()}
    </div>
  );
}
