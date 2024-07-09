import { useEffect, useState } from "react";


const Hookfetchdata = () => {
  
   const [data,setdata]=useState(null)
   useEffect(()=>{
    fetch(`
        https://api.github.com/users/HassanHafeez`
    ).then((response)=>response.json())
    .then(setdata)
   },[]);

   //checking the data
   if(data) 
    return(
        <pre>{JSON.stringify(data,null,3)}</pre>
    );

    return (
    <>
    <p>Hook fetch data!</p>
    </>
)
}

export default Hookfetchdata;
