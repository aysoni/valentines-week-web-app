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
      style={{
        width: "50%",
        height: "75px",
        margin: "50px auto",
        borderRadius: "25px",
        overflow: "hidden",
        position: "relative",
        background: "transparent",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
        border: "4px solid #ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          whiteSpace: "nowrap",
          position: "absolute",
          animation: "marquee 10s linear infinite",
        }}
        key={currentIndex}
      >
        <span
          style={{
            fontSize: "2rem",
            fontFamily: "Charm, serif", 
            // fontFamily: "Beau Rivage, serif", 
            fontStyle: "normal",
            fontWeight: "700",
            color: "#191a19",
            textShadow: "0 4px 8px rgba(0, 0, 0, 0.6)",
          }}
        >
          {sentences[currentIndex]}
        </span>
      </div>
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%); /* Start fully off-screen to the right */
          }
          100% {
            transform: translateX(-100%); /* End fully off-screen to the left */
          }
        }
      `}</style>
    </div>
  );
};

export default MarqueeProposal;
