import React from 'react';
import Check from "../Images/check.png";
import MemCard from "../Pages/MemCard"
import "../Pages/Membership.css";
const Memberships=()=>{
    let MemC=[
        {
            plan:"Basic Plan",
            amount: 50,
            list: [
                <ul >
                <li><img src={Check}></img> Unlimited gym access</li>
                <li><img src={Check}></img> 2 Training Program</li>
                <li><img src={Check}></img> Free Fitness Program</li>
                <li><img src={Check}></img> Free wifi</li>
                <li><img src={Check}></img> 50% off drinks</li>
                </ul>
            ]
        },
        {
           
            plan:"Elite Plan",
            amount:65,
            list: [
                <ul >
                <li><img src={Check}></img> Unlimited gym access</li>
                <li><img src={Check}></img> 2 Training Program</li>
                <li><img src={Check}></img> Free Fitness Program</li> 
                <li><img src={Check}></img> Person Trainers</li>
                <li><img src={Check}></img> Free wifi</li>
                <li><img src={Check}></img> 50% off drinks</li>
                </ul>
                
            ]
        },
        {
            plan:"Premium Plan",
            amount:90,
            list: [
                <ul >
                <li><img src={Check}></img> Unlimited gym access</li>
                <li><img src={Check}></img> 2 Training Program</li>
                <li><img src={Check}></img> Free Fitness Program</li> 
                <li><img src={Check}></img> Person Trainers</li>
                <li><img src={Check}></img> Free Clothes and Equipment</li>
                <li><img src={Check}></img> Free wifi</li>
                <li><img src={Check}></img> 50% off drinks</li>
                </ul>
            ]
        },
    ]
    // let txt=' ';
    // for(let i=0;i<MemC.length;i++){
    //     for(let j=0;j<MemC[i].list;j++){
    //         txt=
    //         <li>{MemC[i].list[j]}</li>;
    //     }
    // }
    // alert(txt)
    
    return(
        <div class="container bg">
            <div className="row">
                <div className="col-6"></div>
                <div className="col-6 reason ps-4">
                    The Reason Why You Should Join Us.
                </div>
                <div className="row">
                        <div className="col-6"></div>
                <div className="m-0 col-6 ps-3 text-primary wedo">
                    <ul className="list">
                        <li>We provide certified and professonal and certified trainers</li>
                        <li>You can consult with our trainers for free.</li>
                        <li>More over 100+ gyms spread all over the world.</li>
                        <li>You can join the community for free.</li>
                        <li>We provide Quality gyms at affordable prices.</li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="row">
                <div className=" col-12 pt-lg-5 ">
                    <div className="pb-md-5 pt-md-5 ">
                        <div className="shadow row p-5">
                            <div className="text-center col plan">
                            Membership Plans
                            </div>
                            <div className="row">
                                <div className="text-center col memb-body">
                                    No matter what your fitness level is, let's find the fitness membership<br></br> options that works best for you.
                                </div>
                            </div>
                            <MemCard 
                                plann={MemC[0].plan}
                                amountt={MemC[0].amount}
                                listt={MemC[0].list}
                            />
                            <MemCard 
                                plann={MemC[1].plan}
                                amountt={MemC[1].amount}
                                listt={MemC[1].list}
                            />
                            <MemCard 
                                plann={MemC[2].plan}
                                amountt={MemC[2].amount}
                                listt={MemC[2].list}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Memberships;