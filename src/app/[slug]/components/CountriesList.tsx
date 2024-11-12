import clsx from 'clsx'
import { FR, GB, US } from 'country-flag-icons/react/3x2'

const flags = {
  'United Kingdom': {
    code: 'GB',
    component: GB,
  },
  'United States': {
    code: 'US',
    component: US,
  },
  France: {
    code: 'FR',
    component: FR,
  },
} as const

function StyledFlag({ countryName }: { countryName: keyof typeof flags }) {
  const { component: FlagComponent } = flags[countryName]

  return (
    <div className="overflow-hidden rounded-sm w-12">
      <FlagComponent className="w-full h-full" title={countryName} />
    </div>
  )
}

export default function CountriesList() {
  return (
    <div className="flex flex-col gap-y-4 w-full">
      <div className={clsx('flex justify-start items-center gap-2 mt-4')}>
        <StyledFlag countryName="United States" />
        <div className="w-full">
          <span className="bg-indigo-100 p-1 rounded-md inline-block w-[80%]">
            80%
          </span>
        </div>
      </div>
      <div className="flex justify-start items-center gap-2">
        <StyledFlag countryName="United Kingdom" />
        <div className="w-full">
          <span className="bg-indigo-100 p-1 rounded-md inline-block w-[10%]">
            10%
          </span>
        </div>
      </div>
      <div className="flex justify-start items-center gap-2">
        <StyledFlag countryName="France" />
        <div className="w-full">
          <span className="bg-indigo-100 p-1 rounded-md inline-block w-[5%]">
            5%
          </span>
        </div>
      </div>
    </div>
  )
}
