import { Loader } from 'lucide-react'
import React from 'react'

export default function Loading() {
  return (
    <section className='grid h-72 place-content-center'>
      <div className='flex gap-2 items-center text-blue-600'>
        <Loader className='animate-spin'/>
        Loading...
      </div>
    </section>
  )
}
