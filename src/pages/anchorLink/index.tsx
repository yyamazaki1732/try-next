import { useEffect } from "react";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
// import Block from "@/components/pages/anchorLink/block";
import Block from "@/components/pages/ anchorLink/block";
const blockArray = [
  { id: "corp", heading: "法人設立" },
  { id: "human", heading: "人事" },
  { id: "calc", heading: "会計" },
  { id: "genel", heading: "法務" },
];
export default function AnchorLink() {
  useEffect(() => {
    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div>
      <h1 className="text-30">AnchorLink</h1>
      <ul className="flex">
        {blockArray.map((block) => (
          <li className="border border-gray-800 [&:not(:first-child)]:border-l-0">
            <Link
              activeClass="active"
              to={block.id}
              spy={true}
              smooth={true}
              offset={100}
              duration={500}
              className="p-2 cursor-pointer"
              key={block.id}
            >
              {block.heading}
            </Link>
          </li>
        ))}
      </ul>

      {blockArray.map((block) => (
        <Block key={block.id} id={block.id} heading={block.heading} />
      ))}

      {/* Anchors to trigger scroll actions */}
      <a onClick={scrollToTop}>To the top!</a>
    </div>
  );
}
