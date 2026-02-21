import { CrescentIcon } from "./crescent-icon";
import { FONT_SIZES } from "@/lib/ramadan-constants";

interface CalendarHeaderProps {
    title: string;
}

export function CalendarHeader({ title }: CalendarHeaderProps) {
    return (
        <header
            className="w-full text-center"
            style={{
                backgroundColor: "var(--ramadan-primary)",
                padding: "6mm 8mm",
                marginBottom: "6mm",
            }}
        >
            <div
                className="mx-auto"
                style={{
                    borderTop: "1px solid var(--ramadan-accent)",
                    paddingTop: "3mm",
                }}
            >
                <CrescentIcon />
                <h1
                    className="font-bold"
                    style={{
                        color: "var(--ramadan-accent)",
                        fontSize: FONT_SIZES.title,
                        lineHeight: 1.4,
                    }}
                >
                    {title}
                </h1>
            </div>
            <div
                style={{
                    borderBottom: "1px solid var(--ramadan-accent)",
                    paddingBottom: "3mm",
                    marginTop: "3mm",
                }}
            />
        </header>
    );
}
