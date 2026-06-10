// Imports from libraries
import {useEffect, useState } from "react";

// Interanl imports
const useNotes = ({setIsLoading, setIsError, setErrorMessage}) => {    
    const [mainList, setMainList] = useState([]);
    const [secondaryList, setSecondaryList] = useState([]);
    const [query, setQuery] = useState("");


    useEffect(() => {
        fetchData();
    }, [])

    // Function that fetches the notes data
    const fetchData = async () => {

        try{
            const list = await fetch(process.env.GETNOTES_API,{
                credentials: "include"
            });

            if(!list.ok){
                throw new Error("Error fetching the notes!");
            }
            const json = await list.json();

            const {notes} = json;

            setMainList(notes);
            setSecondaryList(notes);
            setIsLoading(false);

        }  
        catch(err){
            console.log("Error: " + err.message);
            setIsLoading(false);
            setIsError(true);
        }
    }

    // Function that facilitates search feature
    const search = (e) => {
        try{

            const value = e.target.value;

            if(!value.trim()){
                setSecondaryList(mainList);
                setQuery(value);
                return;
            }
            
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