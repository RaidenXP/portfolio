import '/styles/globals.css'

import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import {Source_Code_Pro, Outfit} from 'next/font/google'

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
}

export default function RootLayout({ children }) {
  return (
    <html className={`${scp.variable} ${outfit.variable}`} lang="en">
      <head>
        <link rel="icon" href="/n/n-50.png" />
      </head>
      <body className="bg-no-repeat bg-fixed bg-gradient-to-br from-slate-50 to-violet-100">
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
