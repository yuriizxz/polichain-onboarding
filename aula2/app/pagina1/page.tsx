import { url } from "inspector";
import Image from "next/image";

export default function Home() {
  return (
     <div style={{backgroundImage: 'url(/imgs/Nidalee_6.jpg)',
      position: 'fixed', 
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  zIndex: -1 
     }}>
      
        <p style={{ fontSize: 70,
          fontFamily:'MinhaFonte',
          letterSpacing: '0.3cm',
          color: "#C8AA6E",
          top: '10%',
          left: '10%',
          transform: 'translate(-50%,-50%)'  ,
          textAlign: 'left',
          position: 'absolute'    
        }}>Nidalee</p>
        <p style={{fontSize: 26,
        fontFamily: 'Fonte2',
          textAlign: 'left',
          top:"13%",
          left:"13%",
          position: 'absolute'
        }}> A Caçadora Bestial 
        </p>
        <div style= {{
          display: 'block',
          blockSize: '300px',
          width: '500px',
          top: "20%",
          left: "1.3%",
          position: 'absolute',
          backgroundColor: "rgb(51, 102, 0, 0.3)",
          borderRadius: '3px'
          
        }}>
        
        
        <p style= {{fontFamily:'Spiegel',
        fontSize: 20,
        fontWeight:'600',
        textAlign: 'center'
        }}>
          Criada na mais profunda das selvas, Nidalee é uma rastreadora especialista que pode se transformar em um puma à sua vontade. Nem animal nem mulher, ela defende com ferocidade seu território de todo e qualquer invasor, com armadilhas cuidadosamente colocadas e lanças arremessadas. Ela fere sua presa antes de pular nela em sua forma felina, e dizem os sortudos que sobrevivem que ela é uma mulher selvagem com instintos aguçados e garras ainda mais afiadas...
        </p>
     </div>
     </div>

  );
}
