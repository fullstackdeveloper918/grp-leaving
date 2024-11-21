import { fetchFromServer } from '@/app/actions/fetchFromServer'
import CardCollection from '@/components/CardCollection'
import { colldectionCard } from '@/utils/cybersifyApi'
import React from 'react'
import { Api } from "@/interfaces/interfaces";
  const page = async({params}:any) => {
 console.log(params,"params");
    return (
      <div><CardCollection params={params} /></div>
    )
  }
  
  export default page