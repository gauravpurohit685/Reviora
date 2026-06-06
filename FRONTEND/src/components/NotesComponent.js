// Imports from libraries
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
// Internal imports
import useNotes from "../hooks/useNotes";
import CardComponent from "./CardComponent";
import notesContext from "../context/notesContext";

const NotesComponent = () => {

    

    // The logic to handle all the fetching action is in useNotes hook
    const {mainList, secondaryList, query, search} = useNotes();

    // UseEffect hook
    const {setNotes} = useContext(notesContext);
    useEffect(() => {
        setNotes(mainList)
    },[mainList]);

    return (
        <div>
            {/* Navbar from DaisyUI */}
            <div className="navbar bg-transparent mb-8">
                <div className="navbar-start">
                    <p className="mr-4">Notes</p>
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" onChange={search}/>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-ghost text-xl">ADD+</a>
                </div>
            </div>
            <div className="flex flex-wrap justify-around">
                {
                    secondaryList.map((res) => {
                        return (
                             <Link to = {`/notes/${res._id}`} key = {res._id}> 
                                <CardComponent data = {
                                    {title : res.title, 
                                    description: res.description,
                                    date: res.createdAt
                                    }} />
                             </Link>
                        )
                    })
                }   
            </div>
        </div>
    )
}

export default NotesComponent;