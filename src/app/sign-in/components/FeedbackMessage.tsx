export default function FeedbackMessage({ message }: { message: string }) {
  return (
    <div className="w-full text-center h-6 py-6">
      <span className="font-medium text-red-500">{message}</span>
    </div>
  )
}
