import { useEffect, useState } from "react"


const Meal = () => {
    const[meals, setMeals] = useState(null);
    const[loading, setLoading] = useState(true);

    useEffect(function(){
        datafetch()
    }, []);

    const datafetch = ()=> {
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            setLoading(false)
            setMeals(data.categories)
        })
    }




  return (
    <div className="row">
        <h1>Meal Categories</h1>

        {
            loading ? ( <h2>Loading...</h2> ) : ""

        }

        {
            meals && meals.map(meal=>{

                return (
                    <div key={meal.idCategory} className="col-md-4">
                        <h3>{meal.strCategory}</h3>
                        <p>{meal.strCategoryDescription}</p>
                        <img src={meal.strCategoryThumb} />
                    </div>
                )
            })
        }


    </div>
  )
}

export default Meal