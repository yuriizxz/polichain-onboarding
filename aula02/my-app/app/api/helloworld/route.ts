import {NextRespons, NextResponse} from 'next/server'


export function GET() {


    return NextResponse.json({message: 'Hello World'})
}