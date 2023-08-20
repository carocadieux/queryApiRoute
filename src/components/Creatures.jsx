import { useQuery } from "@tanstack/react-query";


const Creatures = () => {

    const getCreatures = async () => {
        
        const res = await fetch("https://eldenring.fanapis.com/api/creatures")
        if (!res.ok) throw new Error()
        const creatures = await res.json();
        console.log(creatures.data);
        return creatures.data; 
    }

    const { isError, isLoading, error, data} = useQuery({
        queryKey: ["creatures"],
        queryFn: getCreatures,
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