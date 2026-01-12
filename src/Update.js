import { useState } from "react";

function Update(){
    let [name, setName] = useState("Sanjay");
    // function update (){
    // setName("Pooja");
// }

return(
    <>
    <h1>Hello Ji.. Ki haal... {name}</h1>
    {/* {<button onClick={update}> update me</button>} */}
    <button onClick={()=>{setName("Pooja")}}>Update me</button>
    
    </>
)
}
export default Update;