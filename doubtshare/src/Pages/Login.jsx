import style from "../Styles/register.module.css";
import star from "../Components/picture1.jpg";
import starvertical from "../Components/picture4.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "student",
  });

  const toast = useToast();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/auth/login",{
      method:"POST",
      body:JSON.stringify(formData),
      headers:{
        "Content-Type":"application/json"
      }
    })
    .then((res)=>res.json())
    .then((res)=>{
      localStorage.setItem("token", res.token)
      localStorage.setItem("userId", res.userId)
      if (res.msg === "login success") {
        toast({
          title: "Login Success.",
          description: "You are login the app.",
          status: "success",
          position: "top",
          duration: 3000,
          isClosable: true,
        });
        
          navigate("/home")

      } else {
        toast({
          title: "Login Failed.",
          description: "Something went wrong.",
          status: "error",
          position: "top",
          duration: 3000,
          isClosable: true,
        });
      }
      
    })
    .catch((err)=>{
        console.log(err)
        toast({
          title: "Login Failed.",
          description: "Something went wrong.",
          status: "error",
          position: "top",
          duration: 3000,
          isClosable: true,
        });
      
    })

    setFormData({
      email: "",
      password: "",
      role: "student",
    });
  };

  const { email, password, role } = formData;

  return (
    <div className={style.register}>
      <div className={style.star}>
        <img src={star} alt="star" />
      </div>

      <div className={style.mainlogin}>
        <h1>Login</h1>
        <div>
          <form className={style.form} onSubmit={handleSubmit}>
            <div className={style.form_login_box}>
              <label>Email</label>
              <input
                type="text"
                placeholder="Enter email"
                name="email"
                value={email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={style.form_login_box}>
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter password"
                name="password"
                value={password}
                onChange={handleChange}
                required
              />
            </div>

            <div className={style.form_login_box}>
              <label>Role</label>
              <br />
              <select name="role" value={role} onChange={handleChange}>
                <option value="student">Student</option>
                <option value="tutor">Tutor</option>
              </select>
            </div>
            <div className={style.button}>
              <button type="submit">Submit</button>
            </div>
          </form>
          <br />
          <p>
            If you want to signup, click here:{" "}
            <Link to={"/register"}>
              <span style={{ color: "orange", fontSize: "18px" }}>Signup</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Login;
