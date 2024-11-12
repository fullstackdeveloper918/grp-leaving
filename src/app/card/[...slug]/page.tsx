import { fetchFromServer } from '@/app/actions/fetchFromServer'
import CardCollection from '@/components/CardCollection'
import { colldectionCard } from '@/utils/cybersifyApi'
import React from 'react'
import { Api } from "@/interfaces/interfaces";
  const page = async({params}:any) => {
    // const api: Api = {
    //   url:colldectionCard,
    //   method: "GET",
    //   // body: { key: 'value' }
    //   // comment only
    // } as any;
    // const getData= await fetchFromServer(api)
    // console.log(getData,"getData");
    
    return (
      <div><CardCollection params={params}/></div>
    )
  }
  
  export default page