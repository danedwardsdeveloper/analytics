'use client'
import { useEffect, useRef, ElementRef, useState } from 'react'
import MobileMenuLayout from './layout'
import { useApp } from '../../AppProvider'

export default function MobileMenu() {
  const { signedIn } = useApp()
  const headerRef = useRef<ElementRef<'div'>>(null)
  const lastScrollTop = useRef(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (!signedIn) return
    const mainContent = document.querySelector('[role="main"]') as HTMLElement
    if (!mainContent) {
      return
    }

    function updateHeaderStyles() {
      if (!headerRef.current) {
        return
      }

      const { height } = headerRef.current.getBoundingClientRect()
      const scrollTop = mainContent.scrollTop

      if (scrollTop > lastScrollTop.current && scrollTop > height) {
        document.documentElement.style.setProperty(
          '--mobile-header-transform',
          'translateY(-100%)'
        )
        setIsVisible(false)
      } else {
        document.documentElement.style.setProperty(
          '--mobile-header-transform',
          'translateY(0)'
        )
        setIsVisible(true)
      }

      lastScrollTop.current = scrollTop
    }

    const handleScroll = () => {
      updateHeaderStyles()
    }

    updateHeaderStyles()

    mainContent.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)

    return () => {
      mainContent.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [signedIn])

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-0 w-full transition-transform duration-500"
      style={{
        transform: 'var(--mobile-header-transform, translateY(0))',
      }}
      aria-hidden={!isVisible}
      role="banner"
      aria-label="Mobile navigation menu"
    >
      <MobileMenuLayout />
    </header>
  )
}
