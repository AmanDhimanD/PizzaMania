import PizzaList from "./PizzaList";


function Products() {
    return (
        <div className="container mx-auto pb-24">
            <h1 className="text-lg font-bold py-8">
                Products
            </h1>
            <div className="grid grid-cols-5 my-8 gap-24 ">
               <PizzaList/>
               <PizzaList/>
               <PizzaList/>
               <PizzaList/>
               <PizzaList/>
               <PizzaList/>
               <PizzaList/>
               <PizzaList/>
               <PizzaList/>
               <PizzaList/>
            </div>
            

        </div>

    )
}
export default Products;