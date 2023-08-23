import { useQuery } from "@tanstack/react-query";
import CreaturesService from "../services/CreaturesService";

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
            <div key={creatures.name}>
                <h2>{creatures.name}</h2>
                
            </div>
        )
    })}</div>
}



export default Creatures;