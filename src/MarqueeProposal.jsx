import { useState, useEffect } from "react";

const MarqueeProposal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sentences = [
  "Cutu, you light up my world like no one else. ❤️",
  "Every moment with you, Cutu, feels like pure magic ✨",
  "My world begins and ends with you in it, Cutu.",
  "You’re the reason my heart beats faster, my Cutu 💓",
  "Life feels complete whenever you’re around, Cutu.",
  "I can’t imagine my future without you, Cutu.",
  "You’re my sunshine on the darkest days, Cutu ☀️",
  "With you, Cutu, every day feels like a blessing 💖",
  "You’re the missing piece that completes my heart, Cutu.",
  "You make even the simplest moments feel extraordinary, Cutu.",
  "You make my world brighter and happier, Cutu 🥰",
  "You’re the dream I never want to wake up from, my Cutu.",
  "Will you be the love of my life forever, Cutu? 💍❤️",
];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sentences.length);
    }, 9000); // Change sentence every 9 seconds
    return () => clearInterval(interval);
  }, [sentences.length]);

  return (
    <div
      className="w-full max-w-4xl mx-auto"
      style={{
        height: "60px",
        position: "absolute",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        borderRadius: "25px",
        overflow: "hidden",
        background: "linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,192,203,0.8))",
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
        border: "3px solid #ff69b4",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 15px",
        zIndex: 10,
      }}
    >
      <div
        style={{
          whiteSpace: "nowrap",
          position: "absolute",
          animation: "marquee 15s linear infinite",
          display: "flex",
          width: "200%",
        }}
        key={currentIndex}
      >
        <span
          style={{
            fontSize: "2rem",
            fontFamily: "Charm, serif",
            fontStyle: "normal",
            fontWeight: "700",
            color: "#191a19",
            textShadow: "0 4px 8px rgba(0, 0, 0, 0.6)",
            paddingRight: "100px",
            flexShrink: 0,
            minWidth: "600px",
            display: "inline-block",
          }}
        >
          {sentences[currentIndex]}
        </span>
        <span
          style={{
            fontSize: "2rem",
            fontFamily: "Charm, serif",
            fontStyle: "normal",
            fontWeight: "700",
            color: "#191a19",
            textShadow: "0 4px 8px rgba(0, 0, 0, 0.6)",
            paddingRight: "100px",
            flexShrink: 0,
            minWidth: "600px",
            display: "inline-block",
          }}
        >
          {sentences[currentIndex]}
        </span>
      </div>
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default MarqueeProposal;
