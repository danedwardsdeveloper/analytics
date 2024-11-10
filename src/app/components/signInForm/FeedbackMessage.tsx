import { Message, MessageColours } from '@/app/components/AppProvider'
import clsx from 'clsx'

interface Props {
  message?: Message
  messageColour?: MessageColours
}

export default function FeedbackMessage({
  message,
  messageColour = 'gray',
}: Props) {
  const styles = {
    green: {
      text: 'text-green-600',
      bg: 'bg-green-50',
      border: 'border-green-200',
    },
    red: { text: 'text-red-500', bg: 'bg-red-50', border: 'border-red-200' },
    gray: {
      text: 'text-gray-500',
      bg: 'bg-gray-50',
      border: 'border-gray-200',
    },
  }

  const { text, bg, border } = styles[messageColour]

  return (
    <div
      className={clsx(
        'flex w-full justify-center items-center min-h-10 border rounded',
        message ? [text, bg, border] : 'opacity-0'
      )}
    >
      <span>{message}</span>
    </div>
  )
}
