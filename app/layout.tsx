import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

const JOAQUIN = localFont({
    src: [
        {
            path: '../public/fonts/JOAQUIN.otf',
            weight: '700'
        }
    ],
    variable: '--font-joaquin'
});

const ROBOTO = localFont({
    src: [
        {
            path: '../public/fonts/RobotoCondensed-VariableFont_wght.ttf',
            weight: '400'
        },
    ],
    variable: '--font-roboto'
});


export const metadata: Metadata = {
    title: 'Midlife Crisis Motorcycle Club | MCMC Norway',
    description: 'Embrace the freedom of the open road with Midlife Crisis Motorcycle Club – a haven for mature new riders finding joy in riding during their midlife years. Join our community of enthusiasts, embark on unforgettable adventures, and share the thrill of rediscovering life on two wheels!',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${ROBOTO.className} ${ROBOTO.variable} ${JOAQUIN.variable} `}>{children}</body>
        </html>
    )
}
