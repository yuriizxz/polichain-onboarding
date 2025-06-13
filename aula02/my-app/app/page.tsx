'use client';
import Image from "next/image";
import Link from "next/link";
import Button from  "@/components/Button";

import {useState, useEffect} from 'react'


export default function Home() {
 
  const [message, setMessage] = useState("")

  useEffect(()=> {
    async function loadHelloWorld(){
      try {
        const response = await fetch('/api/hellloworld')
        const json = await response.json()

        setMessage(json.message)
      } catch(err){
        console.error(err)
      }
    }
    loadHelloWorld()
  }, [])


  return (
    <div>
      <p>Teste</p>
      <Link href = "pagina2" > Ir para a pagina 2</Link>     
      <Button texto ={"pagina1"} aoClicar = {() => alert("pagina1")}></Button>
     </div>
   
  );
}
