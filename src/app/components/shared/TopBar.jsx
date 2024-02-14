import Link from 'next/link'
import React from 'react'
import { linkList } from '@/constants/index.js'
import { CiSearch } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";
import { RiAccountCircleFill } from "react-icons/ri";
import { FaShare } from "react-icons/fa";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";




export const TopBar = () => {

  return (
    <div className='min-w-full'>
        <div className='flex flex-row justify-between items-center'>
          <h1>hh</h1>
          <h1></h1>
          <ul className='flex flex-row'>
            
            {
              linkList.map((data) => (
              
                <li key={data.id} className='flex items-center'>
                  <Link href={data.href}>
                    <div className='flex flex-row items-center gap-3'>
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
