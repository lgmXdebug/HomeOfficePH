import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { currentPassword, newPassword } = await req.json()
  const correct = process.env.ADMIN_PASSWORD

  if (!correct) {
    return NextResponse.json({ error: 'Admin password not configured' }, { status: 500 })
  }

  if (currentPassword !== correct) {
    return NextResponse.json({ ok: false, error: 'Current password is incorrect' }, { status: 401 })
  }

  if (!newPassword || newPassword.length < 6) {
    return NextResponse.json({ ok: false, error: 'New password must be at least 6 characters' }, { status: 400 })
  }

  // Update the password in Vercel via Vercel API
  const vercelToken = process.env.VERCEL_TOKEN
  const projectId = process.env.VERCEL_PROJECT_ID
  const teamId = process.env.VERCEL_TEAM_ID

  if (!vercelToken || !projectId) {
    return NextResponse.json({ 
      ok: false, 
      error: 'Vercel API not configured. Please update ADMIN_PASSWORD manually in Vercel dashboard.' 
    }, { status: 500 })
  }

  try {
    const url = teamId
      ? `https://api.vercel.com/v9/projects/${projectId}/env?teamId=${teamId}`
      : `https://api.vercel.com/v9/projects/${projectId}/env`

    // Get existing env vars to find the ADMIN_PASSWORD env var ID
    const listRes = await fetch(url, {
      headers: { Authorization: `Bearer ${vercelToken}` }
    })
    const listData = await listRes.json()
    const envVar = listData.envs?.find((e: { key: string }) => e.key === 'ADMIN_PASSWORD')

    if (!envVar) {
      return NextResponse.json({ ok: false, error: 'ADMIN_PASSWORD env var not found in Vercel' }, { status: 404 })
    }

    // Update the env var
    const updateUrl = teamId
      ? `https://api.vercel.com/v9/projects/${projectId}/env/${envVar.id}?teamId=${teamId}`
      : `https://api.vercel.com/v9/projects/${projectId}/env/${envVar.id}`

    const updateRes = await fetch(updateUrl, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${vercelToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ value: newPassword })
    })

    if (!updateRes.ok) {
      throw new Error('Failed to update Vercel env var')
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ ok: false, error: 'Failed to update password in Vercel' }, { status: 500 })
  }
}
