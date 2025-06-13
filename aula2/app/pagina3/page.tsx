import { url } from "inspector";
import Image from "next/image";

export default function Home() {
  return (
     <div style={{backgroundImage: 'url(/imgs/Graves_3.jpg)',
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
        }}> Graves </p>
        <p style={{fontSize: 26,
        fontFamily: 'Fonte2',
          textAlign: 'left',
          top:"13%",
          left:"13%",
          position: 'absolute'
        }}> O foragido  
        </p>
        <div style= {{
          display: 'block',
          blockSize: '300px',
          width: '500px',
          top: "20%",
          left: "1.3%",
          position: 'absolute',
          backgroundColor: "rgb(102, 0, 0, 0.3)",
          borderRadius: '3px'
          
        }}>
        
        
        <p style= {{fontFamily:'Spiegel',
        fontSize: 20,
        fontWeight:'600',
        textAlign: 'center'
        }}>
          Malcolm Graves, mercenário, apostador e bandido de renome, é um homem procurado em cada uma das cidades e impérios que visitou. Apesar do seu temperamento explosivo, ele é dono de uma noção rigorosa de honra entre criminosos, normalmente aplicada com o fogo da sua espingarda, Destino. Nos últimos anos, ele reconciliou uma parceria problemática com Twisted Fate e, juntos, eles prosperaram mais uma vez no tumulto do submundo criminoso de Águas de Sentina.
        </p>
     </div>
     </div>

  );
}
