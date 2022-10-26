import "./Home.css"
const Home=(props)=>{
    return(
        <div className="container bgu pt-3">
            <div row>
                <div className="col-5 reg ps-5">Benefits of regular exercise</div>
                <div className="row">
                <div className="m-0 col-5 ps-5 text-danger wedo">
                    _____ what we do
                </div>
                <div className="row">
                <div className="m-0 col-md-5 ps-5 text-dark exp">
                    At our fitness Studio you can experience the best level of customer service.
                </div>
                <div className="row">
                <div className="m-0 col-md-5 ps-5 pt-2">
                <a class="btn btn-primary" href="#" role="button">Contact Us</a>
                </div>
                </div>
                </div>
                </div>
                
            </div>
            <div className="row pt-5">
                <div className="shadow col-md-12 bg-light ">
                    <div className="row">
                        <div className="col-3">
                            <div className="row">
                                <div className="col-2">
                                    {props.logo}
                                </div>
                                <div className="col-8">
                                    <div className="row">
                                        <div className="col-12">
                                            {props.title}
                                        </div>
                                        <div className="col-12">
                                            {props.descpritions}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-1">
                        <a class="btn btn-primary" href="#" role="button">Link</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;