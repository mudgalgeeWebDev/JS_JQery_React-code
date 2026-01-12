import { useState } from "react";

function Updatedata(){  

    //let [data, setData] = useState("anil")
        let [data,setData] = useState(0)
        function Updatedata(){
           // setData ("Priti");
            setData(data+1);
            
        }
        //console.warn("_________________")
    return(

        <>
        <h1>{data}</h1>
        <button onClick={Updatedata}>Click me</button>

        
        </>
    )

}
export default Updatedata;
