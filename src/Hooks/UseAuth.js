import { useContext } from "react"
import { authContext } from "../Components/Contex/AuthProvider";

const UseAuth = () => {
    return useContext(authContext)
}

export default UseAuth;