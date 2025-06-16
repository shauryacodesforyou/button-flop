import { useState } from "react";
import "./App.css";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);

  const phrases = [
    "No 🫥",
    "Are you sure? 🥲",
    "Really sure? 🫣",
    "Think again! 😙",
    "Last chance! 🫠",
    "Surely not? 🥀",
    "You might regret this! 🥹",
    "Give it another thought! 🫤",
    "Are you absolutely certain? 😵",
    "This could be a mistake! 😶",
    "Have a heart! 😔",
    "Don't be so cold! 🤕",
    "Change of heart? 💔",
    "Wouldn't you reconsider? 🥺",
    "Is that your final answer? 😶‍🌫️",
    "Try reconsidering once! 😏",
    "You can still say yes! 😞",
    "You know you want to say yes! 🥰",
    "Come on, it's just a yes! 😋",
    "Don't be shy, just say yes! 😘",
    "You know you love me! 😍",
    "I promise to be the best Valentine! 💖",
    "I have chocolates! 🍫",
    "I have flowers! 💐",
    "I have hugs and kisses! 🫶",
    "I have a cute bear! 🧸",
    "I have a surprise for you! 🎁",
    "I have a heart full of love! 💘",
    "You're breaking my heart :( 😢",
  ];

  const handleYesClick = () => setYesPressed(true);
  const handleNoClick = () => setNoCount((prev) => prev + 1);
  const getNoText = () => phrases[Math.min(noCount, phrases.length - 1)];
  const yesButtonSize = 16 + noCount * 2;

  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 640;

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "20px",
        backgroundColor: "#ffe4e6",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {yesPressed ? (
        <>
          <h1 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>
            Yay! I knew it 💕
          </h1>
          <img
            src="/final.gif"
            alt="Love"
            style={{
              width: "100%",
              maxWidth: "300px",
              borderRadius: "12px",
              marginBottom: "1rem",
            }}
          />
          <img
            src="/bear.png"
            alt="Bear"
            style={{
              width: "100%",
              maxWidth: "200px",
              marginBottom: "1rem",
            }}
          />
          <img
            src="/choco.png"
            alt="Chocolate"
            style={{
              width: "100%",
              maxWidth: "200px",
              marginBottom: "1rem",
            }}
          />
        </>
      ) : (
        <>
          <h1 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>
            Will you be my Valentine? 💖
          </h1>
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: "1rem",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: "90vw",
            }}
          >
            <button
              onClick={handleYesClick}
              style={{
                backgroundColor: "#22c55e",
                color: "white",
                padding: "10px 24px",
                borderRadius: "8px",
                fontSize: `${yesButtonSize}px`,
                fontWeight: "bold",
                whiteSpace: "nowrap",
              }}
            >
              Yes 💘
            </button>
            <button
              onClick={handleNoClick}
              style={{
                backgroundColor: "#ef4444",
                color: "white",
                padding: "10px 24px",
                borderRadius: "8px",
                fontSize: "1rem",
                fontWeight: "bold",
                whiteSpace: "nowrap",
                maxWidth: "90vw",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {getNoText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
