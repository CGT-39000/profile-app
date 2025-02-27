import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const AuthForm = ({isRegister = false}) => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [errors, setErrors] = useState("");
  const [successMessage, setSucessMessage] = useState("");

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", data.username.trim());
    formData.append("password", data.username.trim());
    if (isRegister) {
      formData.append("email", data.email.trim());
    }
    formData.append("action", isRegister ? "register" : "login" );

    try {
      const response = await fetch(
        "https://web.ics.purdue.edu/~maddy/profile-app/auth.php",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      if (data.success) {
        setData({
          username: "",
          email: "",
          password: "",
        });
        setSucessMessage(data.success);
        console.log(successMessage);
        setErrors("");
        navigate("/");
      } else {
        setErrors(data.error);
        setSucessMessage("");
      }
    } catch (error) {
      setErrors(error.message);
      setSucessMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="profile-form">
      <input
        type="text"
        name="username"
        placeholder="Username"
        required
        value={data.username}
        onChange={handleChange}
      ></input>
      <br />
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        value={data.email}
        onChange={handleChange}
      ></input>
      <br />
      <input
        type="password"
        id="pass"
        name="password"
        placeholder="Password"
        minLength={8}
        onChange={handleChange}
      />
      <br />
      <button
        type="submit"
        disabled={
          data.username === "" ||
          data.email === "" ||
          data.password === "" ||
          (isRegister && data.email.trim()) === ""
            ? true
            : false
        }
      >
        Submit
      </button>
      {errors && <p>{errors}</p>}
    </form>
  );
};

AuthForm.propTypes = {
  isRegister: PropTypes.bool.isRequired,
};

export default AuthForm;
