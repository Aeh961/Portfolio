import { useEffect, useRef, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { site } from '../../data/site'
import { useActiveSection } from '../../hooks/useActiveSection'
import { Container } from '../common/Container'
import { ThemeToggle } from './ThemeToggle'

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const activeId = useActiveSection(navLinks.map((link) => link.id))
  const toggleButtonRef = useRef<HTMLButtonElement>(null)
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (isOpen) {
      firstMobileLinkRef.current?.focus()
    }
  }, [isOpen])

  function closeMenu() {
    setIsOpen(false)
    toggleButtonRef.current?.focus()
  }

  return (
    <header className="border-border bg-paper/90 sticky top-0 z-40 border-b backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="font-display text-ink text-base font-semibold tracking-tight">
          {site.name}
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={activeId === link.id ? 'true' : undefined}
                  className={`text-sm font-medium transition-colors ${
                    activeId === link.id ? 'text-accent' : 'text-ink-muted hover:text-ink'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            ref={toggleButtonRef}
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            onClick={() => {
              setIsOpen((open) => !open)
            }}
            className="border-border text-ink flex h-9 w-9 items-center justify-center rounded-full border"
          >
            {isOpen ? (
              <FiX aria-hidden="true" size={18} />
            ) : (
              <FiMenu aria-hidden="true" size={18} />
            )}
          </button>
        </div>
      </Container>

      {isOpen && (
        <nav id="mobile-nav" aria-label="Primary" className="border-border border-t md:hidden">
          <Container>
            <ul className="flex flex-col gap-1 py-3">
              {navLinks.map((link, index) => (
                <li key={link.id}>
                  <a
                    ref={index === 0 ? firstMobileLinkRef : undefined}
                    href={`#${link.id}`}
                    onClick={closeMenu}
                    aria-current={activeId === link.id ? 'true' : undefined}
                    className={`block rounded-md px-2 py-2.5 text-sm font-medium ${
                      activeId === link.id ? 'text-accent' : 'text-ink-muted hover:text-ink'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </Container>
        </nav>
      )}
    </header>
  )
}
