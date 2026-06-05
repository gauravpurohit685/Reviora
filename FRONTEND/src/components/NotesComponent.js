// Imports from libraries
import { Link } from "react-router-dom";

// Internal imports
import useNotes from "../hooks/useNotes";
import CardComponent from "./CardComponent";


const NotesComponent = () => {


    // The logic to handle all the fetching action is in useNotes hook
    const {mainList, secondaryList, query, search} = useNotes()


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
            <div className="flex flex-wrap justify-between">
                {
                    secondaryList.map((res) => {
                        return (
                            // <Link to = "/notes/info">{/* yet to be added*/}
                                <CardComponent data = {
                                    {title : res.title, 
                                    description: res.description
                                    }} key = {res._id}/>
                            // </Link>
                        )
                    })
                }   
            </div>
        </div>
    )
}

export default NotesComponent;