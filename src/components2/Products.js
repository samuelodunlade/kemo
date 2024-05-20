
import {useState} from "react";

const Products = ({addNewProduct}) => {
    const[name, setName] = useState(null);
    const[price, setPrice] = useState(null)
    const [id, setId] = useState(null)

    const handleFormSubmit = ()=>{
        
      //validation goes here
        if(name == null || price== null || id == null){
          alert("Please provide alll fields")
          return false;
        }

        const newProduct = {
          name: name,
          price: price,
          id: id
        }

        console.log(newProduct)

        addNewProduct(newProduct);
    }
  return (
    <div>
        <form>
          <input type="text" name="name"  value={name} onChange={(e)=>{
            setName(e.target.value)
          }} placeholder="product name" />

          <input type="number" name="price" onChange={(e)=>{setPrice(e.target.value)}} value={price} placeholder="product price" />

          <input type="text" name="id"  onChange={(e)=>{setId(e.target.value)}} value={id} placeholder="product id code"/>
          
          <button type="button" onClick={()=>{ handleFormSubmit() }}>Submit</button>
        </form>

    </div>
  )
}

export default Products