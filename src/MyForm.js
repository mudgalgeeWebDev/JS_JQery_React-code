import { useState } from "react";
function MyForm(){
    const [fname, setName] = useState("");
    const [lname, setLname] = useState("");

    const handlesubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was : ${fname} ${lname}`);
    }


    return(

        <form onSubmit={handlesubmit}>
            <label>Enter Your Fname :
                <input type="text" value={fname} onChange={(e) => setName(e.target.value)}/>
            </label>

            <label> Enter Your Lname :
                <input type="text" value={lname} onChange={(e) => setLname(e.target.value)} />

            </label>

            <input type="submit"/>
        </form>
    )
}

export default MyForm;