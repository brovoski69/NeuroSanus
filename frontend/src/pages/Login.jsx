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
          @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@400;600;700&display=swap');

          body { margin: 0; background-color: #050505; font-family: 'Exo 2', sans-serif; overflow-x: hidden; }

          /* --- ANIMATIONS --- */

          @keyframes scanline {
            0% { top: -100%; }
            100% { top: 100%; }
          }

          @keyframes gridMove {
            0% { background-position: 0 0; }
            100% { background-position: 50px 50px; }
          }

          @keyframes slideUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes glitch-skew {
            0% { transform: skew(0deg); }
            20% { transform: skew(-2deg); }
            40% { transform: skew(2deg); }
            60% { transform: skew(-1deg); }
            80% { transform: skew(1deg); }
            100% { transform: skew(0deg); }
          }

          .future-container {
            min-height: 100vh;
            width: 100vw;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #050505;
            background-image: 
              linear-gradient(rgba(0, 242, 254, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 242, 254, 0.03) 1px, transparent 1px),
              radial-gradient(circle at center, rgba(11, 20, 38, 1) 0%, rgba(5, 5, 5, 1) 100%);
            background-size: 50px 50px, 50px 50px, 100% 100%;
            animation: gridMove 10s linear infinite;
            position: relative;
          }

          /* Scanline Overlay */
          .future-container::after {
            content: "";
            position: absolute;
            left: 0;
            width: 100%;
            height: 10%;
            background: linear-gradient(to bottom, transparent, rgba(0, 242, 254, 0.05), transparent);
            animation: scanline 8s linear infinite;
            pointer-events: none;
          }

          .holo-card {
            width: 90%;
            max-width: 480px; /* Slightly wider for modern feel */
            padding: 50px 40px;
            background: rgba(10, 14, 20, 0.85);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.05);
            box-shadow: 0 0 60px rgba(0,0,0,0.8);
            position: relative;
            z-index: 10;
            /* Sci-Fi Cut Corners */
            clip-path: polygon(
              0 0, 
              100% 0, 
              100% calc(100% - 25px), 
              calc(100% - 25px) 100%, 
              0 100%
            );
            animation: slideUp 0.8s ease-out;
          }

          /* Top Gradient Bar */
          .holo-card::before {
            content: '';
            position: absolute;
            top: 0; left: 0; width: 100%; height: 3px;
            background: linear-gradient(90deg, #00f2fe, #ff00ff);
          }

          .brand-title {
            text-align: center;
            margin-bottom: 40px;
            font-size: 36px;
            font-weight: 700;
            letter-spacing: 3px;
            text-transform: uppercase;
            position: relative;
            display: inline-block;
            width: 100%;
          }

          .brand-title:hover {
            animation: glitch-skew 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
          }

          .text-cyan {
            color: #00f2fe;
            text-shadow: 0 0 15px rgba(0, 242, 254, 0.4);
          }

          .text-magenta {
            color: #ff00ff;
            text-shadow: 0 0 15px rgba(255, 0, 255, 0.4);
          }

          .cyber-input-group {
            position: relative;
            margin-bottom: 25px;
            opacity: 0; /* For staggered animation */
            animation: slideUp 0.5s ease-out forwards;
          }
          
          /* Staggered Delays */
          .delay-1 { animation-delay: 0.2s; }
          .delay-2 { animation-delay: 0.4s; }
          .delay-3 { animation-delay: 0.6s; }

          .cyber-input {
            width: 100%;
            padding: 16px 20px;
            background: rgba(0, 0, 0, 0.4);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-left: 3px solid rgba(255, 255, 255, 0.2);
            border-radius: 4px; /* Slight radius */
            color: #fff;
            font-size: 16px;
            font-family: 'Exo 2', sans-serif;
            transition: all 0.3s ease;
            outline: none;
            box-sizing: border-box;
          }

          .cyber-input::placeholder {
            color: rgba(255, 255, 255, 0.25);
            font-size: 14px;
            letter-spacing: 1px;
          }

          .cyber-input:focus {
            border-color: #00f2fe;
            border-left-color: #00f2fe;
            box-shadow: 0 0 20px rgba(0, 242, 254, 0.15);
            background: rgba(0, 242, 254, 0.05);
            transform: translateX(5px); /* Slight move on focus */
          }

          .cyber-btn {
            width: 100%;
            padding: 18px;
            background: transparent;
            color: #00f2fe;
            border: 1px solid #00f2fe;
            border-radius: 4px;
            font-size: 16px;
            font-weight: 700;
            letter-spacing: 2px;
            text-transform: uppercase;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
            box-shadow: 0 0 10px rgba(0, 242, 254, 0.1);
          }

          /* "Scanner" effect on button hover */
          .cyber-btn::before {
            content: "";
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              90deg, 
              transparent, 
              rgba(0, 242, 254, 0.4), 
              transparent
            );
            transition: none;
          }

          .cyber-btn:hover {
            background: rgba(0, 242, 254, 0.1);
            box-shadow: 0 0 25px rgba(0, 242, 254, 0.5);
            text-shadow: 0 0 8px #00f2fe;
            transform: translateY(-2px);
          }

          .cyber-btn:hover::before {
            animation: scan-btn 0.7s linear;
          }

          @keyframes scan-btn {
            0% { left: -100%; }
            100% { left: 100%; }
          }

          .cyber-btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
            filter: grayscale(100%);
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
                {isLoading ? "AUTHENTICATING..." : "ENTER SYSTEM"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}