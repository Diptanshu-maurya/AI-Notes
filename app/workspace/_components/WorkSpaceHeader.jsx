
import React from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

function WorkSpaceHeader({fileName}) {
  return (
    <div className='flex justify-between px-8 py-3 shadow-md'>
      <Image src={'/logo.svg'} width={60} height={100} alt='logo'></Image>
       <h2> FileName:{fileName}</h2>
      <div className='flex items-center justify-center gap-3'>
        <Link href={'/dashboard'}>
        <Button >Dashboard</Button>
        </Link>
      
      <Button>Save</Button>
      <UserButton></UserButton>
      </div>
    </div>
  )
}

export default WorkSpaceHeader
