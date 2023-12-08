import style from "../Styles/register.module.css";
import star from "../Components/picture1.jpg";
import starvertical from "../Components/picture4.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role:"student"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("data", formData);

    setFormData({
      email: "",
      password: "",
      role:"student"
    });
  };

  const { email, password, role} = formData;

  return (
    <div className={style.register}>
      <div className={style.star}>
        <img src={star} alt="star" />
      </div>

      <div className={style.main}>
        <h1>Login</h1>
        <div>
          <form className={style.form} onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              type="text"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              value={password}
              onChange={handleChange}
              required
            />

            <label>Role</label>
            <br />
            <select name="role" value={role} onChange={handleChange}>
              <option value="student">Student</option>
              <option value="tutor">Tutor</option>
            </select>

            <button type="submit">Submit</button>
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
