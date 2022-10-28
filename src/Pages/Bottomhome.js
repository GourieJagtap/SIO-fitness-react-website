 import "./BottomHome.css";
const Bottomhome=(props)=>{
    return(
            // <div className="row">
                // <div className="col-10">
                    // <div className="row">
                        <div className="col-sm-3 ">
                            <div className="row">
                                <div className="col-2 imgg">
                                    {props.logo}
                                </div>
                                <div className="col-10">
                                    <div className="row">
                                        <div className="col-12 ttl">
                                            {props.title}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 desc">
                                            {props.description}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    // </div>
                // </div>
                
    )
}
export default Bottomhome;