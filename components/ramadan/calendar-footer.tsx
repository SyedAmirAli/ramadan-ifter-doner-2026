import Image from "next/image";
import { FONT_SIZES } from "@/lib/ramadan-constants";

interface CalendarFooterProps {
    footer: string;
    qrcode1Url: string;
    qrcode2Url: string;
}

const QR_SIZE = 200;

export function CalendarFooter({ footer, qrcode1Url, qrcode2Url }: CalendarFooterProps) {
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
                <a href={qrcode1Url} target="_blank" rel="noopener noreferrer" aria-label="Scan or click to open website 1">
                    <Image src="/qrcode.png" alt="QR Code 1 – scan to open website" width={QR_SIZE} height={QR_SIZE} unoptimized />
                </a>
                <a href={qrcode2Url} target="_blank" rel="noopener noreferrer" aria-label="Scan or click to open website 2">
                    <Image src="/qrcode2.png" alt="QR Code 2 – scan to open website" width={QR_SIZE} height={QR_SIZE} unoptimized />
                </a>
            </div>
        </footer>
    );
}
