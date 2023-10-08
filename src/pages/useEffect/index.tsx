import BgChange from "@/components/pages/useEffect/bgChange";
import Counter from "@/components/pages/useEffect/counter";
import NameChange from "@/components/pages/useEffect/nameChange";

export default function useEffect() {
  return (
    <>
      <div className="p-4 border border-yellow-900 [&:not(:first-child)]:mt-4">
        <h2>pointermoveに伴いbg-colorを変化</h2>
        <NameChange />
      </div>
      <div className="p-4 border border-yellow-900 [&:not(:first-child)]:mt-4">
        <h2>pointermoveに伴いbg-colorを変化</h2>
        <Counter />
      </div>

      <div className="p-4 border border-yellow-900 [&:not(:first-child)]:mt-4">
        <h2>pointermoveに伴いbg-colorを変化</h2>
        <BgChange />
      </div>
    </>
  );
}
