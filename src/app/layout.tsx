
import { NavBarr } from '@/components'
import { ReactNode } from 'react'
import './globals.scss'

export const metadata = { title: 'Payment Subscriptions' }

export default function RootLayout ({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <NavBarr />
        {children}
      </body>
    </html>
  )
}
