


import { serverRole } from '@/lib/utils'
import { redirect } from 'next/navigation'
import React from 'react'
import ManageStaff from './manageStaff'

const page = async () => {
    const role = await serverRole()
    if(role !=='ADMIN') {
        redirect('/dashboard')
    }
  return (
    <div>
        
        
        <div className='h-screen flex  items-center'>
            
            <ManageStaff/>
        </div>
    </div>
  )
}

export default page