const Quote = ({quotes, calfunc}) => {

    


  return (
    <div>
        <h1>Quotes</h1>
       
        <ul className="list-group">
            {
                quotes.map((quo, index)=>{
                    return (
                        <li className="list-group-item" key={index}>{quo.text} <span>{quo.author}</span></li>
                    )
                })
            }
        </ul>

        <button  onClick={()=>{calfunc(8)}} >Click Me</button>

    </div>
  )
}
export default Quote