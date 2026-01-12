function Btn(){

    let stuData = "Sanjay Mudgal";
    
function update(){
    stuData = "Vinod kumar ji";
    alert(stuData);
 
   }
 
return(
    <>
        <h1> welcome {stuData}</h1>
        <button onClick={update}>click</button>
    </>
)
}
export default Btn;