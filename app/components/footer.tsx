import React from 'react'
import { ThemeToggle } from './theme-toggle'

const Footer = () => {
  return (

         <div className=" w-full border-t text-xs border-neutral-200 dark:border-neutral-800 pt-6 flex items-center justify-between">
          <div className="text-neutral-500"> Built by Saahib | @2024 oncite. All Rights Reserved </div>
          <ThemeToggle />
         </div>

  )
}

export default Footer