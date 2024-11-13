'use client'

import { useState } from 'react'

import { apiRoutes } from '@/library/apiRoutes'

import { useApp } from '../AppProvider'
import FeedbackMessage from './FeedbackMessage'
import { Input, PasswordInput } from './Inputs'
import { Button } from './SubmitButton'

export default function SignInForm() {
  const [email, setEmail] = useState('danedwardscreative@gmail.com')
  const [password, setPassword] = useState(
    process.env.NEXT_PUBLIC_PASSWORD || '',
  )

  const {
    setIsLoading,
    setSignedIn,
    message,
    setMessage,
    messageColour,
    setMessageColour,
  } = useApp()

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    setMessage('')

    try {
      const response = await fetch(apiRoutes.signIn, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setSignedIn(true)
        setMessage('Successfully signed in!')
        setMessageColour('green')
      } else {
        setSignedIn(false)
        setMessage(data.error || 'Sign in failed')
        setMessageColour('red')
        console.log('Sign in failed:', data)
      }
    } catch {
      setSignedIn(false)
      setMessage('An error occurred while signing in')
      setMessageColour('red')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="h-full w-full flex items-center justify-center">
      <form className="max-w-md w-full space-y-4" onSubmit={handleSubmit}>
        <Input
          autoComplete="email"
          dataTestID="email-input"
          id="email"
          label="Email"
          name="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <PasswordInput
          autoComplete="current-password"
          dataTestID="password-input"
          id="password"
          label="Password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <FeedbackMessage message={message} messageColour={messageColour} />
        <Button
          dataTestID="sign-in-button"
          disabled={!email || !password}
          text="Sign In"
          type="submit"
          variant={'primary'}
        />
      </form>
    </div>
  )
}
