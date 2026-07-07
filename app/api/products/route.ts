import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const dataPath = path.join(process.cwd(), 'data', 'products.json')

function readProducts() {
  const raw = fs.readFileSync(dataPath, 'utf8')
  return JSON.parse(raw)
}

function writeProducts(data: object) {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf8')
}

export async function GET() {
  try {
    const data = readProducts()
    return NextResponse.json(data)
  } catch {
    return NextResponse.json({ error: 'Failed to read products' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = readProducts()

    if (body.action === 'add') {
      const id = body.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-').trim()
      const newProduct = { id, ...body.product }
      data.products.push(newProduct)
      writeProducts(data)
      return NextResponse.json({ success: true, product: newProduct })
    }

    if (body.action === 'update') {
      data.products = data.products.map((p: { id: string }) =>
        p.id === body.id ? { ...p, ...body.updates } : p
      )
      writeProducts(data)
      return NextResponse.json({ success: true })
    }

    if (body.action === 'delete') {
      data.products = data.products.filter((p: { id: string }) => p.id !== body.id)
      writeProducts(data)
      return NextResponse.json({ success: true })
    }

    return NextResponse.json({ error: 'Unknown action' }, { status: 400 })
  } catch {
    return NextResponse.json({ error: 'Failed to update products' }, { status: 500 })
  }
}
