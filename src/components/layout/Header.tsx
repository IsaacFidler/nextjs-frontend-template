import Link from 'next/link'
import { APP_CONFIG, ROUTES } from '@/lib/constants'

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href={ROUTES.home} className="text-xl font-bold">
            {APP_CONFIG.name}
          </Link>
          
          <ul className="flex items-center space-x-6">
            <li>
              <Link 
                href={ROUTES.home}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href={ROUTES.about}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href={ROUTES.contact}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
