import { useEffect, useState } from "react";

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
    </div>
  );
}
// export const useWindowSize = () => {
//   const [size, setSize] = useState<number | undefined>(undefined);

//   useEffect(() => {
//     setSize(window.innerWidth);
//     const updateSize = () => {
//       setSize(window.innerWidth);
//     };

//     window.addEventListener("resize", updateSize);

//     return () => window.removeEventListener("resize", updateSize);
//   });
//   return size;
// };

// const ReloadOnResize: React.FC = () => {
//   const width = useWindowSize();
//   const [key, setKey] = useState(Math.random());
//   let doPassBp = false;
//   console.log(key);

//   useEffect(() => {
//     if (width === 768) {
//       setKey(Math.random()); // 新しいキーを設定してコンポーネントをリロード
//     }
//     if (width === 768) {
//       console.log("bp 通過");
//     }
//     if (width === 768) {
//       doPassBp = true;
//     }
//     if (width === 768) {
//       let doPassBp = true;
//     }
//   }, [key]);

//   return (
//     <div key={key} className="flex gap-x-4 items-center mt-4">
//       <p>Window width: {width}</p>
//       {(() => {
//         const boxes = [];
//         for (let i = 0; i < 5; i++) {
//           boxes.push(
//             <div
//               key={i}
//               className={
//                 "reload-box w-8 h-8 " +
//                 (doPassBp ? "bg-yellow-800" : "bg-pink-600")
//               }
//             ></div>
//           );
//         }
//         return boxes;
//       })()}
//     </div>
//   );
// };
