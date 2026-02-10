import { useState } from "react";
import API from "../services/api";
import LogoutButton from "../components/LogoutButton"; // Import the button

export default function PainLog() {
  const [pain, setPain] = useState({
    bodyPart: "",
    intensity: 5,
    stressLevel: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitPain = async () => {
    setIsSubmitting(true);
    try {
      await API.post("/pain", pain);
      setTimeout(() => {
        window.location.href = "/history";
      }, 500);
    } catch (err) {
      alert("Login required");
      setIsSubmitting(false);
    }
  };

  const sliderPercentage = (pain.intensity / 10) * 100;

  return (
    <>
      {/* Add the Logout Button here */}
      <LogoutButton />

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@400;600;700&display=swap');

          body { margin: 0; background-color: #050505; font-family: 'Exo 2', sans-serif; overflow-x: hidden; }

          .future-container {
            min-height: 100vh;
            width: 100vw;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #050505;
            background-image: 
              linear-gradient(rgba(0, 242, 254, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 242, 254, 0.03) 1px, transparent 1px);
            background-size: 40px 40px;
          }

          .holo-card {
            width: 90%;
            max-width: 800px;
            padding: 60px;
            background: rgba(10, 14, 20, 0.85);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 4px;
            box-shadow: 0 0 60px rgba(0,0,0,0.9);
            position: relative;
            clip-path: polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%);
          }

          .holo-card::before {
            content: '';
            position: absolute;
            top: 0; left: 0; width: 100%; height: 3px;
            background: linear-gradient(90deg, #00f2fe, #ff00ff);
            z-index: 2;
          }

          .header-text {
            text-align: left;
            color: #fff;
            margin-bottom: 40px;
            text-transform: uppercase;
            letter-spacing: 4px;
            font-size: 2rem;
            border-bottom: 1px solid rgba(255,255,255,0.1);
            padding-bottom: 20px;
          }
          
          .header-text span { color: #ff00ff; text-shadow: 0 0 15px rgba(255,0,255,0.5); }

          .input-row { margin-bottom: 30px; }

          .label-text {
            color: #00f2fe;
            font-size: 14px;
            font-weight: 600;
            letter-spacing: 1.5px;
            margin-bottom: 12px;
            display: block;
            text-transform: uppercase;
          }

          .cyber-input {
            width: 100%;
            padding: 18px;
            background: rgba(0, 0, 0, 0.3);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-left: 3px solid rgba(255, 255, 255, 0.3);
            color: #fff;
            font-size: 18px;
            font-family: 'Exo 2', sans-serif;
            transition: 0.3s;
            outline: none;
            box-sizing: border-box;
          }

          .cyber-input:focus {
            border-color: #00f2fe;
            border-left-color: #00f2fe;
            background: rgba(0, 242, 254, 0.05);
            box-shadow: 0 0 20px rgba(0, 242, 254, 0.1);
          }

          .intensity-wrapper {
            display: flex;
            align-items: center;
            gap: 25px;
            background: rgba(0,0,0,0.3);
            padding: 25px;
            border: 1px solid rgba(255,255,255,0.05);
            border-radius: 8px;
          }

          .intensity-value {
             font-size: 2.2rem;
             color: #ff00ff;
             font-weight: bold;
             min-width: 50px;
             text-align: center;
             text-shadow: 0 0 15px rgba(255,0,255,0.6);
             font-variant-numeric: tabular-nums;
          }

          input[type=range] {
            -webkit-appearance: none;
            width: 100%;
            background: transparent;
            height: 8px;
            border-radius: 4px;
            outline: none;
            cursor: pointer;
          }

          input[type=range]::-webkit-slider-thumb {
            -webkit-appearance: none;
            height: 24px;
            width: 24px;
            border-radius: 50%;
            background: #fff;
            box-shadow: 0 0 15px #ff00ff, 0 0 5px #00f2fe;
            margin-top: -8px;
            transition: transform 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            border: 2px solid #ff00ff;
          }

          input[type=range]:hover::-webkit-slider-thumb { transform: scale(1.1); background: #fff; }
          input[type=range]:active::-webkit-slider-thumb { transform: scale(1.3); box-shadow: 0 0 25px #ff00ff; }
          input[type=range]::-webkit-slider-runnable-track { width: 100%; height: 8px; border-radius: 4px; }

          .cyber-btn {
            width: 100%;
            padding: 20px;
            margin-top: 20px;
            background: transparent;
            color: #00f2fe;
            font-weight: bold;
            font-size: 1.1rem;
            border: 1px solid #00f2fe;
            cursor: pointer;
            text-transform: uppercase;
            letter-spacing: 3px;
            transition: 0.3s;
          }

          .cyber-btn:hover {
            background: #00f2fe;
            color: #000;
            box-shadow: 0 0 40px rgba(0, 242, 254, 0.6);
          }
        `}
      </style>

      <div className="future-container">
        <div className="holo-card">
          <h2 className="header-text">Log <span>Anomaly</span></h2>

          <div className="input-row">
            <label className="label-text">Affected Sector (Body Part)</label>
            <input
              className="cyber-input"
              placeholder="Input sector data..."
              value={pain.bodyPart}
              onChange={(e) => setPain({ ...pain, bodyPart: e.target.value })}
            />
          </div>

          <div className="input-row">
            <label className="label-text">Pain Intensity Level</label>
            <div className="intensity-wrapper">
              <span className="intensity-value">{pain.intensity}</span>
              <input
                type="range"
                min="0"
                max="10"
                step="1"
                value={pain.intensity}
                onChange={(e) => setPain({ ...pain, intensity: e.target.value })}
                style={{
                  background: `linear-gradient(to right, #00f2fe 0%, #ff00ff ${sliderPercentage}%, rgba(255, 255, 255, 0.1) ${sliderPercentage}%, rgba(255, 255, 255, 0.1) 100%)`
                }}
              />
            </div>
          </div>

          <div className="input-row">
            <label className="label-text">Psychological Load (Stress)</label>
            <input
              className="cyber-input"
              placeholder="Input stress parameters..."
              value={pain.stressLevel}
              onChange={(e) => setPain({ ...pain, stressLevel: e.target.value })}
            />
          </div>

          <button className="cyber-btn" onClick={submitPain}>
            {isSubmitting ? "PROCESSING..." : "INITIATE LOG"}
          </button>
        </div>
      </div>
    </>
  );
}