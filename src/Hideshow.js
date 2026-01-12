import { useState } from "react";

function Hideshow(){

    let[data,setData] = useState(true);
    return(

        <>
        {     
        data? <h1>hellow , how to Hide & Show...</h1>:null
        }

        {/* <button onClick={()=>setData(false)}>Hide</button> */}
{/*          */}
        {/* <button onClick={()=>setData(true)}>Show</button> */}

        <button onClick={()=>setData(!data)}>toggle</button>

        </>
    )
}
export default Hideshow;