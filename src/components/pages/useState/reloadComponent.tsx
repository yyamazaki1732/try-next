import { useEffect, useState, useRef } from "react";
import { useWindowSize, useMediaMatches } from "@/components/hooks/index";

const ReloadComponent: React.FC = () => {
  /**
   * 任意の画面サイズでコンポーネントをリロードするための変数
   * @param key
   */
  const [key, setKey] = useState(Math.random());

  /**
   * 不要なレンダリングを避けるための変数
   * @param once
   */
  const once = useRef<boolean>(true);

  /**
   * コンポーネントをリロードさせる任意の画面サイズ（px）
   * @param BREAK_POINT
   */
  const BREAK_POINT: number = 900;

  /**
   *useWindowSize()から取得した画面横幅の値
   * @param currentWidth
   */
  const { width: currentWidth } = useWindowSize();

  /**
   *任意のブレイクポイントより画面サイズが大きかどうかを判断
   * @param mediaMatches
   */
  const mediaMatches = useMediaMatches(BREAK_POINT, currentWidth);

  useEffect(() => {
    if (currentWidth === BREAK_POINT && once.current) {
      setKey(Math.random());
      once.current = false;
    }
  }, []);

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
