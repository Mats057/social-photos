import { useParams } from "react-router-dom"

export default function Album(){
    const { id } = useParams();
    return(
        <main>
            {id}
        </main>
    )
}