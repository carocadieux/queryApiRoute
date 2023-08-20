import { useQuery } from "@tanstack/react-query";


const People = () => {

    const getPeople = async () => {
        
        const res = await fetch("https://swapi.dev/api/people/")
        if (!res.ok) throw new Error()
        const people = await res.json();
        console.log(people.results);
        return people.results; 
    }

    const { isError, isLoading, error, data} = useQuery({
        queryKey: ["people"],
        queryFn: getPeople,
    })

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>{error.message}</div>

    return <div>{data && data.map(people => {
        return (
            <div key={people.name}>
                <h2>{people.name}</h2>
                <p>{people.birth_year}</p>
            </div>
        )
    })}</div>
}



export default People;