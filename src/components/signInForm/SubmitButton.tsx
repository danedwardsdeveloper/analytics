'use client'

import clsx from 'clsx'

const focusStyles = 'focus:outline-2 outline-offset-4'

const baseStyles = clsx(
  'w-full p-2',
  'rounded',
  'font-semibold',
  'transition-colors duration-200',
)

const variantMap = {
  buy: clsx(
    'bg-yellow-400 enabled:hover:bg-yellow-500',
    'text-black',
    'disabled:bg-gray-300 disabled:cursor-not-allowed',
  ),
  primary: clsx(
    'bg-blue-500 enabled:hover:bg-blue-600',
    'text-white',
    'disabled:bg-gray-300 disabled:cursor-not-allowed',
  ),
  secondary: clsx(
    'bg-gray-200',
    'border border-gray-300',
    'enabled:hover:bg-gray-300',
    'enabled:active:bg-gray-400',
    'text-gray-800 enabled:hover:text-gray-900',
    'disabled:bg-gray-300 disabled:cursor-not-allowed',
  ),
  delete: clsx(
    'bg-red-400',
    'enabled:hover:bg-red-500',
    'enabled:active:bg-red-600',
    'text-black',
    'disabled:bg-gray-300 disabled:cursor-not-allowed',
  ),
}

type Variants = keyof typeof variantMap

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  type?: 'button' | 'submit'
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  variant?: Variants
  dataTestID?: string
  disabled?: boolean
  ariaLabel?: string
  classes?: string
}

export function Button({
  text,
  type = 'button',
  variant = 'primary',
  dataTestID,
  onClick,
  disabled,
  ariaLabel,
  classes,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      data-testid={dataTestID}
      className={clsx(baseStyles, focusStyles, variantMap[variant], classes)}
    >
      {text}
    </button>
  )
}
