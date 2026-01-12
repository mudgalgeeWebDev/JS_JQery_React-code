import { useState } from "react";
function MyForm2(){

    const [Fname, setname] = useState("");
    const [lname, setLname] = useState("");

    const handlesubmit = (event) => {
        event.preventDefault();              // USE for page referse. now page/data will not referse
        alert(`This is Delhi High Courts Details:  ${Fname} ${lname}`);
    }


    return(
        <div>
        <form onSubmit={handlesubmit}>

        <label>  Enter Your First Name: 
            <input type="text" value={Fname} onChange={(e) =>setname(e.target.value)}/>
        </label>

        <label>Enter your Last name :
            <input type="text" value={lname} onChange={(e) => setLname(e.target.value)}/>
            
        </label>

            <input type="submit"/>

        </form>
        </div>
    )
}
export default MyForm2;
