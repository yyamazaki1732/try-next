import { useState, useEffect } from "react";

export default function CountUp() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const time = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(time);
  }, []);
  return <div>{count}</div>;
}
