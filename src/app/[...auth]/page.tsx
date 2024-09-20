
import Login from "@/components/Login";
import Register from "@/components/Register";
import React from "react";

const page = ({params}:any) => {
    console.log(params?.auth[0]);
    
  return (
  <div className="">
    {params?.auth[0]==="register"?
    <Register />
    :
    <Login/>
}
  </div>
  )
}

export default page