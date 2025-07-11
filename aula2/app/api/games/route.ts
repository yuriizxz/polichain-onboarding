import { prisma } from '@/lib/prisma'
import { PrismaClient } from '@prisma/client'
import { getImageSize } from 'next/dist/server/image-optimizer'
import { NextResponse } from 'next/server'

export async function GET() {
    const games = await prisma.game.findMany({ orderBy: { createdAt: 'desc' } })
    return NextResponse.json(games)
}

export async function POST(request: Request) {
    const data = await request.json()

    const newGame = await prisma.game.create({
        data: {
            championName: data.championName,
            role: data.role, 
            kills: data.kills,   
            deaths: data.deaths, 
            assists: data.assists,  
            result: data.result,  
            date: new Date(data.date)
        }
    })

    return NextResponse.json(newGame, {status: 201})
}

export async function PUT(request: Request){
    const { id, ...data} = await request.json()

    if ( data.date ){
    data.date = new Date(data.date).toISOString();
  }
    const gameAtt = await prisma.game.update({where: {id: Number(id)}, data: {...data}})
    return NextResponse.json(gameAtt)
}


export async function DELETE(request: Request){
    const {id} = await request.json()

    await prisma.game.delete({where: {id}})
    return NextResponse.json({ok: true})
}
