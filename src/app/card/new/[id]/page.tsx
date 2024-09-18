import Recipient from '@/components/Recipient'
import React from 'react'

const page = ({ searchParams }:any) => {
  console.log(searchParams.category);
  
  return (
    <div>

      <Recipient searchParams={searchParams}/>
    </div>
  )
}

export default page