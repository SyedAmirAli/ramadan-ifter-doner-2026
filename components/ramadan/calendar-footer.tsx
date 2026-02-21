import { FONT_SIZES } from "@/lib/ramadan-constants";

interface CalendarFooterProps {
    footer: string;
}

export function CalendarFooter({ footer }: CalendarFooterProps) {
    return (
        <footer
            className="w-full text-center whitespace-nowrap"
            style={{
                borderTop: "1px solid var(--ramadan-primary)",
                padding: "5mm 0 4mm 0",
                marginTop: "6mm",
                fontSize: FONT_SIZES.footer,
                color: "var(--ramadan-footer-text)",
            }}
        >
            {footer}
        </footer>
    );
}
