import { useContext, useEffect, useState } from "react";

const useNotes = () => {    
    const [mainList, setMainList] = useState([]);
    const [secondaryList, setSecondaryList] = useState([]);
    const [query, setQuery] = useState("");


    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {

        try{
            const list = await fetch(process.env.GETNOTES_API,{
                credentials: "include"
            });
            const json = await list.json();

            const {notes} = json;

            setMainList(notes);
            setSecondaryList(notes);

        }  
        catch(err){
            console.log("Error: " + err.message);
        }
    }

    const search = (e) => {
        try{
            const value = e.target.value;
            setQuery(query);
            const newList = mainList.filter((res) => (res.title.toLowerCase().includes(query.toLowerCase())));

            setSecondaryList(newList);
        }
        catch(err){
            console.log("Error: " + err.message);
        }
    }

    return {
        mainList,
        secondaryList,
        query,
        search
    }
}

export default useNotes;