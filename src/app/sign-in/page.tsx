'use client'
import { Input, PasswordInput } from './components/Form'
import { Button } from './components/form/SubmitButton'
import { useApp } from '../components/AppProvider'
import FeedbackMessage from './components/FeedbackMessage'

function handleSubmit() {
  return
}

export default function SignInPage() {
  const { updateAppState, signedIn } = useApp()

  function handleToggle(event: React.MouseEvent) {
    event.preventDefault()
    updateAppState({
      signedIn: !signedIn,
      message: !signedIn ? null : 'Please sign in',
    })
  }

  return (
    <div className="h-full w-full flex items-center justify-center overflow-hidden">
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
        <FeedbackMessage message="Incorrect credentials" />
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
