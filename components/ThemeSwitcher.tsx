'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon, Palette } from 'lucide-react'
import { HexColorPicker } from 'react-colorful'

const themes = [
  { name: 'light', icon: Sun },
  { name: 'dark', icon: Moon },
  { name: 'cyberpunk', icon: Palette },
  { name: 'forest', icon: Palette },
]

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false)
  const [primaryColor, setPrimaryColor] = useState('#3b82f6')

  useEffect(() => {
    document.documentElement.style.setProperty('--primary-color', primaryColor)
  }, [primaryColor])

  const toggleThemeMenu = () => setIsOpen(!isOpen)
  const toggleColorPicker = () => setIsColorPickerOpen(!isColorPickerOpen)

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={toggleThemeMenu}
        className="p-2 rounded-full bg-primary text-primary-foreground"
        aria-label="Change theme"
      >
        <Palette size={24} />
      </button>
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-background border border-border rounded-md shadow-lg">
          {themes.map((t) => (
            <button
              key={t.name}
              onClick={() => handleThemeChange(t.name)}
              className={`flex items-center w-full p-2 ${
                theme === t.name ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'
              }`}
            >
              <t.icon size={20} className="mr-2" />
              {t.name}
            </button>
          ))}
          <button
            onClick={toggleColorPicker}
            className="flex items-center w-full p-2 hover:bg-secondary"
          >
            <Palette size={20} className="mr-2" />
            Customize Colors
          </button>
          {isColorPickerOpen && (
            <div className="p-2">
              <HexColorPicker color={primaryColor} onChange={setPrimaryColor} />
            </div>
          )}
        </div>
      )}
    </div>
  )
}

