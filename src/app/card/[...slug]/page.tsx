import CardCollection from '@/components/CardCollection'
import React from 'react'
  
  const page = ({params}:any) => {
    
    return (
      <div><CardCollection params={params}/></div>
    )
  }
  
  export default page