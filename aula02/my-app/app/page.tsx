
import Image from "next/image";
import Link from "next/link";
import Button from  "@/components/Button";


export default function Home() {
 
 const variavel1 : number = 5;
 
  return (
    <div>
      <p>Teste</p>
      <Link href = "pagina2" > Ir para a pagina 2</Link>     
      <Button texto ={"pagina1"} aoClicar = {() => alert("pagina1")}></Button>
     </div>
   
  );
}
