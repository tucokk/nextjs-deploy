import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Contador/>
    </div>
  );
}

function Contador() {

  const [contador, setContador] = useState<number>(0);
  const adicionarContador = () => { 
    setContador(contador + 1);
  }
  return (
    <div>
      <div>
        <div>{contador}</div>
        <button onClick={adicionarContador}>Adicionar</button>
      </div>
    </div>
  )
}