import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

export async function GET() {
  try {
    const { data, error } = await supabaseAdmin
      .from('products')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error
    return NextResponse.json({ products: data || [] })
  } catch (err) {
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    if (body.action === 'add') {
      const { data, error } = await supabaseAdmin
        .from('products')
        .insert([{
          name: body.product.name,
          price: body.product.price,
          store: body.product.store,
          affiliate_url: body.product.affiliateUrl,
          image_url: body.product.imageUrl,
          article: body.product.article,
          category: body.product.category,
          emoji: body.product.emoji,
        }])
        .select()
        .single()

      if (error) throw error
      return NextResponse.json({ success: true, product: data })
    }

    if (body.action === 'update') {
      const { error } = await supabaseAdmin
        .from('products')
        .update({
          name: body.updates.name,
          price: body.updates.price,
          store: body.updates.store,
          affiliate_url: body.updates.affiliateUrl,
          image_url: body.updates.imageUrl,
          article: body.updates.article,
          category: body.updates.category,
          emoji: body.updates.emoji,
        })
        .eq('id', body.id)

      if (error) throw error
      return NextResponse.json({ success: true })
    }

    if (body.action === 'delete') {
      const { error } = await supabaseAdmin
        .from('products')
        .delete()
        .eq('id', body.id)

      if (error) throw error
      return NextResponse.json({ success: true })
    }

    return NextResponse.json({ error: 'Unknown action' }, { status: 400 })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Failed to update products' }, { status: 500 })
  }
}
