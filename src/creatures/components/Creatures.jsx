import { useQuery } from "@tanstack/react-query";
import CreaturesService from "../services/CreaturesService";
import { Link } from "react-router-dom";

const creaturesService = new CreaturesService();


const Creatures = () => {
    const { isError, isLoading, error, data} = useQuery({
        queryKey: ["creatures"],
        queryFn: () => creaturesService.getAllCreatures(),
    })

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>{error.message}</div>
    
    return <div>{data && data.map(creatures => {
        return (
            <Link to={`/creatures/${creatures.id}`} key={creatures.id}>   
                <h1>{creatures.id}</h1>
            </Link>
            
        )
    })}</div>
}



export default Creatures;