import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
function NotFound(){
    return (
        <div className="hero">
            <div className="text-center hero-content">
                <h1 text-8xl mb-8 font-bold>OOps!</h1>
                <p text-5xl mb-8>404 - Page Not Found!</p>
                <Link to='/'className="btn btn-primary btn-lg">
                    <FaHome className="mr-2"/>
                    Back To Home
                </Link>
            </div>
        </div>
    )
};

export default NotFound;