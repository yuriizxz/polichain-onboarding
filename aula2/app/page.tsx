import Image from "next/image";
import Button from '@/components/button'

export default function Home() {
  return (
    <div style = {{display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '50px'
    }}>
    <div>
      <p style={{textAlign: 'center', fontFamily: 'MinhaFonte, sans-serif', fontWeight: 400, fontSize: 70,fontStyle: 'italic', border: 'double', borderRadius: '15px'}} className= "px-30 py-1 bg-sky-950 rounded">
          MAIN CHAMPIONS
      </p>  
    </div>
<div style = {{display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '50px'
    }}>
    

    <div style= {{display: 'flex', gap: '50px'}} >
       <div style ={{display: 'flex',
                  gap: '20px',
                  flexDirection: 'column',
                  alignItems: 'center'
    }}>
      <div style={{display: 'flex',
                   width: '300px',
                   height: '560px',
                   border: '10px double #000080',
      }}>
        <img 
          src = "/imgs/nidalee.jpg"
          alt = "nidalee"
          style = {{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'cover'
          }}
        />
        </div>
          <a href = "/pagina1">
      <Button texto={'Nidalee'}>
      </Button>
      </a>
         </div>

    <div style ={{display: 'flex',
                  gap: '20px',
                  flexDirection: 'column',
                  alignItems: 'center'
    }}>
      <div style={{display: 'flex',
                   width: '280px',
                   height: '560px',
                   border: '10px double #000080',
                   overflow: 'hidden'
      }}>
        <img 
          src = "/imgs/khazix.jpg"
          alt = "khazix"
          style = {{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'cover',
            objectPosition: '77% 50%'
          }}
        />
        
      </div>
          <a href = "/pagina2">
      <Button texto={"Kha'Zix"}>
      </Button>
      </a>
      </div>

    <div style ={{display: 'flex',
                  gap: '20px',
                  flexDirection: 'column',
                  alignItems: 'center'
    }}>
      <div style={{display: 'flex',
                   width: '280px',
                   height: '560px',
                   border: '10px double #000080',
                
      }}>
        <img 
          src = "/imgs/graves.jpg"
          alt = "graves"
          style = {{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'cover',
            objectPosition: '80%'
          }}
        />
        </div>
        <a href = "/pagina2">
      <Button texto={'Graves'}>
      </Button>
      </a>
      </div>

    </div>
    </div>

    </div>

  );
}
