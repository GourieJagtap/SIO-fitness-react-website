import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Programs from "./Pages/Programs";
import Membership from "./Pages/Membership";
import Locations from "./Pages/Locations";
import {
    Routes,
    Route,
  } from "react-router-dom";

const App=()=>{
    let bottombar=[
        {
            blogo:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z"/></svg>,
            btitle:"Location",
            bdescpritions:"Choose Gym near You.",
        },
        {
            blogo:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z"/></svg>,
            btitle:"Location",
            bdescpritions:"Choose Gym near You.",
        },
    ]

    return(
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={
                <Home 
                    logo={bottombar[0].blogo} 
                    title={bottombar[0].btitle} 
                    descpritions={bottombar[0].bdescpritions}/>}
                />
                <Route path="/programs" element={<Programs/>}></Route>
                <Route path="/memberships" element={<Membership/>}></Route>
                <Route path="/locations" element={<Locations/>}></Route>
            </Routes>
        </div>
    )
}
export default App;