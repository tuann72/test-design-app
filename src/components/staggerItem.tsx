"use client"
import React from 'react'

type Props = {
    children: React.ReactNode;
};

export default function staggerChildren({children}: Props) {
  return (
    <div className='flex flex-col gap-10 overflow-x-hidden'>
        <section>
            {children}
        </section>
    </div>
  )
}

export function imageChild(){
    return(
        <div className="bg-slate-800, aspect-square rounded-lg justify-center flex items-center gap-10"></div>
    )
}