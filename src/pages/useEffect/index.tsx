import {
  NameChange,
  Counter,
  BgChange,
} from "@/components/pages/useEffect/index";
import CodeBox from "@/components/pages/common/codeBox";

export default function useEffect() {
  return (
    <>
      <CodeBox heading="pointermoveに伴いbg-colorを変化">
        <NameChange />
      </CodeBox>
      <CodeBox heading="pointermoveに伴いbg-colorを変化">
        <Counter />
      </CodeBox>
      <CodeBox heading="pointermoveに伴いbg-colorを変化">
        <BgChange />
      </CodeBox>
    </>
  );
}
