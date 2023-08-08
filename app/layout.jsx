import '/styles/globals.css'

import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"

export const metadata = {
  title: 'Nathan\'s Portfolio',
  description: 'Personal portfolio to present myself and display previously worked on projects',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-no-repeat bg-fixed bg-gradient-to-br from-slate-50 to-violet-100">
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
