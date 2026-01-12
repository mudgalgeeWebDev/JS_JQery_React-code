import React, { useState } from "react";

function NewForm(){
        const [fname, setName] = useState("");
        const [lname, setLname] = useState("");
        const [mobno, setMobno] = useState("");
        const [add, setAdd] = useState("");

        const handlesubmit = (event) => {
            event.preventDefault();
            alert(`Details filled by you is here: ${fname} ${lname} ${mobno} ${add}`);

        }

return(
    <form onSubmit={handlesubmit}>

        <label> Enter Your First Name:   
            <input type="text" value={fname} onChange={(e)=> setName(e.target.value)}/>
        </label>
<br></br>
        <label> Enter your last Name:      
            <input type="text" value={
                lname} onChange={(e)=> setLname(e.target.value)}/>
        </label>
<br></br>
        <label> Enter your Mobile No.:    
            <input type="text" value={mobno} onChange={(e)=> setMobno(e.target.value)}/>
        </label>

<br></br>
        <label> Enter your full Address..:      
            <input type="text" placeholder="Enter your Add.." value={add} onChange={(e)=> setAdd(e.target.value)}/>
        </label>        
<div>
<br></br>
        <input type="submit"/></div>
    </form>
)
}

export default NewForm;