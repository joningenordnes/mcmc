import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// import localFont from 'next/font/local'

const inter = Inter({ subsets: ['latin'] })

// const JOAQUIN = localFont({
//     src: [
//         {
//             path: '../public/fonts/JOAQUIN.otf',
//             weight: '700'
//         }
//     ],
//     variable: '--font-joaquin'
// });

// const ROBOTO = localFont({
//     src: [
//         {
//             path: '../public/fonts/RobotoCondensed-VariableFont_wght.ttf',
//             weight: '400'
//         },
//     ],
//     variable: '--font-roboto'
// });


export const metadata: Metadata = {
    title: 'TankTally - Track Your Vehicle\'s Fuel Consumption',
    description: 'Track your tank\'s fuel consumption with ease. Monitor your vehicle\'s performance and fuel efficiency.',
    openGraph: {
        type: 'website',
        url: 'https://tanktally.app/',
        title: 'TankTally - Track Your Vehicle\'s Fuel Consumption',
        description: 'Track your tank\'s fuel consumption with ease. Monitor your vehicle\'s performance and fuel efficiency.',
        images: [
            {
                url: '/images/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'TankTally App',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'TankTally - Track Your Vehicle\'s Fuel Consumption',
        description: 'Track your tank\'s fuel consumption with ease. Monitor your vehicle\'s performance and fuel efficiency.',
        images: ['/images/og-image.jpg'],
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    )
}
