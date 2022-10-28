import React from 'react';
import Check from "../Images/check.png";
import MemCard from "../Pages/MemCard";
import Face1 from "../Images/face1.jpg";
import Face2 from "../Images/face2.jpg";
import Face3 from "../Images/face3.jpg";
import Face4 from "../Images/face4.jpg";
import Face5 from "../Images/face5.jpg";
import Face6 from "../Images/face6.jpg";
import quotation from "../Images/quotation-mark.png";
import star from "../Images/star.png";
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
        <div class="container-fluid bg">
            <div className="row">
                <div className="col-6"></div>
                <div className="col-6 reason ps-md-3 pt-md-5">
                    The Reason Why You Should Join Us.
                </div>
                <div className="row">
                        <div className="col-6"></div>
                <div className="m-0 col-6 ps-md-2 wedoo">
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
            <div className="row p-4">
                <div className=" col-12 pt-lg-4 ">
                    <div className="pb-md-5 pt-md-5 ">
                        <div className="shadow row p-3">
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
                <div className="row m-0">
                    <div className="col-md-6 pt-5 pb-3 ps-5">
                        <div className=" col plan1 pe-md-3">
                                What Our Members Are Saying About  
                        </div>
                        <div className="row">
                            <div className="col memb-body pt-3 pe-md-3">
                                Here are various testimonials from some of our members spread all over the world.
                            </div>
                        </div>
                        <div className="row p-3">
                            <img src={Face1} className="img1 rounded-p rounded-circle"></img>
                            <img src={Face2} className="img2 rounded-p rounded-circle"></img>
                            <img src={Face3} className="img3 rounded-p rounded-circle"></img>
                            <img src={Face4} className="img4 rounded-p rounded-circle"></img>
                            <img src={Face5} className="img5 rounded-p rounded-circle"></img>
                        </div>
                    </div>
                    <div className="col-md-6 p-md-5 ">
                        <div className="row p-3 shadow-lg">
                            <div className="col-3 comma ">
                                <img src={quotation}></img>
                            </div>
                            <div className="col-2"></div>
                            <div className="col-7 end">
                                <img src={star} class="star" alt="" />
                                <img src={star} class="star" alt="" />
                                <img src={star} class="star" alt="" />
                                <img src={star} class="star" alt="" />
                                <img src={star} class="star" alt="" />
                            </div>
                            <div className="row">
                            <div className="col memb-body ps-2 pt-5
                            pb-3">
                                This Gym is the gym if you want to build muscles or lose weight,they have every equipment available
                            </div>
                            <hr />
                            <div className="row pt-2">
                                <div className="col-2 p-1">
                                <img src={Face1} className=" rounded-circle comment"></img>
                                </div>
                                <div className="col-9 ps-4 adamv">
                                <h4 className="adam">Adam Griefrn</h4>
                                <p>28 years ago.</p>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="row p-3">
                    <div className="col-12 bg-p">
                        <div className="row pt-5 pb-4">
                            <div className=" col plan1 pe-md-3 text-light text-center">
                                        Subscribe To Our News Letters
                            </div>
                        </div>
                        <div className="row">
                        <div className="col memb-body ps-2 pt-2 pb-3 text-light text-center">
                                Get the latest information from us.
                            </div>
                        </div>
                        <div className="row pt-4 pb-5 text-center">
                            <span>
                            <input type="email " placeholder="Enter your email id" className="p-2 email"/>
                            <button type="button" className="p-2 rounded-2 btnc">Subscribe</button>
                            </span>
                            
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default Memberships;