import './navbar.css'

import {useNavigate} from 'react-router-dom'

function Navbar(){

    let navigate = useNavigate()
    function goToResourcesPage(){
        navigate("/resources")
    }
    return(
        <nav className="nav">
            <div className="left">
                CMR
            </div>
            <div className="middle">
                <button onClick={goToResourcesPage}>Resource</button>
            </div>
            <div className="right">
                <button>Login</button>
            </div>
        </nav>
    )
}


export default Navbar   