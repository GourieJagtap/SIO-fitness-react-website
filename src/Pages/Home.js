import Bottomhome from "./Bottomhome";
import Bottombutton from "./bottombutton";
import Trainingcard from "./Training-card";
import Running from "../Images/running.png";
import Bisceps from "../Images/biceps.png";
import Yoga from "../Images/position.png";

import "./Home.css"
const Home=()=>{
    let bottombar=[
        {
            blogo:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z"/></svg>,
            btitle:"Location",
            bdescpritions:"Choose Gym near You.",
        },
        {
            blogo:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M112 96c0-17.7 14.3-32 32-32h16c17.7 0 32 14.3 32 32V224v64V416c0 17.7-14.3 32-32 32H144c-17.7 0-32-14.3-32-32V384H64c-17.7 0-32-14.3-32-32V288c-17.7 0-32-14.3-32-32s14.3-32 32-32V160c0-17.7 14.3-32 32-32h48V96zm416 0v32h48c17.7 0 32 14.3 32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32v64c0 17.7-14.3 32-32 32H528v32c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32V288 224 96c0-17.7 14.3-32 32-32h16c17.7 0 32 14.3 32 32zM416 224v64H224V224H416z"/></svg>,
            btitle:"Location",
            bdescpritions:"Choose Training Program",
        },
        {
            blogo:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M208 48c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zM152 352V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152z"/></svg>,
            btitle:"Membership",
            bdescpritions:"Choose Membership Plan",
        },
    ]

    let TrainingCard=[
        {
            tlogo:<img src ={Running}></img>,
            ttitle:"Cardio & Strength",
            tdesc:"Increase your endurance and physical strength by combining cardio with strength exercises.",
        },
        {
            tlogo:<img src ={Bisceps}></img>,
            ttitle:"Muscle Building",
            tdesc:"Increase your physical strength and developing strong muscles and bones to get the ideal body.",
        },
        {
            tlogo:<img src ={Yoga}></img>,
            ttitle:"Stretch & Yoga",
            tdesc:"Stretch your muscles and help your body,stay limber.Also improve your range of motion.",
        }
    ]

    return(
        <div>
        <div className="container-fluid bgu pt-3 pb-5">
            <div row className="pb-5">
                <div className="col-5 reg ">Benefits of regular exercise</div>
                <div className="row">
                <div className="col-5 text-danger wedo">
                    _____ what we do
                </div>
                <div className="row">
                <div className="m-0 col-7 text-dark exp">
                    At our fitness Studio you can experience the best level of customer service.
                </div>
                <div className="row">
                <div className="m-0 col-md-5 but">
                <a class="btn btn-primary" href="#" role="button">Contact Us</a>
                </div>
                </div>
                </div>
                </div>
            </div>
            <div className="row shadow-lg btm">
                <Bottomhome 
                logo={bottombar[0].blogo}
                title={bottombar[0].btitle}
                description={bottombar[0].bdescpritions}
                />
                <Bottomhome 
                logo={bottombar[1].blogo}
                title={bottombar[1].btitle}
                description={bottombar[1].bdescpritions}
                />
                <Bottomhome 
                logo={bottombar[2].blogo}
                title={bottombar[2].btitle}
                description={bottombar[2].bdescpritions}
                />
                <Bottombutton/>
            </div>
            <div className="row prg">
                <div className="col-6 text-center training">
                    Our Training Programs
                </div>
                <div className="col-6 train-c text-secondary">
                    3 special programs that we provide to those of you who want to have a healthy and ideal body.Choose according to your goals.
                </div>
                <div className="row p-4">
                    <Trainingcard 
                    logot={TrainingCard[0].tlogo}
                    titlet={TrainingCard[0].ttitle}
                    desct={TrainingCard[0].tdesc}
                    />
                    <Trainingcard 
                    logot={TrainingCard[1].tlogo}
                    titlet={TrainingCard[1].ttitle}
                    desct={TrainingCard[1].tdesc}
                    />
                    <Trainingcard 
                    logot={TrainingCard[2].tlogo}
                    titlet={TrainingCard[2].ttitle}
                    desct={TrainingCard[2].tdesc}
                    />
                </div>
            </div>
        </div>
        </div>
    )
}
export default Home;