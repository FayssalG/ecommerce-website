import './globals.css'
import { Inter , Lato, Roboto_Mono, Rubik } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })
const rubik = Rubik({subsets:['latin']})
const robotoMono = Roboto_Mono({subsets:['latin']})

export const metadata = {
  title: 'E-commerce',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>{children}</body>
    </html>
  )
}
