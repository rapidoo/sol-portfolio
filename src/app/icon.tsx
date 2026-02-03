import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
        }}
      >
        <svg
          viewBox="0 0 100 100"
          width="32"
          height="32"
          style={{ filter: "drop-shadow(0 0 2px rgba(255, 140, 66, 0.5))" }}
        >
          {/* Rayons */}
          <g fill="#FF8C42">
            <path d="M50 5 Q55 20 50 25 Q45 20 50 5" />
            <path d="M50 95 Q45 80 50 75 Q55 80 50 95" />
            <path d="M5 50 Q20 45 25 50 Q20 55 5 50" />
            <path d="M95 50 Q80 55 75 50 Q80 45 95 50" />
            <path d="M18 18 Q30 25 32 32 Q25 30 18 18" />
            <path d="M82 18 Q70 25 68 32 Q75 30 82 18" />
            <path d="M18 82 Q30 75 32 68 Q25 70 18 82" />
            <path d="M82 82 Q70 75 68 68 Q75 70 82 82" />
            <path d="M30 8 Q38 22 36 28 Q32 22 30 8" />
            <path d="M70 8 Q62 22 64 28 Q68 22 70 8" />
            <path d="M8 30 Q22 38 28 36 Q22 32 8 30" />
            <path d="M92 30 Q78 38 72 36 Q78 32 92 30" />
            <path d="M8 70 Q22 62 28 64 Q22 68 8 70" />
            <path d="M92 70 Q78 62 72 64 Q78 68 92 70" />
            <path d="M30 92 Q38 78 36 72 Q32 78 30 92" />
            <path d="M70 92 Q62 78 64 72 Q68 78 70 92" />
          </g>
          {/* Centre */}
          <circle cx="50" cy="50" r="22" fill="#FFB347" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
