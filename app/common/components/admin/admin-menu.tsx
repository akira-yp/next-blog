'use client'

import React from 'react'
import { Icon } from '@chakra-ui/react'
import { FaGithub } from "react-icons/fa"

const AdminMenu = () => {
  return (
    <div className='min-h-screen'>
       <div className='flex justify-center'>
      <Icon as={FaGithub} boxSize={10} className='flex-none' />
      </div>
      <div className='flex justify-center'>
        <Icon as={FaGithub} boxSize={10} className='flex-none' />
      </div>
    </div>
  )
}

export default AdminMenu
