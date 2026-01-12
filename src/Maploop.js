function Maploop(){

        const courts = ['Supreme Court', 'High Court', 'District Court'];



    return(

        <>
        <h1>This is map Function. how to get properties of Courts.  , lets see...</h1>
            <ul>
                {
                    courts.map(
                        (mudgal)=><li>{mudgal}</li>
                    )
                }
            </ul>        
        </>
    )
}

export default Maploop;
