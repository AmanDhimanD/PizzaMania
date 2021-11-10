

function PizzaList() {
    return (
        <>
            
                <div>
                    <img src="/img/logo.png" alt="pizza" />
                    <div className="text-center">
                        <h2 className="text-lg font-bold py-2">Havana Special</h2>
                        <span className="bg-gray-200 py-1 rounded-full text-sm px-4">Small</span>
                    </div>
                    <div className="flex justify-between items-center mt-4 font-bold">
                        <span>Rs. 500</span>
                        <button className="bg-yellow-500 py-1 px-4 rounded-full font-bold">ADD</button>

                    </div>
                </div>
            
        </>
    )
}

export default PizzaList;
