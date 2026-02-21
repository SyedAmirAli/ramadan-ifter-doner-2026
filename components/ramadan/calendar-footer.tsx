import Image from "next/image";
import { FONT_SIZES } from "@/lib/ramadan-constants";

interface CalendarFooterProps {
    footer: string;
}

const QR_SIZE = 200;

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
            <p className="mb-3">{footer}</p>
            <div className="flex justify-center items-center gap-6" style={{ marginTop: "4mm" }}>
                <Image src="/qrcode.png" alt="QR Code 1" width={QR_SIZE} height={QR_SIZE} unoptimized />
                <Image src="/qrcode2.png" alt="QR Code 2" width={QR_SIZE} height={QR_SIZE} unoptimized />
            </div>
        </footer>
    );
}
