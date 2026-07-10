import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="flex flex-col">
      <span className="text-2xl font-bold text-blue-600">
        HomeOfficePH
      </span>

      <span className="text-sm text-gray-500">
        Helping Filipinos Build Better Workspaces
      </span>
    </Link>
  )
}