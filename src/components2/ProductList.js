


const ProductList = ({products, deleteproduct}) => {
  return (
    <div className="container">
        <div className="row">
            <div className="col">
                <h1> Available Products </h1>
            </div>
        </div>
        <div className="row">
            {/* display products here */}
            {
                products.map((pro)=>{
                    return(
                        <div key={pro.id} className="col-md-4 mb-2">
                            <div className="bg-primary p-4">
                                <h3>{pro.name}</h3>
                                <p> {pro.price} </p>
                                <p> {pro.id} </p>
                                <button onClick={()=>{deleteproduct(pro.id)}} className="btn btn-danger">Delete</button>
                            </div>
                        </div>
                    )
                })
            }


        </div>


    </div>
  )
}

export default ProductList