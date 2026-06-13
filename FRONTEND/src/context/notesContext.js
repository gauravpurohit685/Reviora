// Imports from library
import { createContext } from "react";

// Context for user data
const notesContext = createContext({
    notes: []
});

export default notesContext;