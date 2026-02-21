"use client";

import { FONT_SIZES } from "@/lib/ramadan-constants";

export function PrintButton() {
    return (
        <button
            onClick={() => window.print()}
            className="print:hidden mb-4 cursor-pointer rounded-lg px-6 py-2.5 font-semibold text-white transition-colors hover:opacity-90"
            style={{
                backgroundColor: "var(--ramadan-primary)",
                fontSize: FONT_SIZES.printButton,
            }}
        >
            {"প্রিন্ট করুন / Print"}
        </button>
    );
}
