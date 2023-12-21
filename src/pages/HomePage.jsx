import Button from "../components/atoms/Button";
import H1 from "../components/atoms/H1";
import H2 from "../components/atoms/H2";
import H3 from "../components/atoms/H3";
import H4 from "../components/atoms/H4";
import H5 from "../components/atoms/H5";
import P from "../components/atoms/P";

export default function HomePage() {
  return (
    <div>
      <H1>Hello World</H1>
      <H2>Hello World</H2>
      <H3>Hello World</H3>
      <H4>Hello World</H4>
      <H5>Hello World</H5>
      <P size="body1">Hello World</P>
      <P size="body2">Hello World</P>
      <P size="p1">Hello World</P>
      <P size="p2">Hello World</P>
      <Button>Hello World</Button>
      <Button variant="outline">Hello World</Button>
      <Button variant="logo">Hello World</Button>
    </div>
  );
}
