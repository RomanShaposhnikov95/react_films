import './Pages.css'
import {Link} from "react-router-dom";


export const NotFound = () => {
    return (
        <div className='notFound'>
            <h1 className='errorNum'>404</h1>
            <p className='errorDescription'>Page Not Found</p>
            <Link to='/' className="backToGeneral">Back To Home</Link>
        </div>
    )
}