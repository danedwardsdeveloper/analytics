interface PageHeaderProps {
  title: string
  intro: string
}

export default function PageHeader({ title, intro }: PageHeaderProps) {
  return (
    <div>
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="mt-4">{intro}</p>
    </div>
  )
}
