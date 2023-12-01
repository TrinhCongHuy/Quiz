import { useRoutes } from "react-router-dom";
import { Routes } from "../../Routes";

function AllRoute() {
    const element = useRoutes(Routes)
    return ( 
        <>
            {element}
        </>
     );
}

export default AllRoute;