

export const Content = ({xyz, age, best}) => {
  
    const mystyle = {
        height: "500px",
        backgroundColor: "darkblue",
        paddingTop: "50px",
        color: "white"
    }
  return (
    <div style={mystyle}>
        <h1 style={{color:"tomato"}}>Content</h1>
        <p>Site Contents goes here</p>
        <h3>Welcome {xyz}</h3>
        <p>Your age is: {age}</p>
        <ul>
            {
              best.map(function(gg, index){

                return(
                  <li key={index}> I like {gg}</li>
                )

              })
            }
        </ul>
    </div>
  )
}
