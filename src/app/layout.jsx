import './globals.css'
import { Lato } from 'next/font/google'
import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'

const lato = Lato({ 
  subsets: ['latin'],
  weight: ['100','300','400', '700', '900'] 
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children, showNavbar }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
