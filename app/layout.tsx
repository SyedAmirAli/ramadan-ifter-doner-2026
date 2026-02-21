import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const hindSiliguri = Hind_Siliguri({
    subsets: ["bengali", "latin"],
    weight: ["400", "600", "700"],
    variable: "--font-hind-siliguri",
});

export const metadata: Metadata = {
    title: "রমাদান ইফতার তালিকা ২০২৬",
    description: "উত্তর আলীনাপাডা পুরাতন জামে মসজিদের রমাদান ইফতারদাতাদের তালিকা",
    generator: "v0.app",
    icons: {
        icon: [
            {
                url: "/icon-light-32x32.png",
                media: "(prefers-color-scheme: light)",
            },
            {
                url: "/icon-dark-32x32.png",
                media: "(prefers-color-scheme: dark)",
            },
            {
                url: "/icon.svg",
                type: "image/svg+xml",
            },
        ],
        apple: "/apple-icon.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="bn">
            <body className={`${hindSiliguri.variable} font-sans antialiased`}>
                {children}
                <Analytics />
            </body>
        </html>
    );
}
