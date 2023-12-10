import { Route, Routes } from "react-router-dom";
import StudentHome from "../Pages/StudentHome";
import Register from "../Pages/Register";
import Login from "../Pages/Login";


function AllRoutes(){
    return(
        <Routes>
            <Route path="/register" element={<Register/>}/>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<StudentHome/>}/>
            
        </Routes>
    )
}
export default AllRoutes