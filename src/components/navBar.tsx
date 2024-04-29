"use client"
import React, { useContext, useState, createContext } from 'react'
import { ChevronFirst, ChevronLast } from 'lucide-react'
import { useRouter } from 'next/navigation';



type Props = {
  children: React.ReactNode;
};

// Define the type for the context value
interface SidebarContextValue {
  expanded: boolean;
}

// Create the context with a default value
const SidebarContext = createContext<SidebarContextValue>({
  expanded: true, // Set an initial value for 'expanded'
});

export default function navBar({children}: Props) {

  const [expanded, setExpanded] = useState(true)
  const router = useRouter()

  return (
    <aside className='w-fit flex flex-col'>
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between">
          <img onClick={()=>router.push("/")} src="/logoipsum-235.svg" 
          className={`overflow-hidden transition-all cursor-pointer
          ${expanded ? "w-32 h-10" : "w-0 h-10"}`} 
          alt="" />
          <button onClick={() => setExpanded(curr => !curr)} className='cursor-pointer p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100'>
            {expanded? <ChevronFirst />: <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{expanded}}>
        <ul className='flex-1 px-3'>{children}</ul>  
        </SidebarContext.Provider>

        <div className='border-t flex p-3'>
          <img src="/user-round.svg" className='w-8 h-8'/>
        <div className={`flex justify-between items-center overflow-hidden transition-all 
          ${expanded ? "w-52 ml-3" : "w-0"}`}>
          <div className='leading-4'>
            <h4 className='font-semibold'>Tuan Nguyen</h4>
            <span className='text-xs text-gray-600'> tuan123@gmail.com</span>
          </div>
        </div>
        </div>
      </nav>
    </aside>
  )
}

export function NavBarItem({icon, text, loc}: {icon: React.ReactNode, text: string, loc:string}){

  const { expanded } = useContext(SidebarContext);
  const router = useRouter()
  

  return(
    <li onClick={()=> router.push(loc)} className={`relative flex items-center py-2 px-3 my-1 
    font-medium rounded-md cursor-pointer hover:bg-green-50 text-gray-600"`}>
      {icon}
      <span className={`overflow-hidden transition-all 
          ${expanded ? "w-52 ml-3" : "w-0"}`}>{text}</span>
    </li>
  )
}