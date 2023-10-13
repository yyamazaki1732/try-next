import { useEffect, useState } from "react";
export const GetWindowSize = (bp) => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  const [media, setMedia] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      setMedia(window.innerWidth >= bp ? true : false);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return { windowSize, media };
};
