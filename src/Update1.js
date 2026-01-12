import { useState } from "react";

function Update1(){

    let  [name, setName ] = useState("Sanjay");


return(
    <>
    <h1>Hellow Mr. {name}</h1>
    <button onClick={()=>{setName("Sanjay Mudgal")}}>Click for Update </button>
    </>
)
}
export default Update1;