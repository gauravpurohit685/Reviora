// Imports from libraries
import { createContext } from "react";


// context for user data
const userContext = createContext({
    isUserLoggedIn: false
});


export default userContext;