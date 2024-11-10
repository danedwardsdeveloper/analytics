'use client'
import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

import { useApp } from '../../AppProvider'
import {
  baseStyles,
  colourStyles,
  mobileButtonStyles,
  sizeStyles,
} from '../styles'

export function MenuButton() {
  const { menuOpen, setMenuOpen } = useApp()
  const path = usePathname()
  const containerRef = useRef<HTMLDivElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (menuOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement
    }
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen && previousFocusRef.current) {
      previousFocusRef.current.focus()
    }
  }, [menuOpen])

  useEffect(() => {
    const handleClickOutside = (mouseEvent: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(mouseEvent.target as Node)
      ) {
        setMenuOpen(false)
      }
    }

    const handleEscapeKey = (escapeEvent: KeyboardEvent) => {
      if (escapeEvent.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    const handleTabKey = (keyboardEvent: KeyboardEvent) => {
      if (!menuOpen || !containerRef.current) return

      const focusableElements = containerRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      const firstFocusable = focusableElements[0] as HTMLElement
      const lastFocusable = focusableElements[
        focusableElements.length - 1
      ] as HTMLElement

      if (keyboardEvent.key === 'Tab') {
        if (keyboardEvent.shiftKey) {
          if (document.activeElement === firstFocusable) {
            keyboardEvent.preventDefault()
            lastFocusable.focus()
          }
        } else {
          if (document.activeElement === lastFocusable) {
            keyboardEvent.preventDefault()
            firstFocusable.focus()
          }
        }
      }
    }

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleEscapeKey)
      document.addEventListener('keydown', handleTabKey)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscapeKey)
      document.removeEventListener('keydown', handleTabKey)
    }
  }, [menuOpen, setMenuOpen])

  useEffect(() => {
    setMenuOpen(false)
  }, [path, setMenuOpen])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <button
      onClick={toggleMenu}
      className={clsx(
        baseStyles,
        mobileButtonStyles,
        sizeStyles['base'],
        colourStyles.text['base'],
        menuOpen ? colourStyles.active : colourStyles.inactive
      )}
    >{`Menu`}</button>
  )
}

export function HomeButton() {
  const currentPath = usePathname()
  const isActive = currentPath === `/`
  return (
    <Link
      href={`/`}
      className={clsx(
        baseStyles,
        mobileButtonStyles,
        sizeStyles['base'],
        colourStyles.text['base'],
        isActive ? colourStyles.active : colourStyles.inactive
      )}
    >
      {`Home`}
    </Link>
  )
}
