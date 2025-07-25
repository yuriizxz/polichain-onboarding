'use client'
import React, { useState, useEffect } from 'react'
import Image from "next/image";
import Button from '@/components/button'
import { useAccount, useWriteContract, useReadContract} from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { POLICHAIN_ADDRESS, PolichainABI } from '../lib/contracts'
import { parse } from 'path';


type Game = {
  id?: number
  championName: string
  role: string
  date: string
  result: boolean
  kills: number
  deaths: number
  assists: number
}



export default function GamesPage() {
  const {isConnected} = useAccount();
  const { 
    writeContract,
    isPending,
    isSuccess,
    error: writeError 
  } = useWriteContract()
  
  const [games, setGames] = useState<Game[]>([])
  const [formData, setFormData] = useState<Game>({
    championName: '',
    role: '',
    date: new Date().toISOString().split('T')[0],
    result: true,
    kills: 0,
    deaths: 0,
    assists: 0
  })
  const [editingId, setEditingId] = useState<number | null>(null)


  //...........................................................//
 

  //...........................................................//
  useEffect(() => {
    if ( isConnected){
    loadGames()
    }
  }, [isConnected])

  

  const loadGames = async () => {
    try {
      const response = await fetch('/api/games')
      const data = await response.json()
      setGames(data)
    }
    catch (error) {
      console.error('Erro ao carregar os Games', error)
    }
  }

  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const url = '/api/games'
    const method = editingId ? 'PUT' : 'POST'
    const body = editingId ? { id: editingId, ...formData } : formData
    const contractHook = editingId ? writeContract({
        address: POLICHAIN_ADDRESS,
        abi: PolichainABI,
        functionName: 'updateGame',
        args: [BigInt(editingId),formData.championName, formData.role, BigInt(formData.kills), BigInt(formData.deaths), BigInt(formData.assists), formData.result],
      }) : writeContract(
    {
      address: POLICHAIN_ADDRESS,
      abi: PolichainABI,
      functionName: 'createGame',
      args: [
        formData.championName, 
        formData.role, 
        BigInt(formData.kills), 
        BigInt(formData.deaths), 
        BigInt(formData.assists), 
        formData.result
      ],
    }
    )

    const response = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })

    if (response.ok) {
      loadGames()
    }
  }

    /*if (method == 'POST') {
    writeContract(
    {
      address: POLICHAIN_ADDRESS,
      abi: PolichainABI,
      functionName: 'createGame',
      args: [
        formData.championName, 
        formData.role, 
        BigInt(formData.kills), 
        BigInt(formData.deaths), 
        BigInt(formData.assists), 
        formData.result
      ],
    }
    );
 
}
    else{
      editingId
      writeContract({
        address: POLICHAIN_ADDRESS,
        abi: PolichainABI,
        functionName: 'updateGame',
        args: [BigInt(editingId),formData.championName, formData.role, BigInt(formData.kills), BigInt(formData.deaths), BigInt(formData.assists), formData.result],
      });
    }
   
  }*/
  
  
  const [numeroPartidas, setNumeroPartidas] = useState<number>(0)
  const [newNumeroPartidas, setNewNumeroPartidas] = useState<string>('');
  const {data: stats, isLoading, error, refetch} = useReadContract({
    address: POLICHAIN_ADDRESS,
    abi: PolichainABI,
    functionName: 'CalculaWinKda',
    args: [BigInt(numeroPartidas)],
    query: {
      enabled: BigInt(numeroPartidas) > 0,
    }
  })

  const [winrate, kda] = stats ? [BigInt(stats[0]), BigInt(stats[1])] : [0,0];

  const handleInput = async (e: React.ChangeEvent<HTMLInputElement>) =>{
    setNewNumeroPartidas(e.target.value);
  };

  const calculaEstat = () => {
      const parsedValue = parseInt(newNumeroPartidas);
      if(!isNaN(parsedValue) && parsedValue > 0){
        setNumeroPartidas(parsedValue);
        refetch();
      }
      else{
        alert("Por favor, escolha um valor valido");
      }
      };

      console.log('[DEBUG] numeroPartidas:', numeroPartidas);
  console.log('[DEBUG] newNumeroPartidas:', newNumeroPartidas);
  console.log('[DEBUG] stats (data):', stats);
  console.log('[DEBUG] isLoading:', isLoading);
  console.log('[DEBUG] error:', error);


  const handleEdit = (Game: Game) => {
    setFormData({
      ...Game,
      date: Game.date.split('T')[0]
    })
    setEditingId(Game.id!)
  }

  const handleDelete = async (id: number) => {
    if (confirm('Confirmar exclusão?')) {
      const response = await fetch('/api/games/', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
      })
      if (response.ok) {
        loadGames()
      }
    }
  }

  if (!isConnected) {
    return (
      
        <main className= "min-h-screen flex flex-col items-center justify-center">
          <h1 className='text-3xl font-bold mn-8'>
              Conecte sua Carteira
          </h1>
          <p className='text-gray-608 mb-8'>Para acessar a pagina, conecte sua carteira Web3</p>
          <ConnectButton />
          </main>
    
      );
  }



  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '50px'
    }}>
      <div>
        <p style={{ textAlign: 'center', fontFamily: 'MinhaFonte, sans-serif', fontWeight: 400, fontSize: 70, fontStyle: 'italic', border: 'double', borderRadius: '15px' }} className="px-30 py-1 bg-sky-950 rounded">
          MAIN CHAMPIONS
        </p>
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '50px'
      }}>


        <div
        style={{ display: 'flex', gap: '50px' }} >
          <div style={{
            display: 'flex',
            gap: '20px',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <div style={{
              display: 'flex',
              width: '300px',
              height: '560px',
              border: '10px double #000080',
            }}>
              <img
                src="/imgs/nidalee.jpg"
                alt="nidalee"
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            <a href="/pagina1">
              <Button texto={'Nidalee'}>
              </Button>
            </a>
          </div>

          <div style={{
            display: 'flex',
            gap: '20px',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <div style={{
              display: 'flex',
              width: '280px',
              height: '560px',
              border: '10px double #000080',
              overflow: 'hidden'
            }}>
              <img
                src="/imgs/khazix.jpg"
                alt="khazix"
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'cover',
                  objectPosition: '77% 50%'
                }}
              />

            </div>
            <a href="/pagina2">
              <Button texto={"Kha'Zix"}>
              </Button>
            </a>
          </div>

          <div style={{
            display: 'flex',
            gap: '20px',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <div style={{
              display: 'flex',
              width: '280px',
              height: '560px',
              border: '10px double #000080',

            }}>
              <img
                src="/imgs/graves.jpg"
                alt="graves"
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'cover',
                  objectPosition: '80%'
                }}
              />
            </div>
            <a href="/pagina3">
              <Button texto={'Graves'}>
              </Button>
            </a>
          </div>

        </div>
      </div>
      <div style={{ backgroundColor: 'rgb(200, 170, 110, 0.5)', border: 'solid', borderRadius: '3px', borderColor: '#000000', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '800px' }}>
        <h1 style={{ fontFamily: 'MinhaFonte', fontSize: 40, color: '#000000' }}> Gerenciamento de Partidas </h1>
        <form onSubmit={handleSubmit}>
          <h2 style={{ textAlign: 'center' }}>{editingId ? 'Editar Partida' : 'Adicionar Partida'}</h2>

          <div style={{
            grid: 'auto', display: 'flex', flexDirection: 'column', gap: '20px'
          }}>
            <div><label style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>Campeão</label>
              <input
                type="text"
                value={formData.championName}
                onChange={(e) => setFormData({ ...formData, championName: e.target.value })}
                style={{ border: 'solid', borderRadius: '3px', display: 'flex', alignItems: 'center', width: "400px" }}
                required
              /></div>
            <div style={{ display: 'flex', textAlign: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1px' }}>
              <label style={{ display: 'flex', textAlign: 'center', justifyContent: 'center' }} >Posição</label>
              <select
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                style={{ color: '#000000', border: 'solid #ffffff ' }}
                required
              >
                <option value="">Selecione...</option>
                <option value="TOP">Top</option>
                <option value="JUNGLE">Jungle</option>
                <option value="MID">Mid</option>
                <option value="ADC">ADC</option>
                <option value="SUPPORT">Support</option>
              </select>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'left', gap: '20px' }}>
              <label style={{ textAlign: 'left', fontSize: 20 }}>Data:</label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                style={{ border: 'solid 3px', borderRadius: '2px', color: '#000000', borderColor: "#ffffff" }}
              />

            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'left', gap: '4px' }}>
              <label style={{ fontSize: 20 }}>Resultado</label>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  type = "button"
                  style={{ backgroundColor: 'rgb(0, 128, 43, 1)', border: 'solid #006622 2px', borderRadius: '30px', width: '100px', justifyContent: 'center', fontFamily: 'Fonte2', letterSpacing: '0.05cm', fontSize: 22, fontWeight: 600, cursor: 'pointer' }}
                  onClick={() => setFormData({ ...formData, result: true })}> Vitória </button>
                <button
                  type = "button"
                  style={{ backgroundColor: 'rgb(255, 0, 0,1)', border: 'solid #660000 2px', borderRadius: '30px', width: '100px', justifyContent: 'center', fontFamily: 'Fonte2', letterSpacing: '0.05cm', cursor: 'pointer', fontSize: 22, fontWeight: 600 }}
                  onClick={() => setFormData({ ...formData, result: false })}> Derrota</button>
              </div>

            </div>

            <div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'left', gap: '4px' }}>

                <label style={{ fontSize: 20 }}>Estatísticas de Combate (KDA)</label>


                <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>


                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                    <label style={{ fontSize: 18 }}>Abates (K)</label>
                    <input
                      type="number"
                      min="0"
                      value={formData.kills}
                      onChange={(e) => setFormData({ ...formData, kills: parseInt(e.target.value) || 0 })}
                      style={{
                        width: '80px',
                        height: '40px',
                        fontSize: 20,
                        textAlign: 'center',
                        border: 'solid 2px #333',
                        borderRadius: '10px',
                        fontWeight: 600
                      }}
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                    <label style={{ fontSize: 18 }}>Mortes (D)</label>
                    <input
                      type="number"
                      min="0"
                      value={formData.deaths}
                      onChange={(e) => setFormData({ ...formData, deaths: parseInt(e.target.value) || 0 })}
                      style={{
                        width: '80px',
                        height: '40px',
                        fontSize: 20,
                        textAlign: 'center',
                        border: 'solid 2px #333',
                        borderRadius: '10px',
                        fontWeight: 600
                      }}
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                    <label style={{ fontSize: 18 }}>Assistências (A)</label>
                    <input
                      type="number"
                      min="0"
                      value={formData.assists}
                      onChange={(e) => setFormData({ ...formData, assists: parseInt(e.target.value) || 0 })}
                      style={{
                        width: '80px',
                        height: '40px',
                        fontSize: 20,
                        textAlign: 'center',
                        border: 'solid 2px #333',
                        borderRadius: '10px',
                        fontWeight: 600
                      }}
                    />
                  </div>
                </div>


              </div>

            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <button
                type="submit"
                style={{ width: '120px', height: '45px', cursor: 'pointer', borderRadius: '10px', fontSize: 22 }}
                className='bg-sk bg-sky-800 hover:bg-sky-950'
              >
                {editingId ? 'Atualizar' : 'Adicionar'}
              </button>

            </div>

            </div>
        </form>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                    <label style={{ fontSize: 18 }}>Calculadora de WinRate e KDA</label>
                    <input
                    type="number"
                    min="0"
                    value={newNumeroPartidas}
                    onChange={handleInput}
                    placeholder="Digite o numero de partidas que deseja abranger"
                    style={{
                        width: '80px',
                        height: '40px',
                        fontSize: 20,
                        textAlign: 'center',
                        border: 'solid 2px #333',
                        borderRadius: '10px',
                        fontWeight: 600
                    }}
                  />
            </div>
            <button
                      type = "button"
                      onClick={calculaEstat}
                      style={{ width: '120px', height: '45px', cursor: 'pointer', borderRadius: '10px', fontSize: 22 }}
                      className='bg-sk bg-sky-800 hover:bg-sky-950'
                    >
                      Calcular
                    </button>
          {isLoading && <p>Carregando...</p>}
      {error && <p>Erro ao consultar o contrato</p>}

      {!isLoading && !error && numeroPartidas > 0 && (
        <div>
          <p>Winrate: {winrate}%</p>
          <p>KDA: {kda}</p>
        </div>
      )}
        <div>
          <table style={{ tableLayout: 'auto' }}>
            <thead>
              <tr style={{ backgroundColor: 'rgb(50,50,100,0.5)' }}>
                <th>Campeão</th>
                <th>Role</th>
                <th>Data</th>
                <th>Resultado da Partida</th>
                <th>K/D/A</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {games.map((game) => (
                <tr key={game.id} style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: '8px 16px', border: '1px solid #ddd' }}>{game.championName}</td>
                  <td style={{ padding: '8px 16px', border: '1px solid #ddd' }}>{game.role}</td>
                  <td style={{ padding: '8px 16px', border: '1px solid #ddd' }}>
                    {new Date(game.date).toLocaleDateString('pt-BR')}
                  </td>
                  <td style={{ padding: '8px 16px', border: '1px solid #ddd' }}>
                    <span style={{
                      fontWeight: 600,
                      color: game.result ? '#00802b' : '#ff0000'
                    }}>
                      {game.result ? 'Vitória' : 'Derrota'}
                    </span>
                  </td>
                  <td style={{ padding: '8px 16px', border: '1px solid #ddd' }}>
                    {game.kills}/{game.deaths}/{game.assists}
                  </td>
                  <td style={{ padding: '8px 16px', border: '1px solid #ddd' }}>
                    <button
                      onClick={() => handleEdit(game)}
                      style={{
                        marginRight: '8px',
                        color: '#0066cc',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '14px',
                        fontWeight: 600,

                      }}
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDelete(game.id!)}
                      style={{
                        color: '#cc0000',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '14px',
                        fontWeight: 600
                      }}
                    >
                      Remover
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>

  );

}

