import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/button";

export default function Home() {
  return (
    <div className="bg-[var(--background)] min-h-screen">
      <Button type="secondary">Olá</Button>
    </div>
  );
}
