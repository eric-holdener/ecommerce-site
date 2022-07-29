import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

const validUser = {
  id: 1,
  firstName: "Eric",
  lastName: "Holdener",
  email: "eholdener12@gmail.com",
  password: "123"
}

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showLoginError, setShowLoginError] = useState(false);
  const { setLoggedInUser } = useContext(UserContext);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    if (email === validUser.email && password === validUser.password) {
      setShowLoginError(false);
      setLoggedInUser(validUser);
      navigate("/");
    } else {
      setShowLoginError(true);
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </label>
        <label>
          Password:
          <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <input type="submit" value="Login" />
      </form>
      {showLoginError && <div>User not found.</div>}
    </>
  )
}