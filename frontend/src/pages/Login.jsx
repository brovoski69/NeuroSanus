import { useState } from "react";
import API from "../services/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await API.post("/users/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      window.location.href = "/pain";
    } catch (err) {
      alert("Invalid credentials");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@400;700&display=swap');

          body {
            margin: 0;
            padding: 0;
            background-color: #050505;
            overflow: hidden; /* Prevent scrollbars from animations */
          }

          /* --- ANIMATIONS --- */
          
          @keyframes gridMove {
            0% { background-position: 0 0, 0 0, 0 0; }
            100% { background-position: 50px 50px, 50px 50px, 50px 50px; }
          }

          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
          }

          @keyframes scanline {
            0% { top: -100%; }
            100% { top: 100%; }
          }

          @keyframes slideUpFade {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes flicker {
            0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
              text-shadow: 0 0 5px rgba(0, 242, 254, 0.5), 0 0 10px rgba(0, 242, 254, 0.3);
              opacity: 1;
            }
            20%, 24%, 55% {
              text-shadow: none;
              opacity: 0.5;
            }
          }

          @keyframes pulse-border {
            0% { border-color: rgba(0, 242, 254, 0.2); box-shadow: 0 0 10px rgba(0, 242, 254, 0.1); }
            50% { border-color: rgba(0, 242, 254, 0.8); box-shadow: 0 0 20px rgba(0, 242, 254, 0.4); }
            100% { border-color: rgba(0, 242, 254, 0.2); box-shadow: 0 0 10px rgba(0, 242, 254, 0.1); }
          }

          /* --- LAYOUT --- */

          .future-container {
            min-height: 100vh;
            width: 100vw;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #050505;
            /* Moving Grid Background */
            background-image: 
              linear-gradient(rgba(0, 242, 254, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 242, 254, 0.05) 1px, transparent 1px),
              radial-gradient(at 50% 50%, #0b1021 0%, #050505 100%);
            background-size: 50px 50px, 50px 50px, 100% 100%;
            animation: gridMove 4s linear infinite;
            font-family: 'Exo 2', sans-serif;
            position: relative;
          }

          /* CRT Scanline Overlay */
          .future-container::after {
            content: "";
            position: absolute;
            left: 0;
            width: 100%;
            height: 20%;
            background: linear-gradient(to bottom, transparent, rgba(0, 242, 254, 0.1), transparent);
            animation: scanline 6s linear infinite;
            pointer-events: none;
            z-index: 5;
          }

          .holo-card {
            width: 100%;
            max-width: 380px;
            padding: 40px;
            background: rgba(10, 15, 25, 0.7);
            backdrop-filter: blur(15px);
            -webkit-backdrop-filter: blur(15px);
            border-radius: 20px;
            /* Dynamic Border Pulse */
            border: 1px solid rgba(0, 242, 254, 0.1); 
            box-shadow: 0 20px 50px rgba(0,0,0,0.6);
            position: relative;
            z-index: 10;
            animation: float 6s ease-in-out infinite;
          }

          /* --- TYPOGRAPHY --- */

          .brand-title {
            text-align: center;
            margin-bottom: 30px;
            font-size: 32px;
            font-weight: 700;
            letter-spacing: 3px;
            text-transform: uppercase;
            animation: slideUpFade 0.8s ease-out forwards;
          }

          .text-cyan {
            color: #00f2fe;
            /* Subtle flicker on the Neuro part */
            animation: flicker 4s infinite alternate;
          }

          .text-magenta {
            color: #ff00ff;
            text-shadow: 0 0 15px rgba(255, 0, 255, 0.6);
          }

          /* --- INPUTS --- */

          .cyber-input-group {
            position: relative;
            margin-bottom: 25px;
            opacity: 0; /* Start hidden for entrance animation */
          }

          /* Staggered Animation Delays */
          .delay-1 { animation: slideUpFade 0.6s ease-out 0.2s forwards; }
          .delay-2 { animation: slideUpFade 0.6s ease-out 0.4s forwards; }
          .delay-3 { animation: slideUpFade 0.6s ease-out 0.6s forwards; }

          .cyber-input {
            width: 100%;
            padding: 15px;
            background: rgba(0, 0, 0, 0.4);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 8px;
            color: #fff;
            font-size: 16px;
            font-family: 'Exo 2', sans-serif;
            transition: all 0.3s ease;
            outline: none;
            box-sizing: border-box;
          }

          .cyber-input::placeholder {
            color: rgba(255, 255, 255, 0.3);
            font-size: 14px;
            letter-spacing: 1px;
          }

          .cyber-input:focus {
            border-color: #00f2fe;
            background: rgba(0, 10, 20, 0.8);
            /* Pulse animation on focus */
            animation: pulse-border 2s infinite;
          }

          /* --- BUTTON --- */

          .cyber-btn {
            width: 100%;
            padding: 15px;
            background: transparent;
            color: #00f2fe;
            border: 1px solid #00f2fe;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 700;
            letter-spacing: 2px;
            text-transform: uppercase;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
            margin-top: 10px;
            box-shadow: 0 0 10px rgba(0, 242, 254, 0.1);
          }

          /* Button Fill Effect on Hover */
          .cyber-btn::before {
            content: "";
            position: absolute;
            top: 0; left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(0, 242, 254, 0.2), transparent);
            transition: left 0.5s;
          }

          .cyber-btn:hover {
            background: rgba(0, 242, 254, 0.1);
            box-shadow: 0 0 20px rgba(0, 242, 254, 0.6);
            transform: translateY(-2px);
            text-shadow: 0 0 8px #00f2fe;
          }

          .cyber-btn:hover::before {
            left: 100%;
          }

          .cyber-btn:disabled {
            opacity: 0.5;
            cursor: wait;
            border-color: #555;
            color: #888;
            box-shadow: none;
          }
        `}
      </style>

      <div className="future-container">
        <div className="holo-card">
          <h2 className="brand-title">
            <span className="text-cyan">Neuro</span>
            <span className="text-magenta">Sanus</span>
          </h2>
          
          <form onSubmit={handleLogin}>
            <div className="cyber-input-group delay-1">
              <input
                className="cyber-input"
                type="email"
                placeholder="USER_ID // EMAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="cyber-input-group delay-2">
              <input
                className="cyber-input"
                type="password"
                placeholder="ACCESS_CODE // PASSWORD"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="cyber-input-group delay-3">
              <button 
                className="cyber-btn" 
                type="submit" 
                disabled={isLoading}
              >
                {isLoading ? "INITIALIZING..." : "ENTER SYSTEM"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}