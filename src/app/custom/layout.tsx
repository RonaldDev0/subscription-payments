import { ReactNode } from 'react'

export const metadata = { title: 'Custom Payment' }

export default function CustomLayout ({ children }: { children: ReactNode }) {
  return (
    <main>
      {children}
    </main>
  )
}
