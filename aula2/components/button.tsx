'use client';

type ButtonProps = {
    texto: string;
}

export default function Button({texto}: ButtonProps) {
  return (
     <button 
        style= {{
              border: '1px solid #dbad44',
              borderRadius: '3px',
              fontFamily: 'MinhaFonte',
              fontSize: 34,
              color: "#dbad44",
        }}
        className= "px-5 py-2 bg-sky-950 rounded hover:bg-sky-900 transition" >
           
         {texto}
            
        </button>
      
  );
}
