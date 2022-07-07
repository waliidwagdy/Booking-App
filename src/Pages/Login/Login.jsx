import { useContext, useState } from "react";
import axios from "axios";
import { loginFail, loginStart, loginSuccess } from "../../Context/actionTypes";
import { AuthContext } from "../../Context/AuthContext";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { loading, error, dispatch } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = async (e) => {
    try {
      e.preventDefault();
      dispatch({ type: loginStart });
      const response = await axios.post(
        "https://booking-api-backend.herokuapp.com/api/auth/login",
        { email, password }
      );
      dispatch({ type: loginSuccess, payload: response.data.details });
      navigate("/");
    } catch (e) {
      dispatch({ type: loginFail, payload: e.response.data });
    }
  };
  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="email"
          placeholder="Email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="lInput"
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="lInput"
        />
        <button disabled={loading} onClick={handleClick} className="lButton">
          Login
        </button>
        {error && <span style={{ color: "red" }}>{error.message}</span>}
      </div>
    </div>
  );
};

export default Login;
