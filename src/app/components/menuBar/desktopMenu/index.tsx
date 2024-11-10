import Divider from '../../Divider'
import DateRangeButtons from '../DateRangeButtons'
import SiteLinks from '../SiteLinks'
import { DesktopHomeButton } from './DesktopHomeButton'

export default function DesktopMenu() {
  return (
    <>
      <nav className="space-y-4" aria-label="Site Navigation" role="navigation">
        <DesktopHomeButton />
        <Divider ariaLabel="Navigation section divider" />
        <SiteLinks />
      </nav>
      <Divider />
      <DateRangeButtons />
    </>
  )
}
