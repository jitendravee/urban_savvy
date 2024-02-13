import Link from 'next/link'
import React from 'react'
import { linkList } from '@/constants/index.js'
export const TopBar = () => {
  return (
    <div className=''>
        <div className=''>
          <h1>hh</h1>
          <h1></h1>
          <ul>
            
{
  linkList.map((data) => (
    
    <li key={data.id}>
      <Link href={data.href}>
      <image src={data.icon} />
      <p>{data.tag}</p>
      </Link>
    </li>
    
    
    
  ) )
}
            
          </ul>
        </div>
        
    </div>
  )
}
