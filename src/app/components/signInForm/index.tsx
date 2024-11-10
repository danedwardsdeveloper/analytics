'use client'
import { Input, PasswordInput } from './Inputs'
import { Button } from './SubmitButton'
import { useApp } from '../AppProvider'
import FeedbackMessage from './FeedbackMessage'

function handleSubmit() {
  return
}

export default function SignInForm() {
  const {
    signedIn,
    setSignedIn,
    message,
    setMessage,
    messageColour,
    setMessageColour,
  } = useApp()

  function handleToggle(event: React.MouseEvent) {
    event.preventDefault()
    setSignedIn(!signedIn)
    setMessageColour(signedIn ? 'green' : 'red')
    setMessage(signedIn ? 'Please sign in' : 'Already signed in')
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
          value={''}
          onChange={() => null}
        />
        <PasswordInput
          autoComplete="current-password"
          dataTestID="password-input"
          id="password"
          label="Password"
          name="password"
          value={''}
          onChange={() => null}
        />
        <FeedbackMessage message={message} messageColour={messageColour} />
        <Button
          dataTestID="sign-in-button"
          disabled={false}
          text={signedIn ? 'Sign Out' : 'Sign In'}
          type="submit"
          variant={'primary'}
          onClick={handleToggle}
        />
      </form>
    </div>
  )
}
