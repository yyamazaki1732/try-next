import ChildComp from "../../components/parts/childComp";
import Container from "../../components/parts/container";

export default function ParentComp() {
  return (
    <Container>
      <ChildComp />
    </Container>
  );
}
