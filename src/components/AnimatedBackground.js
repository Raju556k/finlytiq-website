import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../assets/sample-animation.json";

export default function AnimatedBackground() {
  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      zIndex: 0,
      pointerEvents: "none",
      overflow: "hidden"
    }}>
      {/* Reduced blur overlay for better content visibility */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "rgba(255,255,255,0.85)",
          backdropFilter: "blur(2px)",
          zIndex: 1,
        }}
      />
      <Player
        autoplay
        loop
        src={animationData}
        style={{ width: "100vw", height: "100vh", position: "absolute", top: 0, left: 0, zIndex: 0 }}
      />
    </div>
  );
} 