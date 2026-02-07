import { useState } from "react";
import API from "../services/api";

export default function PainLog() {
  const [pain, setPain] = useState({
    bodyPart: "",
    intensity: 5,
    stressLevel: ""
  });

  const submitPain = async () => {
    try {
      await API.post("/pain", pain);
      alert("Pain logged successfully");
    } catch (err) {
      alert(err.response?.data?.message || "Login required");
    }
  };

  return (
    <div>
      <h2>Log Pain</h2>

      <input
        placeholder="Body Part"
        value={pain.bodyPart}
        onChange={e => setPain({ ...pain, bodyPart: e.target.value })}
      />

      <input
        type="number"
        min="0"
        max="10"
        value={pain.intensity}
        onChange={e => setPain({ ...pain, intensity: e.target.value })}
      />

      <input
        placeholder="Stress Level"
        value={pain.stressLevel}
        onChange={e => setPain({ ...pain, stressLevel: e.target.value })}
      />

      <button onClick={submitPain}>Save Pain</button>
    </div>
  );
}