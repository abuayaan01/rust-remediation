type ChildProps = {
  name: string;
};

export function RenderChild({ name }: ChildProps) {
  console.log("Child Rendered");

  return <h1>{name}</h1>;
}
