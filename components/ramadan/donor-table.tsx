import { FONT_SIZES } from '@/lib/ramadan-constants'

type Person = {
  id: number
  name: string
  ramadan: string
  date: string
}

type TableHeader = {
  id: string
  name: string
  ramadan: string
  date: string
}

interface DonorTableProps {
  people: Person[]
  tableHeader: TableHeader
}

export function DonorTable({ people, tableHeader }: DonorTableProps) {
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr
          style={{
            backgroundColor: 'var(--ramadan-primary)',
            color: 'var(--ramadan-header-text)',
          }}
        >
          <th
            className="font-semibold text-center whitespace-nowrap"
            style={{ fontSize: FONT_SIZES.tableHeader, padding: '3px 4px' }}
          >
            {tableHeader.ramadan}
          </th>
          <th
            className="font-semibold text-center whitespace-nowrap"
            style={{ fontSize: FONT_SIZES.tableHeader, padding: '3px 4px' }}
          >
            {tableHeader.name}
          </th>
          <th
            className="font-semibold text-center whitespace-nowrap"
            style={{ fontSize: FONT_SIZES.tableHeader, padding: '3px 4px' }}
          >
            {tableHeader.date}
          </th>
        </tr>
      </thead>
      <tbody>
        {people.map((person, index) => (
          <tr
            key={person.id}
            style={{
              backgroundColor:
                index % 2 === 0 ? '#ffffff' : 'var(--ramadan-row-alt)',
              borderBottom: '1px solid var(--ramadan-border)',
            }}
          >
            <td
              className="text-center whitespace-nowrap"
              style={{ fontSize: FONT_SIZES.tableBody, padding: '2.5px 4px' }}
            >
              {person.ramadan}
            </td>
            <td
              className="text-left whitespace-nowrap"
              style={{ fontSize: FONT_SIZES.tableBody, padding: '2.5px 4px' }}
            >
              {person.name}
            </td>
            <td
              className="text-center whitespace-nowrap"
              style={{ fontSize: FONT_SIZES.tableBody, padding: '2.5px 4px' }}
            >
              {person.date}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
