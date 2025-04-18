import Button from "@/components/button";
import Input from "@/components/input";

export default function Home() {
  return (
    <div>
      <Button type="secondary">Olá</Button>
      <Input placeholder="test" label="test" type="primary" afterText="This is an after text"/>
    </div>
  );
}
