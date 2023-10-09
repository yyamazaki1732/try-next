import {
  NameChange,
  Counter,
  BgChange,
} from "@/components/pages/useEffect/index";
import CodeBox from "@/components/pages/common/codeBox";

export default function useEffect() {
  return (
    <>
      <CodeBox heading="">
        <NameChange />
      </CodeBox>
      <CodeBox heading="">
        <Counter />
      </CodeBox>
      <CodeBox heading="pointermoveに伴いbg-colorを変化">
        <BgChange />
      </CodeBox>
    </>
  );
}
