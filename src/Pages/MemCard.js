import "./MemCard.css"

const MemCard=(props)=>{
    return(
        // <div className="container-fluid">
            <div className="col-lg-4 shadow-sm p-3" >
                <div className="card cardd">
                <div className="card-body">
                    <h6 className=" text-center card-title text-primary">{props.plann}</h6>
                    <h4 className=" text-center ">${props.amountt}</h4>
                    <p className="text-center card-text">per month ,bill anually</p>
                    <hr></hr>
                    <div>{
                    props.listt
                    }</div>
                </div>
                <button type="button" className="btn btn-outline-primary  button">Find a Gym</button>
                </div>
            </div>
        // </div>
    )
}
export default MemCard;