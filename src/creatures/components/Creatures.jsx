import { useQuery } from "@tanstack/react-query";
import CreaturesService from "../services/CreaturesService";
import { Link } from "react-router-dom";
import FavoriteButton from "../../favorites/component/favoriteButton/FavoriteButton";

const creaturesService = new CreaturesService();


const Creatures = () => {
    const { isError, isLoading, error, data} = useQuery({
        queryKey: ["creatures"],
        queryFn: () => creaturesService.getAllCreatures(),
    })

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>{error.message}</div>
    console.log(data);
    return <div>{data && data.map(creatures => {
        return (
            <div key={creatures.list}>
                <FavoriteButton creatures={creatures}  key={creatures.FavoriteButton}/>
                <Link to={`/creatures/${creatures.id}`} key={creatures.id}> 
                    
                    <h1>{creatures.name}</h1>
                </Link>
            </div>
        )
    })}</div>
}



export default Creatures;