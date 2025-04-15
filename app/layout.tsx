import './globals.css'
import type { Metadata } from 'next'
// import localFont from 'next/font/local'

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
    title: 'TankTally.App',
    description: 'TankTally is a simple app that allows you to track your tank\'s fuel consumption.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
