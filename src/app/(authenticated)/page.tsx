import Image from "next/image";
import teste from "@/assets/burguer.png"
export default function Home() {
  return (
    <div className="bg-background flex-1 ">
    <div className="flex min-h-screen container">
      <div className="flex flex-col">
          <span className="text-white
          ">O Melhor</span>
          <span className="text-title">Burguer</span>
          <p className="text-white">Hambúguer perfeito para qualquer hora do dia</p>
      </div>
      <div>
        <Image src={teste} alt=""/>
      </div>
    </div>
    </div>
  );
}
