import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Membership from "./Pages/Membership";
import {
    Routes,
    Route,
  } from "react-router-dom";

const App=()=>{
    

    return(
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/memberships" element={<Membership/>}></Route>
            </Routes>
            
        <div className="row foot"></div>
        </div>
    )
}
export default App;