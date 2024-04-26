import React from 'react'
import { ChevronFirst, MoreVertical, UserRound } from 'lucide-react'

type Props = {
  children: React.ReactNode;
};

export default function navBar({children}: Props) {
  return (
    <aside className='h-screen w-fit'>
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center space-x-3">
          <img src="/logoipsum-235.svg" className='w-32' alt="" />
          <button className='p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100'>
            <ChevronFirst />
          </button>
        </div>
        <ul className='flex-1 px-3'>{children}</ul>  
        <div className='border-t flex p-3'>
          <img src="/user-round.svg" className='w-10 h-10 rounded-md'/>
        <div className='flex justify-between items-center w-52 ml-3'>
          <div className='leading-4'>
            <h4 className='font-semibold'>First Last</h4>
            <span className='text-xs text-gray-600'> firstlast@gmail.com</span>
          </div>
          <MoreVertical size={20} />
        </div>
        </div>
      </nav>
    </aside>
  )
}

export function NavBarItem({icon, text, active, alert}: {icon: React.ReactNode, text: string, active: boolean, alert: boolean}){
  return(
    <li className={`relative flex items-center py-2 px-3 my-1 
    font-medium rounded-md cursor-pointer 
    transition-colors
    ${
      active 
        ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
        : "hover:bg-indigo-50 text-gray-600"
    }  
    `}>
      {icon}
      <span>{text}</span>
    </li>
  )
}