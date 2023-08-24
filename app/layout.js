import './globals.css'
import { Inter } from 'next/font/google'
import LayoutProvider from './layoutProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'mari belajar next',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        
        <LayoutProvider>
          {children}
        </LayoutProvider>
      </body>
    </html>
  );
}
