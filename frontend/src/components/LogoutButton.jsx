export default function LogoutButton() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <>
      <style>
        {`
          .logout-btn {
            position: fixed; /* Fixed ensures it stays in corner even on scroll */
            top: 30px;
            right: 30px;
            padding: 12px 24px;
            background: rgba(10, 0, 0, 0.6);
            backdrop-filter: blur(5px);
            color: #ef4444; /* Red Text */
            border: 1px solid #ef4444;
            border-radius: 4px;
            font-family: 'Exo 2', sans-serif;
            font-weight: 700;
            font-size: 14px;
            letter-spacing: 2px;
            text-transform: uppercase;
            cursor: pointer;
            z-index: 1000; /* Ensure it floats above everything */
            transition: all 0.3s ease;
            clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
          }

          .logout-btn:hover {
            background: rgba(239, 68, 68, 0.15);
            box-shadow: 0 0 20px rgba(239, 68, 68, 0.6);
            text-shadow: 0 0 8px #ef4444;
            transform: translateY(-2px);
          }

          .logout-btn:active {
            transform: translateY(0);
          }
        `}
      </style>
      <button onClick={handleLogout} className="logout-btn">
        // Abort Session
      </button>
    </>
  );
}