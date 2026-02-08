import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
  try {
    const res = await API.post("/users/login", { email, password });
    localStorage.setItem("token", res.data.token);
    window.location.href = "/pain"; // 🔥 IMPORTANT
  } catch (err) {
    alert("Invalid credentials");
  }
};

  return (
    <form onSubmit={handleLogin}>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button>Login</button>
    </form>
  );
}