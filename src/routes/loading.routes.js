import { Route, Routes } from "react-router-dom";
import Loading from "../pages/loading";


const LOADING_ROUTE = () => {
    return (<>

        <Routes>
            <Route path="*" element={<Loading />} />
        </Routes>
    </>)
}


export default LOADING_ROUTE;