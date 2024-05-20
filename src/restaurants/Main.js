

export const Main = () => {
  return (
        <main>
            {/* banner section */}
            <section
            className="container-fluid p-0 m-0"
            style={{
                backgroundImage: 'url("assets/images/hero-bg.jpg")',
                height: 300,
                backgroundSize: "cover"
            }}
            >
            <div
                className="row"
                style={{ backgroundColor: "rgba(0,0,0,0.7)", height: "inherit" }}
            >
                <div className="col">
                    <h1 className="text-center text-light mt-4" style={{ lineHeight: 7 }}>
                        Eat Healthy, Stay Healthy.
                    </h1>
                </div>
            </div>
            </section>
            {/* end banner section */}
            <div className="album py-5 bg-light">
            <div className="container" id="shopnow">
                <div className="row">
                <div className="col-md-12">
                    <h3 className="text-center mb-3">Welcome Home!</h3>
                </div>
                </div>
                <div className="row">
                <div className="col-md-12">
                    {/* Categories of menu starts */}
                    <h5 className="mb-3 text-danger">CATEGORIES</h5>
                    {/* category item*/}
                    <div className="row g-3" id="shopnow">
                    <div className="col-md-2">
                        <img src="assets/images/meal.jpg" alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-8">
                        <h5>Cajun spiced fish tacos</h5>
                        <p>
                        Beef is the culinary name for meat from cattle, particularly
                        skeletal muscle. Humans have been eating beef since prehistoric
                        times.[1] Beef is a source of high-quality protein and essential
                        nutrients.
                        </p>
                        <button className="btn btn-warning btn-sm">
                        Get Ingredients
                        </button>
                    </div>
                    <hr />
                    </div>
                </div>
                {/* end category item*/}
                <div className="row g-3" id="shopnow">
                    <div className="col-md-2">
                    <img src="assets/images/meal.jpg" alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-8">
                    <h5>Cajun spiced fish tacos</h5>
                    <p>
                        Beef is the culinary name for meat from cattle, particularly
                        skeletal muscle. Humans have been eating beef since prehistoric
                        times.[1] Beef is a source of high-quality protein and essential
                        nutrients.
                    </p>
                    <button className="btn btn-warning btn-sm">Get Ingredients</button>
                    </div>
                    <hr className="style-two" />
                </div>
                </div>
                {/* end category item*/}
                {/* Categories of menu ends */}
            </div>
            </div>
        </main>
  )
}
