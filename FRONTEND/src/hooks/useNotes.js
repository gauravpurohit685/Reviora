// Imports from libraries
import {useEffect, useState } from "react";

// Interanl imports


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
            setQuery(value);
            const newList = mainList.filter((res) => (res.title.toLowerCase().includes(value.toLowerCase())));

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