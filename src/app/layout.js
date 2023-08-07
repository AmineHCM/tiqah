import './globals.css'
import { Poppins } from 'next/font/google'

//const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });


export const metadata = {
  title: 'Tiqah Foundation',
  description: 'Moroccan Agency connecting students with the best schools in Turkey',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
