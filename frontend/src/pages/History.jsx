import { useEffect, useState } from "react";
import API from "../services/api";
import LogoutButton from "../components/LogoutButton"; // Import the button

export default function History() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    API.get("/pain")
      .then((res) => setLogs(res.data))
      .catch(() => {});
  }, []);

  return (
    <>
      {/* Add the Logout Button here */}
      <LogoutButton />

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@400;600;700&display=swap');

          body { margin: 0; background-color: #050505; font-family: 'Exo 2', sans-serif; overflow-x: hidden;}

          .future-container {
            min-height: 100vh;
            width: 100vw;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 80px;
            background-color: #050505;
            background-image: 
              linear-gradient(rgba(0, 242, 254, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 242, 254, 0.03) 1px, transparent 1px);
            background-size: 40px 40px;
          }

          .header-container {
            width: 90%;
            max-width: 800px;
            margin-bottom: 40px;
            border-bottom: 2px solid rgba(0, 242, 254, 0.3);
            padding-bottom: 20px;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
          }

          .title-text {
            font-size: 2.5rem;
            color: #fff;
            text-transform: uppercase;
            letter-spacing: 4px;
            margin: 0;
            text-shadow: 0 0 20px rgba(0, 242, 254, 0.3);
          }

          .record-count {
             color: #ff00ff;
             font-weight: bold;
             font-size: 1.2rem;
             letter-spacing: 2px;
          }

          .log-grid {
            width: 90%;
            max-width: 800px;
            display: flex;
            flex-direction: column;
            gap: 20px;
            padding-bottom: 50px;
          }

          .log-entry {
            background: rgba(15, 20, 30, 0.8);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-left: 5px solid #00f2fe;
            padding: 25px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
          }

          .log-entry:hover {
            transform: translateX(10px);
            background: rgba(20, 30, 50, 0.9);
            border-left-color: #ff00ff;
            box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
          }

          .log-entry::after {
            content: "";
            position: absolute;
            top: 0; left: -100%;
            width: 50%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent);
            transition: 0.5s;
          }
          .log-entry:hover::after { left: 200%; transition: 0.7s ease-in-out; }

          .log-details h3 {
            margin: 0 0 5px 0;
            color: #fff;
            font-size: 1.4rem;
            letter-spacing: 1px;
          }

          .log-meta {
            color: #888;
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 1.5px;
          }

          .intensity-display { text-align: center; }

          .intensity-circle {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: 2px solid #ff00ff;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #ff00ff;
            font-size: 1.5rem;
            font-weight: bold;
            box-shadow: 0 0 15px rgba(255,0,255,0.2);
            background: rgba(0,0,0,0.3);
          }
          
          .intensity-label {
            display: block;
            margin-top: 5px;
            font-size: 0.7rem;
            color: #ff00ff;
            opacity: 0.7;
          }
        `}
      </style>

      <div className="future-container">
        <div className="header-container">
          <h2 className="title-text">Subject History</h2>
          <span className="record-count">Records: {logs.length}</span>
        </div>

        <div className="log-grid">
          {logs.length === 0 ? (
            <div style={{color: '#555', textAlign: 'center', marginTop: '50px'}}>
              // NO ARCHIVED DATA FOUND //
            </div>
          ) : (
            logs.map((log) => (
              <div key={log.id} className="log-entry">
                <div className="log-details">
                  <h3>{log.bodyPart}</h3>
                  <div className="log-meta">Stress: {log.stressLevel}</div>
                </div>
                
                <div className="intensity-display">
                  <div className="intensity-circle">
                    {log.intensity}
                  </div>
                  <span className="intensity-label">INTENSITY</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}