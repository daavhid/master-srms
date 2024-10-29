'use client'
import React, { useEffect, useState } from 'react'
import { BookAIcon, ChevronRight, LucideIcon } from 'lucide-react'
import { MdBook, MdLibraryBooks, MdPeople, MdPerson3, MdSchool } from "react-icons/md";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Colapse } from './collapsible';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';



const StaffSideBar = () => {
    const [selected,setSelected] = useState('/dashboard')
    const page = usePathname()
    useEffect(()=>{
        setSelected(page)

    },[page])
   
  return (
    <div className='mt-8 border-t border-t-gray-200 h-screen'>
        <ScrollArea  scrollHideDelay={300} className="h-[85%] mt-16 rounded-lg ">
            <div className='flex flex-col space-y-1  font-normal  text-white'>
                
                <Link onClick={()=>{setSelected(page)}} href={`/dashboard`} className={cn('flex justify-between p-3  hover:bg-tone4  z-30',(selected==='/dashboard')?'bg-tone4':'bg-transparent')}> 
                    <span>Home</span>
                </Link>
                <Link onClick={()=>{setSelected(page)}} href={`/add-results`} className={cn('flex justify-between p-3  hover:bg-tone4  z-30',(selected==='/add-results')?'bg-tone4':'bg-transparent')}> 
                    <span>Add Result</span>
                </Link>
            </div>
            <ScrollBar color='red'  orientation="vertical" />
        </ScrollArea>
        
    </div>
  )
}

export default StaffSideBar
