import { useState } from "react";
import API from "../services/api";

export default function PainLog() {
  const [pain, setPain] = useState({
    bodyPart: "",
    intensity: 5,
    stressLevel: "",
  });

  const submitPain = async () => {
    try {
      await API.post("/pain", pain);
      alert("Pain logged successfully");
      window.location.href = "/history";
    } catch (err) {
      alert("Login required");
    }
  };

  return (
    <div
      style={{
        maxWidth: 500,
        margin: "auto",
        marginTop: 80,
        background: "#fff",
        padding: 30,
        borderRadius: 12,
        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
      }}
    >
      <h2 style={{ marginBottom: 20 }}>Log Your Pain</h2>

      <input
        placeholder="Body Part"
        value={pain.bodyPart}
        onChange={(e) => setPain({ ...pain, bodyPart: e.target.value })}
        style={{ width: "100%", padding: 10, marginBottom: 12 }}
      />

      <input
        type="number"
        min="0"
        max="10"
        value={pain.intensity}
        onChange={(e) => setPain({ ...pain, intensity: e.target.value })}
        style={{ width: "100%", padding: 10, marginBottom: 12 }}
      />

      <input
        placeholder="Stress Level"
        value={pain.stressLevel}
        onChange={(e) => setPain({ ...pain, stressLevel: e.target.value })}
        style={{ width: "100%", padding: 10, marginBottom: 20 }}
      />

      <button
        onClick={submitPain}
        style={{
          width: "100%",
          padding: 12,
          background: "#16A34A",
          color: "#fff",
          border: "none",
          borderRadius: 6,
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Save Pain
      </button>
    </div>
  );
}