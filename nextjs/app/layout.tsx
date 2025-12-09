import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Flashcard Hán Việt - Tính năng Phát âm (Web Speech)',
  description: 'Ứng dụng học flashcard tiếng Trung với tính năng phát âm',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  )
}
