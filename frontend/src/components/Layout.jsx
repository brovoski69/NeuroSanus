export default function Layout({ children }) {
  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#F9FAFB",
      padding: "40px"
    }}>
      <h1 style={{ color: "#4F46E5" }}>🧠 NeuroSanus</h1>
      <p style={{ color: "#6B7280" }}>
        Pain Neuroscience Simulator
      </p>
      <div style={{ marginTop: 30 }}>
        {children}
      </div>
    </div>
  );
}