interface Props {
  titleOne: string
  valueOne: number
  titleTwo: string
  valueTwo: number
}

export default function DataCards({
  titleOne,
  valueOne,
  titleTwo,
  valueTwo,
}: Props) {
  return (
    <div className="flex space-x-7">
      <div className="w-40 bg-indigo-50 border border-indigo-100 rounded-lg p-4">
        <h3 className="font-medium text-lg mb-2">{titleOne}</h3>
        <span className="text-xl">{valueOne}</span>
      </div>
      <div className="w-40 bg-indigo-50 border border-indigo-100 rounded-lg p-4">
        <h3 className="font-medium text-lg mb-2">{titleTwo}</h3>
        <span className="text-xl">{valueTwo}</span>
      </div>
    </div>
  )
}
