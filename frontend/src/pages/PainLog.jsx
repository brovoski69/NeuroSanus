import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

export default function PainLog() {
  const [pain, setPain] = useState({
    bodyPart: "",
    intensity: 5,
    stressLevel: ""
  });

  const navigate = useNavigate();

  const submitPain = async () => {
  try {
    await API.post("/pain", pain);
    alert("Pain logged");
    window.location.href = "/history";
  } catch {
    alert("Login required");
  }
};

  return (
    <>
      <h2>Log Pain</h2>
      <input placeholder="Body Part"
        onChange={e => setPain({ ...pain, bodyPart: e.target.value })}
      />
      <input type="number" min="0" max="10"
        onChange={e => setPain({ ...pain, intensity: e.target.value })}
      />
      <input placeholder="Stress Level"
        onChange={e => setPain({ ...pain, stressLevel: e.target.value })}
      />
      <button onClick={submitPain}>Save Pain</button>
    </>
  );
}