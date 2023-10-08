import { CodeBox } from "@/components/pages/common/index";
import { WindowSize } from "@/components/pages/useState/index";

export default function Page() {
  return (
    <>
      <CodeBox heading="pointermoveに伴いbg-colorを変化">
        <WindowSize />
      </CodeBox>
    </>
  );
}
