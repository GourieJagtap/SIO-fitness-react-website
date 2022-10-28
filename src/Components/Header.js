import "./Header.css";
import {Link} from 'react-router-dom'

const Header =(props)=>{
    return(
        <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <a class="navbar-brand ps-5 font" href="#">Sio<span class="text-warning dot">.</span></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto dot">
                        <li class="nav-item ps-4">
                        <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li class="nav-item ps-4">
                        <Link class="nav-link"to="/memberships">Memberships</Link>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                    <button type="button" class="btn btn-outline-success" >Register</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Header;