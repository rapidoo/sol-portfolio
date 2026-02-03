import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #FFF8F0 0%, #FFF0E0 100%)",
          borderRadius: "40px",
        }}
      >
        <svg viewBox="0 0 100 100" width="140" height="140">
          {/* Rayons */}
          <g fill="#FF8C42">
            <path d="M50 5 Q55 20 50 25 Q45 20 50 5" opacity="0.9" />
            <path d="M50 95 Q45 80 50 75 Q55 80 50 95" opacity="0.9" />
            <path d="M5 50 Q20 45 25 50 Q20 55 5 50" opacity="0.9" />
            <path d="M95 50 Q80 55 75 50 Q80 45 95 50" opacity="0.9" />
            <path d="M18 18 Q30 25 32 32 Q25 30 18 18" opacity="0.85" />
            <path d="M82 18 Q70 25 68 32 Q75 30 82 18" opacity="0.85" />
            <path d="M18 82 Q30 75 32 68 Q25 70 18 82" opacity="0.85" />
            <path d="M82 82 Q70 75 68 68 Q75 70 82 82" opacity="0.85" />
            <path d="M30 8 Q38 22 36 28 Q32 22 30 8" opacity="0.8" />
            <path d="M70 8 Q62 22 64 28 Q68 22 70 8" opacity="0.8" />
            <path d="M8 30 Q22 38 28 36 Q22 32 8 30" opacity="0.8" />
            <path d="M92 30 Q78 38 72 36 Q78 32 92 30" opacity="0.8" />
            <path d="M8 70 Q22 62 28 64 Q22 68 8 70" opacity="0.8" />
            <path d="M92 70 Q78 62 72 64 Q78 68 92 70" opacity="0.8" />
            <path d="M30 92 Q38 78 36 72 Q32 78 30 92" opacity="0.8" />
            <path d="M70 92 Q62 78 64 72 Q68 78 70 92" opacity="0.8" />
          </g>
          {/* Centre avec dégradé */}
          <defs>
            <radialGradient id="sg" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFB347" />
              <stop offset="100%" stopColor="#FF8C42" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="22" fill="url(#sg)" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
