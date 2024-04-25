import React from 'react'
import { ChevronFirst } from 'lucide-react'

type Props = {}

export default function navBar({}: Props) {
  return (
    <aside className='h-screen w-fit'>
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center space-x-3">
              <img src="/logoipsum-235.svg" className='w-32' alt="" />
              <button className='p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100'>
                <ChevronFirst />
              </button>
            </div>
        </nav>
    </aside>
  )
}


