'use client'
import React from 'react'

import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const ToastComponent = () => {
  return (
    <div>
        <ToastContainer theme='colored' position='bottom-right'/>
    </div>
  )
}

export default ToastComponent