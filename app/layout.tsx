import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './components/theme-provider'
import localFont from 'next/font/local';


const sfPRO = localFont({
  src:[
    {
      path: "./fonts/SF-Pro-Display-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/SF-Pro-Display-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/SF-Pro-Display-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/SF-Pro-Display-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/SF-Pro-Display-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/SF-Pro-Display-Bold.otf",
      weight: "700",
      style: "normal",
    }
  ]
  
})

export const metadata: Metadata = {
  title: 'Saahib Mohammed (oncite)',
  description: 'Saahib Personal Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='h-full' suppressHydrationWarning>
      <body className={sfPRO.className}><ThemeProvider attribute='class' defaultTheme='system' enableSystem> 
        <div className='flex flex-col h-full'>
          {children}
        </div>
        </ThemeProvider></body>
    </html>
  )
}
