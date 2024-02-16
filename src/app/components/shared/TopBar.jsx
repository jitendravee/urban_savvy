'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { linkList } from '@/constants/index.js'
import { CiSearch } from "react-icons/ci";




export const TopBar = () => {
const [search,setSearch] = useState(false)
const [searc,setSearc] = useState(true)

const  toggleSearch = () => {
  setSearch(!search);
  setSearc(!searc);
}

  return (
    <div className='min-w-full'>
        <div className='flex flex-row justify-between items-center'>
          <h1>hh</h1>
          <h1>UrbanSavvy</h1>
          <ul className='flex flex-row items-center'>
            <li className='flex flex-row items-center gap-2 px-3' onClick={toggleSearch}><CiSearch size={23} />
            {
              ( searc &&
                <>
                Search
                </>
              )
            }
            </li>
          {
            (
              search && 
              <>
              <input type='text' placeholder='Search' />
              </>
            )
          }
            {
              linkList.map((data) => (
              
                <li key={data.id} className='flex items-center'>
                  <Link href={data.href}>
                    <div className='flex flex-row items-center gap-1'>
                <p >{data.icon}</p>
                  <p className='p-2'>{data.tag}</p>
                  </div>
                  </Link>
                </li>
                
             
                
              ) )
            }
                        
                      </ul>
        </div>
        
    </div>
  )
}
