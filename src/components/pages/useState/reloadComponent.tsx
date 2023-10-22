import { useEffect, useState, useRef } from "react";
import { useWindowSize } from "@/components/pages/useState/useWindowSize";

const ReloadComponent: React.FC = () => {
  /**
   * 任意の画面サイズでコンポーネントをリロードするための変数
   * @param key
   */
  const [key, setKey] = useState<number>(Math.random());

  /**
   * 不要なレンダリングを避けるための変数
   * @param once
   */
  const once = useRef<boolean>(true);

  /**
   *
   * @returns GetWindowSize()から取得した画面横幅の値
   */
  function GetCurrentWidth() {
    const { width: currentWidth }: { width: number } = useWindowSize();
    return currentWidth;
  }

  const currentWidth = GetCurrentWidth();

  /**
   * コンポーネントをリロードさせる任意の画面サイズ（px）
   * @param BREAK_POINT
   */
  const BREAK_POINT: number = 900;

  /**
   * 画面サイズがBREAK_POINTより大きいかどうか判断
   * @param mediaMatches
   */
  const mediaMatches: boolean = currentWidth >= BREAK_POINT ? true : false;

  useEffect(() => {
    if (currentWidth === BREAK_POINT && once.current) {
      setKey(Math.random());
      once.current = false;
    }
  }, [once]);

  return (
    <div key={key}>
      <p>window.innerWidth : "{currentWidth}"</p>
      <img
        src="/parts/card/img-parts-card-zoro.png"
        alt=""
        className={
          "w-64 h-64 " + (mediaMatches ? "bg-yellow-800" : "bg-pink-600")
        }
      />
    </div>
  );
};

export default ReloadComponent;
