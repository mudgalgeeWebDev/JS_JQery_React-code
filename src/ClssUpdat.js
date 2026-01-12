import React from "react";
class ClssUpdat extends React.Component{

    constructor(){
        super();
        this.state = {
                // data : "amrita"
               data : 1
        }
    }

    User(){
        // alert("hiiiiii");
        // this.setState({data: "Kamal"});
        this.setState({data:this.state.data+1})
    }

    render(){
        return(
            <>
            <h1>My name Sanjay{this.state.data}</h1>
            <button onClick={()=>this.User()}>click me </button>
            </>
        )
    }
}
export default ClssUpdat;