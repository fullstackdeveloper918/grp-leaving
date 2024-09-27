import Recipient from '@/components/Recipient'
import React from 'react'

const page = ({ searchParams,params }:any) => {
  console.log(searchParams.category);
  
  return (
    <div>

      <Recipient searchParams={searchParams} params={params}/>
    </div>
  )
}

export default page