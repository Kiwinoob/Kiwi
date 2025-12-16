import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#050505", // hud-black
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "4px", // rounded-sm
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 21V3"
            stroke="#84cc16" // kiwi-500
            strokeWidth="3"
            strokeLinecap="square"
          />
          <path
            d="M20 21L9 11.5"
            stroke="#84cc16"
            strokeWidth="3"
            strokeLinecap="square"
          />
          <path
            d="M20 3L9 13"
            stroke="#84cc16"
            strokeWidth="3"
            strokeLinecap="square"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
