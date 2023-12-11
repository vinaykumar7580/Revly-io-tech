import style from "../Styles/register.module.css";
import star from "../Components/picture1.jpg";
import starvertical from "../Components/picture4.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { useToast } from "@chakra-ui/react";



function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
    classgrade: "",
    language: "",
    subject: [],
  });

  const toast = useToast();
  const navigate = useNavigate();

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubject = (index, value) => {
    const newSubject = [...formData.subject];
    newSubject[index] = value;
    setFormData({ ...formData, subject: newSubject });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://revly-backend.onrender.com/auth/register",{
      method:"POST",
      body:JSON.stringify(formData),
      headers:{
        "Content-Type":"application/json"
      }
    })
    .then((res)=>res.json())
    .then((res)=>{
      if (res.msg === "register success") {
        toast({
          title: "Register Success.",
          description: "We've created your account for you.",
          status: "success",
          position: "top",
          duration: 3000,
          isClosable: true,
        });
        navigate("/")
      } else {
        toast({
          title: "Register Failed.",
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
          title: "Register Failed.",
          description: "Something went wrong.",
          status: "error",
          position: "top",
          duration: 3000,
          isClosable: true,
        });
      
    })

    

    console.log("data", formData);

    setFormData({
      name: "",
      email: "",
      password: "",
      role: "student",
      classgrade: "",
      language: "",
      subject: [],
    });
  };

  const { name, email, password, role, classgrade, language, subject } =
    formData;

  return (
    <div className={style.register}>
      <div className={style.star}>
        <img src={star} alt="star" />
      </div>

      <div className={style.main}>
        <h1>Sign Up</h1>
        <div>
          <form className={style.form} onSubmit={handleSubmit}>
            <div className={style.form_div_box}>
              <div style={{ width: "50%" }}>
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Enter name"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div style={{ width: "50%" }}>
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
            </div>

            <div className={style.form_div_box}>
              <div style={{ width: "50%" }}>
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
              <div style={{ width: "50%" }}>
                <label>Role</label>
                <br />
                <select name="role" value={role} onChange={handleChange}>
                  <option value="student">Student</option>
                  <option value="tutor">Tutor</option>
                </select>
              </div>
            </div>

            <div className={style.form_div_box}>
              <div style={{ width: "50%" }}>
                <label>Class Grade</label>
                <input
                  type="text"
                  placeholder="Enter class grade"
                  name="classgrade"
                  value={classgrade}
                  onChange={handleChange}
                  required
                />
              </div>
              <div style={{ width: "50%" }}>
                <label>Language</label>
                <input
                  type="text"
                  placeholder="Enter language"
                  name="language"
                  value={language}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className={style.form_div_box}>
              <div style={{ width: "100%" }}>
                <label>Subjects</label>
                <div className={style.subject}>
                  {formData.subject.map((el, index) => (
                    <div key={index}>
                      <input
                        type="text"
                        placeholder="Enter subject"
                        value={el}
                        onChange={(e) => handleSubject(index, e.target.value)}
                      />
                      <br />
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setFormData({
                      ...formData,
                      subject: [...formData.subject, ""],
                    })
                  }
                >
                  Add Subject
                </button>
              </div>
            </div>
            <div className={style.button}>
              <button type="submit">Submit</button>
            </div>
          </form>
          <br />
          <p>
            If you want to login, click here:{" "}
            <Link to={"/"}>
              <span style={{ color: "orange", fontSize: "18px" }}>Login</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Register;
