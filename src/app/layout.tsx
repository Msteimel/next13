import NavBar from './components/navbar'
import './globals.css'

export const metadata = {
  title: 'Florple',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
