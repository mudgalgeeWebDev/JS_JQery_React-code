

import { useState } from "react"
function HideNshow(){

    let [data,setData] = useState(true);

    return(

        <>
        
        {
        data?<h1>This is Hide N Show function. how to use it lets see</h1>:null
        }`  1   `

        <button onClick={()=>setData(false)}>Hide</button>
        <button onClick={()=>setData(true)}>Show</button>
        <button onClick={()=>setData(!data)}>toggle</button>
        </>
    )
}
export default HideNshow;