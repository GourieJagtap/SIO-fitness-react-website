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
    return(
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/programs" element={<Programs/>}></Route>
                <Route path="/memberships" element={<Membership/>}></Route>
                <Route path="/locations" element={<Locations/>}></Route>
            </Routes>

        </div>
    )
}
export default App;