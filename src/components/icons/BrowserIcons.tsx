import Image from 'next/image'
import { ReactNode } from 'react'

import chromeDesktopPNG from './images/chrome-icon.png'
import edgePNG from './images/edge-icon.png'
import firefoxPNG from './images/firefox-logo.png'
import safariPNG from './images/safari-icon.png'

function IconWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="relative w-10 shrink-0 border border-zinc-300 h-full flex items-center justify-center overflow-hidden bg-zinc-200 rounded">
      {children}
    </div>
  )
}

function MobileBadge() {
  return (
    <div className="absolute bottom-0.5 left-0.5 flex items-center justify-center h-4 w-4 bg-blue-500 rounded-full border border-white">
      <span className="text-white text-xs font-semibold">M</span>
    </div>
  )
}

export function ChromeDesktopIcon() {
  return (
    <IconWrapper>
      <Image
        src={chromeDesktopPNG}
        alt="Chrome icon"
        className="object-cover scale-110"
      />
    </IconWrapper>
  )
}

export function ChromeMobileIcon() {
  return (
    <IconWrapper>
      <Image
        src={chromeDesktopPNG}
        alt="Chrome icon"
        className="object-cover scale-110"
      />
      <MobileBadge />
    </IconWrapper>
  )
}

export function FirefoxIcon() {
  return (
    <IconWrapper>
      <Image
        src={firefoxPNG}
        alt="Firefox icon"
        className="object-cover scale-110"
      />
    </IconWrapper>
  )
}

export function EdgeIcon() {
  return (
    <IconWrapper>
      <Image
        src={edgePNG}
        alt="Microsoft Edge icon"
        className="object-cover scale-110"
      />
    </IconWrapper>
  )
}

export function SafariIcon() {
  return (
    <IconWrapper>
      <Image
        src={safariPNG}
        alt="Safari icon"
        className="object-cover scale-110"
      />
    </IconWrapper>
  )
}
