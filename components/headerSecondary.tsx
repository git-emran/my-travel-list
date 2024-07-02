
"use client"

import React from 'react'
import HeaderForm from './HeaderForm'

export default function HeaderSecondary() {
  return (
    <div className='flex flex-row gap-4 items-center justify-center bg-orange-900 h-[3rem] w-full '>
      <p className='text-sm font-normal text-white'>Things that I need </p>
      <HeaderForm />
    </div>
  )
}
