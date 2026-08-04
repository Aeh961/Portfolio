import { FiMoon, FiSun } from 'react-icons/fi'
import { useTheme } from '../../hooks/useTheme'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-pressed={isDark}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="border-border hover:border-accent text-ink-muted hover:text-ink flex h-9 w-9 items-center justify-center rounded-full border transition-colors"
    >
      {isDark ? <FiSun aria-hidden="true" size={16} /> : <FiMoon aria-hidden="true" size={16} />}
    </button>
  )
}
