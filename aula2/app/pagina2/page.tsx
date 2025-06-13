import { url } from "inspector";
import Image from "next/image";

export default function Home() {
  return (
     <div style={{backgroundImage: 'url(/imgs/Khazix_4.webp)',
      position: 'fixed', // ou 'absolute'
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
        }}> Kha'Zix</p>
        <p style={{fontSize: 26,
        fontFamily: 'Fonte2',
          textAlign: 'left',
          top:"13%",
          left:"13%",
          position: 'absolute'
        }}> O ceifador do vazio  
        </p>
        <div style= {{
          display: 'block',
          blockSize: '300px',
          width: '500px',
          top: "20%",
          left: "1.3%",
          position: 'absolute',
          backgroundColor: "rgb(171, 58, 149, 0.3)",
          borderRadius: '3px'
          
        }}>
        
        
        <p style= {{fontFamily:'Spiegel',
        fontSize: 20,
        fontWeight:'600',
        textAlign: 'center'
        }}>
          O Vazio cresce e o Vazio se adapta, e nenhuma de suas outras criaturas incorpora isso tão bem quanto Kha'Zix. A evolução é o que impulsiona a essência desse horror mutável, nascido para sobreviver e destruir os mais fortes. Qualquer momento de dificuldades em fazê-lo só o faz criar modos novos e mais efetivos de neutralizar e matar sua presa. Inicialmente uma fera irracional, a inteligência de Kha'Zix se desenvolveu tanto quanto sua forma. Agora, a criatura planeja suas caças e até faz uso do horror visceral que causa em suas vítimas.
        </p>
     </div>
     </div>

  );
}
