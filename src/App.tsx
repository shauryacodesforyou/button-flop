import { useState } from "react";
import "./App.css";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
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
      "You're breaking my heart :( 😢"
];,
    ];

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
      textAlign: "center",
      backgroundColor: "#ffe4e6",
      overflow: "hidden",
    }}
  >
    {!yes ? (
      <>
        <h1
          style={{
            fontSize: "2rem",
            marginBottom: "1.5rem",
          }}
        >
          Will you be my Valentine? 💖
        </h1>

        <div
          style={{
            display: "flex",
            flexDirection: window.innerWidth < 640 ? "column" : "row",
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
              fontSize: "1rem",
              fontWeight: "bold",
              whiteSpace: "nowrap",
              maxWidth: "100%",
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
            {noText}
          </button>
        </div>
      </>
    ) : (
      <>
        <h1
          style={{
            fontSize: "2rem",
            marginBottom: "1.5rem",
          }}
        >
          Yay! I knew it 💕
        </h1>
        <img
          src="/final.gif"
          alt="Love"
          style={{
            width: "100%",
            maxWidth: "300px",
            borderRadius: "12px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          }}
        />
      </>
    )}
  </div>
);
