import { db } from "@/lib/db"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const res = await db.product.create({
        data: {
            name: "",
            description: "",
            image: "",
            price: 20,

        }
    })
    return NextResponse.json(res)
  } catch (error) {
    console.log(error)
    return NextResponse.json("something went wrong", {status: 303})
  }
}

export async function GET(){
    try {
        const res = await db.product.findMany({
           
        })
    } catch (error) {
        
    }
}