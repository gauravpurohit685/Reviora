import { useState } from "react"
import { LuHandPlatter } from "react-icons/lu";


const AddNotesComponent = () => {

    const [titleState, setTitleState] = useState("");
    const [descriptionState, setDescriptionState] = useState("");

    const handleTitle = (e) => {
        setTitleState(e.target.value);
    }

    const handleDescription = (e) => {
        setDescriptionState(e.target.value);
    }

    return (
        <div>
            <div className="navbar bg-transparent">
                <div className="navbar-start">
                    <></>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost text-xl">Save</button>
                </div>
            </div>
            <div className="mt-8 px-16 text-base-content">
                <div className="py-4 my-2">
                    <p className="mb-2 text-2xl">
                        Title:
                    </p>
                    <input type="text" value={titleState} className="w-full bg-transparent h-auto border border-base-content rounded-sm p-2" onChange={handleTitle}/>
                </div>
                <div className="border-t-base-content ">
                    <p className="mb-2 text-2xl">
                        Description:
                    </p>
                    <p className="leading-loose">
                    <textarea value={descriptionState} className="w-full bg-transparent h-128 resize-none border border-base-content rounded-sm p-2" onChange={handleDescription}/>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default AddNotesComponent;