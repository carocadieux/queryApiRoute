import { useQuery } from "@tanstack/react-query";
import { useParams } from 'react-router-dom'
import CreaturesService from "../services/CreaturesService";


const creaturesService = new CreaturesService();


const Creature = () => {
    const params = useParams();
   // console.log(params);
    const { isError, isLoading, error, data} = useQuery({
        queryKey: ["creature", params.id],
        queryFn: () => creaturesService.getCreatureByname(params.id),
    });

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>{error.message}</div>
    //console.log(data);
    return (
        <div>
        {data &&  (
        
            <div >
                
                <h1>{data.data.name}</h1>
                
            </div>
        )}
    </div>
    )
}



export default Creature;