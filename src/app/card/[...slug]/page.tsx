// export default async function Page({searchParams}:any) {
//     // Simulate fetching data from an API or database
//     console.log(searchParams, 'searchParams')
   
  
//     return (
//       <div>
//         <h1>Server Component</h1>
//         <p>Data fetched from server</p>
//       </div>
//     );
//   }

import CardCollection from '@/components/CardCollection'
import React from 'react'
  
  const page = ({params}:any) => {
    
    return (
      <div><CardCollection params={params}/></div>
    )
  }
  
  export default page