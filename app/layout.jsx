import '/styles/globals.css'

import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import {Source_Code_Pro, Outfit} from 'next/font/google'
import Providers from '@/components/Providers'

const scp = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--font-scp'
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit'
})

export const metadata = {
  title: 'Nathan\'s Portfolio',
  description: 'Personal portfolio to present myself and display previously worked on projects',
  icons: {
    icon: "/n/n-50.png"
  },
}

export default function RootLayout({ children }) {
  return (
    <html className={`${scp.variable} ${outfit.variable}`} lang="en">
      <body className="main_bg">
        <Providers>
          <NavBar/>
            {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  )
}
