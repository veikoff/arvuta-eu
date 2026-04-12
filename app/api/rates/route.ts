import { put } from '@vercel/blob'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const apiKey = req.headers.get('x-api-key')
  if (!apiKey || apiKey !== process.env.SCRAPER_API_KEY) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let banks: unknown
  try {
    banks = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  if (!Array.isArray(banks)) {
    return NextResponse.json({ error: 'Payload must be an array of banks' }, { status: 400 })
  }

  const payload = JSON.stringify({ updatedAt: new Date().toISOString(), banks })

  let blob: { url: string }
  try {
    blob = await put('hoiused/rates.json', payload, {
      access: 'public',
      contentType: 'application/json',
      addRandomSuffix: false,
      allowOverwrite: true,
    })
  } catch (err) {
    console.error('Blob PUT failed:', err)
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }

  return NextResponse.json({ ok: true, url: blob.url })
}
