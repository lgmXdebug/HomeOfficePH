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

  const vercelToken = process.env.VERCEL_TOKEN
  const projectId = process.env.VERCEL_PROJECT_ID
  const teamId = process.env.VERCEL_TEAM_ID

  if (!vercelToken || !projectId) {
    return NextResponse.json({ 
      ok: false, 
      error: 'Vercel API not configured.' 
    }, { status: 500 })
  }

  try {
    const baseUrl = `https://api.vercel.com/v9/projects/${projectId}`
    const teamQuery = teamId ? `?teamId=${teamId}` : ''

    // Step 1: Get env var ID
    const listRes = await fetch(`${baseUrl}/env${teamQuery}`, {
      headers: { Authorization: `Bearer ${vercelToken}` }
    })
    const listData = await listRes.json()
    const envVar = listData.envs?.find((e: { key: string }) => e.key === 'ADMIN_PASSWORD')

    if (!envVar) {
      return NextResponse.json({ ok: false, error: 'ADMIN_PASSWORD not found in Vercel' }, { status: 404 })
    }

    // Step 2: Update the env var
    const updateRes = await fetch(`${baseUrl}/env/${envVar.id}${teamQuery}`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${vercelToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ value: newPassword })
    })

    if (!updateRes.ok) {
      throw new Error('Failed to update env var')
    }

    // Step 3: Auto-trigger redeploy
    const deployRes = await fetch(
      `https://api.vercel.com/v13/deployments${teamQuery}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${vercelToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: projectId,
          gitSource: {
            type: 'github',
            repoId: process.env.VERCEL_GIT_REPO_ID,
            ref: 'main'
          },
          target: 'production'
        })
      }
    )

    const deployData = await deployRes.json()
    console.log('Redeploy triggered:', deployData?.id || 'unknown')

    return NextResponse.json({ ok: true, redeploying: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ ok: false, error: 'Failed to update password' }, { status: 500 })
  }
}
