import { RamadanCalendar } from '@/components/ramadan/ramadan-calendar'
import { PrintButton } from '@/components/ramadan/print-button'
import './ramadan-print.css'

export default function Page() {
  return (
    <main
      className="min-h-screen flex flex-col items-center py-8"
      style={{ backgroundColor: '#e8ede9' }}
    >
      <PrintButton />
      <RamadanCalendar />
    </main>
  )
}
