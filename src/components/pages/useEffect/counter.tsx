import { useState, useEffect } from "react";

export const CountButton = ({ func }) => {
  return (
    <button
      className="p-0 border border-gray-800 rounded aspect-square w-12"
      onClick={func}
    >
      +
    </button>
  );
};

export default function Counter() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log("useEffectが実行されました");
  }, [count]);

  return (
    <div>
      <h1>Learn useEffect</h1>
      <p>
        Count: {count}/ Count2: {count2}
      </p>
      <div className="grid grid-cols-2 w-max gap-x-2">
        <CountButton func={() => setCount(count + 1)} />
        <CountButton func={() => setCount2(count2 + 1)} />
      </div>
    </div>
  );
}
