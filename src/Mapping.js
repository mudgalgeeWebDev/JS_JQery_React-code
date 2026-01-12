function Mapping(){

    const brand = ['Apple ', 'Samsung ', 'Chinese ', 'Onepluse ',' Nokia'];


    return(

        <>
        
        <h1>Hellow this Mapping, how to top Map function.</h1>
        <ul>
            {
                brand.map(
                    (paramtr)=> <li><b>{paramtr}</b></li>
                )
            }
        </ul>
        
        </>
    )

}
export default Mapping;