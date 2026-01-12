

function Garage(){

    // const cars = ['Ford','BMW','Audi'];
    const cars = [
                {id: 1, brand: 'Ford'},
                {id: 2, brand: 'BMW'},
                {id: 3, brand: 'Audi'}
                ];
                
        return (
            <>
            
                {/*<h1>Who lives in my garage?</h1>
                <ul>
                    {
                        cars.map(
                            (car)=>
                                <li>{car}</li>
                            
                        )
                    }
               </ul>*/}
        
            {/* <h1>Who lives in my garage?</h1> */}
            <ul>
                {
                    cars.map((car)=> 
                                    <li> {car.id}{car.brand}</li>
                )
                }
            </ul>
            </>

        )
}

export default Garage;