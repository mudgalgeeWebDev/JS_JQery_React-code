// Class me useState from react nhi hoga. direct this.state = {} use hoga.. 
import React from "react";
class Harclass extends React.Component{

    constructor(){
        super();
        this.state = {
            "data":"Sanjay"
        }
    }



    render(){               //render -> it use for html code here, seems give acces to write and display html code here. 
        return(
            <div>

                <h1>Hellow, Class {this.state.data}</h1>

            </div>
    
        )
    }
}

export default Harclass;
