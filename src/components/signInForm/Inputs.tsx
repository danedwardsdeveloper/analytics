'use client'

import clsx from 'clsx'
import { useState } from 'react'

import EyeIcon from './EyeIcon'

const focusStyles =
  'ring-offset-4 focus:outline-none focus:ring-2 focus:ring-blue-500'

interface InputProps {
  label: string
  id: string
  name: string
  type: string
  value: string
  dataTestID: string
  autoComplete: 'given-name' | 'email' | 'new-password' | 'current-password'
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
}

export function Input({
  label,
  id,
  name,
  type,
  value,
  dataTestID,
  autoComplete,
  onChange,
  placeholder,
}: InputProps) {
  return (
    <div className="flex items-center justify-between">
      <label htmlFor={id} className="w-1/3">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        required
        value={value}
        autoComplete={autoComplete}
        onChange={onChange}
        placeholder={placeholder}
        data-testid={dataTestID}
        className={clsx(
          'w-2/3 border border-gray-400 bg-gray-100 p-2 rounded-md',
          focusStyles,
        )}
      />
    </div>
  )
}

interface PasswordInputProps {
  label: string
  id: string
  name: string
  value: string
  dataTestID: string
  autoComplete: 'new-password' | 'current-password'
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
}

export function PasswordInput({
  label,
  id,
  name,
  value,
  dataTestID,
  autoComplete,
  onChange,
  placeholder,
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex items-center justify-between">
      <label htmlFor={id} className="w-1/3">
        {label}
      </label>
      <div className="relative w-2/3">
        <input
          type={showPassword ? 'text' : 'password'}
          id={id}
          name={name}
          required
          value={value}
          autoComplete={autoComplete}
          onChange={onChange}
          placeholder={placeholder}
          data-testid={dataTestID}
          className={clsx(
            'w-full border border-gray-400 bg-gray-100 p-2 rounded-md pr-10 font-mono tracking-wider ',
            focusStyles,
          )}
          spellCheck="false"
          autoCapitalize="off"
          autoCorrect="off"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800"
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          <EyeIcon slash={showPassword} />
        </button>
      </div>
    </div>
  )
}
