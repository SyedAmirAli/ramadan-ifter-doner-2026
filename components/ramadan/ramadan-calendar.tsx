import data from "@/lib/ramadan-data";
import { CalendarHeader } from "./calendar-header";
import { CalendarFooter } from "./calendar-footer";
import { DonorTable } from "./donor-table";

export function RamadanCalendar() {
    const leftColumn = data.people.filter((p) => p.id >= 1 && p.id <= 15);
    const rightColumn = data.people.filter((p) => p.id >= 16 && p.id <= 30);

    return (
        <div className="ramadan-page mx-auto flex flex-col font-ador">
            {/* Header */}
            <CalendarHeader title={data.title} />

            {/* Body - Two Column Tables */}
            {/* <div
                className="flex flex-col ramadan-content"
                style={{
                    gap: "0",
                    padding: "6mm 0 8mm 0",
                }}
            > */}
            {/* Left Column */}
            {/* <div className="flex-1"> */}
            <DonorTable people={data.people} tableHeader={data.tableHeader} />
            {/* </div> */}

            {/* Vertical Divider */}
            {/* <div
          style={{
            width: '1px',
            backgroundColor: 'var(--ramadan-primary)',
            margin: '0 3mm',
            flexShrink: 0,
          }}
        /> */}

            {/* Right Column */}
            {/* <div className="flex-1">
          <DonorTable people={rightColumn} tableHeader={data.tableHeader} />
        </div> */}
            {/* </div> */}

            {/* Footer */}
            <CalendarFooter footer={data.footer} />
        </div>
    );
}
