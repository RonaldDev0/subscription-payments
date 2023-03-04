import { ReactNode } from 'react'

export const metadata = { title: 'Prebuild Payment' }

export default function PrebuildLayout ({ children }: { children: ReactNode }) {
  return (
    <main>
      {children}
    </main>
  )
}
