import Footer from '@/components/footer'
import './globals.css'
import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import Navbar from '@/components/navbar'
import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'
import { SessionProvider } from 'next-auth/react'

const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nhà Quê Shop',
  description: 'A place to find you dream',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <SessionProvider session={session}>
          <ModalProvider />
          <ToastProvider />
          <Navbar />
          {children}
          <Footer />
        </SessionProvider>
      </body>
    </html>
  )
}
