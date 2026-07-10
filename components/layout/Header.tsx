import Logo from './Logo'
import Navigation from './Navigation'
import AdminButton from '../AdminButton'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo />

        <Navigation />

        <AdminButton />
      </div>
    </header>
  )
}