import { useState, useEffect } from "react";

const People = () => {
    const [data, setData] = useState([]);

    const getPeople = async () => {
        try{
            const res = await fetch("https://swapi.dev/api/people/")
            if (!res.ok) throw new Error()
            const people = await res.json();
            console.log(people.results)
            setData(people.results);
        } catch (e) {
        console.error(e);
        }
    }

    useEffect(() => {
        getPeople();
    } , []);
    return <div></div>
}



export default People;