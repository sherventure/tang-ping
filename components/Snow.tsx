"use client";

import { useEffect, useState } from "react";

interface Flake {
  id: number;
  left: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
}

export default function Snow() {
  const [flakes, setFlakes] = useState<Flake[]>([]);

  useEffect(() => {
    setFlakes(
      Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 6 + 3,
        opacity: Math.random() * 0.5 + 0.4,
        duration: Math.random() * 10 + 8,
        delay: Math.random() * 15,
      }))
    );
  }, []);

  return (
    <>
      <style>{`
        @keyframes tp-snow {
          0%   { transform: translateY(-30px) translateX(0px); opacity: 0; }
          5%   { opacity: 1; }
          50%  { transform: translateY(50vh) translateX(20px); }
          95%  { opacity: 0.8; }
          100% { transform: translateY(105vh) translateX(-10px); opacity: 0; }
        }
      `}</style>

      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        {flakes.map((f) => (
          <span
            key={f.id}
            style={{
              position: "absolute",
              top: 0,
              left: `${f.left}%`,
              width: f.size,
              height: f.size,
              borderRadius: "50%",
              background: "white",
              opacity: f.opacity,
              animation: `tp-snow ${f.duration}s linear ${f.delay}s infinite`,
            }}
          />
        ))}
      </div>
    </>
  );
}
