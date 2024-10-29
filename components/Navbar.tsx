

import { cn, CurrentUser } from '@/lib/utils'
import { Aleo, Duru_Sans, Fira_Sans, Inter, Kumbh_Sans, Nunito, Nunito_Sans, Open_Sans, Outfit, Sancreek, Sansita } from 'next/font/google'
import Image from 'next/image'
import React, { useEffect } from 'react'



import { FaCaretDown, FaMessage } from "react-icons/fa6";
import { MdNotifications, MdOutlineMail, MdOutlineNotifications } from "react-icons/md";
import { MdExitToApp } from "react-icons/md";

import { useCurrentUser } from '@/hooks/useCurrentUser'
import { useRouter } from 'next/navigation'

import { useNavigation } from 'react-day-picker'
import Nav from './nav';






const Navbar = async () => {
    
    const user = await CurrentUser()
  return (
    <div className={cn('shadow-xl py-1 bg-white px-2 z-[50] flex right-0 w-full fixed  justify-end items-center text-gray-600')}>
        <Nav user={user}/>
    </div>
  )
}

export default Navbar