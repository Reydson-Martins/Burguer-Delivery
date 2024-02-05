import Image from "next/image";
import logo from '@/assets/logo.svg'
import { MapPin, ShoppingCart } from "lucide-react";

export function Header(){
  return(
    <div className="bg-background border-b-2 border-zinc-200 ">
    <header className="container flex items-center justify-between  h-20  ">
      <Image src={logo} alt="" height={46}/>
      <div className="flex gap-3">
      <div className="flex items-center justify-center p-2 rounded bg-white">
        <MapPin className="text-title font-bold"/>
        <span>Endereço, MA</span>
      </div>
      <div className="flex items-center p-2 rounded bg-white">
        <ShoppingCart className=" text-title font-bold"/>
      </div>
      </div>
      
    </header>
  </div>
  )
 
}