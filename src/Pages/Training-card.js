import "./Training-Card.css";
const TrainingCard= (props)=>{
    return(
        <div className="col-md-4 text-center ">
            <div className="card card-p">
            <div className="row ">
                <div className="col p-3">{props.logot}</div>
            </div>
            <div className="row">
                <div className="col title">
                    {props.titlet}
                </div>
            </div>
            <div className="row pt-2">
                <div className="col desc">
                    {props.desct}
                </div>
            </div>
            <div className="row pt-2">
                <div className="col text-primary">
                    Learn More
                </div>
            </div>
            </div>
        </div>
    )
}

export default TrainingCard;