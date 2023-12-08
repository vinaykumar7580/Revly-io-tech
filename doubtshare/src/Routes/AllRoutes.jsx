import { Route, Routes } from "react-router-dom";
import StudentHome from "../Pages/StudentHome";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import TutorsHome from "../Pages/TutorsHome";



function AllRoutes(){
    return(
        <Routes>
            <Route path="/register" element={<Register/>}/>
            <Route path="/" element={<Login/>}/>
            <Route path="/home/student" element={<StudentHome/>}/>
            <Route path="/home/tutors" element={<TutorsHome/>}/>
        </Routes>
    )
}
export default AllRoutes