import { Link } from "react-router-dom";

export default function Header() {
    return(
        <header className="w-full h-16 bg-red-600 flex items-center justify-center p-4">
            <Link to={'/'} className="text-white font-medium">Social Photos</Link>
        </header>
    )
};