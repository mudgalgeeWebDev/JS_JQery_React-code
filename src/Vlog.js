function Vlog(){
    let stuData = "Vikash Kumar";
        
    function update(){
        stuData = "Pooja";
        alert(stuData);
     
   }
     
    return(
        <>
            <h1> welcome {stuData}</h1>
            <button onClick={update}>click</button>
        </>

    )
    
    
}
export default Vlog;
