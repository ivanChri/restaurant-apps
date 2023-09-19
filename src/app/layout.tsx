import './globals.css'
import Navbar from './componnent/navbar/navbar'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header className='header'>
          <Navbar />
        </header>
        <div className='container m-auto p-4 bg-slate-700 rounded text-white'>
         {children}
        </div>
      </body>
    </html>
  )
}
