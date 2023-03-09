'use client'

import React from 'react'
import { IconButton } from '@chakra-ui/react'
import { MdLibraryAdd, MdPlaylistAddCheck,MdAccessibilityNew } from "react-icons/md"
import Link from 'next/link'


const AdminMenu = () => {
  return (
    <div className='min-h-screen'>
      <div className='flex justify-center mt-5'>
        <Link href="/admin/">
          <IconButton
            colorScheme='blue'
            aria-label='show new'
            icon={<MdPlaylistAddCheck/>}
            fontSize='25px'
            rounded='full'
          />
        </Link>
      </div>
      <div className='flex justify-center m-5'>
        <Link href="/admin/new">
          <IconButton
            colorScheme='blue'
            aria-label='show new'
            icon={<MdLibraryAdd/>}
            fontSize='25px'
            rounded='full'
          />
        </Link>
      </div>
      <div className='flex justify-center m-5'>
        <IconButton
          colorScheme='blue'
          aria-label='show new'
          icon={<MdAccessibilityNew/>}
          fontSize='25px'
          rounded='full'
        />
      </div>
    </div>
  )
}

export default AdminMenu
