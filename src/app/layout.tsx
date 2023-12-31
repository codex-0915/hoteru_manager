import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '500', '700', '900'],
  style: ['italic', 'normal'],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: 'Hoteru Manager',
  description: 'Discover the hotel rooms',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
		<main className='fort-normal'>
			{/* ?Header */}
			{children}
			{/* ?Footer */}
		</main>
	  </body>
    </html>
  )
}
