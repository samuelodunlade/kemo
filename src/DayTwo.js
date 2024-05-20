
import { useState } from "react"
import Content from "./components2/Content"
import Footer from "./components2/Footer"
import Header from "./components2/Header"
import ProductList from "./components2/ProductList"
import Meal from "./components/Meal"


const DayTwo = () => {
    // let cartItems = 5; //convert cartItems into state
    const [cartItems, setCartItems] = useState(5)

    const [products, setProducts] = useState([
      {
      name: "Mercedes Benz 101",
      price: "200000000",
      id: "mer101"
      },
      {
      name: "Frozen Veggies",
      price: "2000",
      id: "freeze101"
      },
      {
      name: "Greek Yogurt Parfait",
      price: "8500",
      id: "yogur101"
      },
  
    ]);

    //update product state
    const addNewProduct = (newProduct) =>{
      const latestProduct = [...products, newProduct];
      setProducts(latestProduct);
    }

    //delete a product from products state

    const deleteproduct = (id)=>{
      
      //filter
      const newProduct = products.filter(function(product){
          return product.id != id
      });

      setProducts(newProduct);

    }


  //increase cart function
  function increase_cart(){
    setCartItems(cartItems + 1)
  }


    //cart state 
       const [count, setCount] = useState(0); //create state
       const increaseCount =()=>{
          // setCount(count+1) //updating a state
          setCount(function(x){
            return x+1
          });
       }
       const decreaseCount = () => {
         if(count < 1){
          alert("we dont allow this here")
         }else{
          setCount(count-1);
         }
       }
  return (
    <div>
        {/* <h1>Count : {count}  </h1>

        <button onClick={()=>{ increaseCount() }}>Increase</button>
        <button onClick={()=>{decreaseCount()}}> Decrease </button>
        
       <Header cartItems={cartItems} count={count} increaseCount={increaseCount} decreaseCount={decreaseCount}/> 
       <Content cartItems={cartItems} increase_cart={increase_cart} addNewProduct={addNewProduct}/>

       <ProductList products={products} deleteproduct={deleteproduct}/>

       <Footer/> */}
       <Meal/>

    </div>
  )
}

export default DayTwo