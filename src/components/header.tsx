import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function Header() {
    const navigate = useNavigate();
    const handleReturn = () => {
        navigate(-1)
    }
    return(
        <header className="w-full h-16 bg-red-600 flex items-center justify-around p-4 select-none">
            <FaArrowLeft className="text-white cursor-pointer" size={24} onClick={handleReturn}/>
            <Link to={'/'} className="text-white font-medium">Social Photos</Link>
            <span></span>
        </header>
    )
};