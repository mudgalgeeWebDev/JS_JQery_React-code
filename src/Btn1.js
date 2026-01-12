function Btn1(){

    let classData = "Ravinder Kumar Ji";


function update(){
    classData = "Charu Bajaj ";
    alert(classData);
}

return(

    <>
            <h1>welcome {classData}</h1>
            <button onClick={update}>Click for update</button>
    </>
)
}
export default Btn1;