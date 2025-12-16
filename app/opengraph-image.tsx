import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Kee Hui - Web Developer Portfolio";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Fonts
// We'll try to use a standard font for simplicity and reliability in this environment.
// If needed, we could fetch Google Fonts here.

export default async function Image() {
  // Fetch fonts (optional, for better Cyber/HUD look)
  const rajdhaniBold = await fetch(
    new URL(
      "https://fonts.gstatic.com/s/rajdhani/v15/L10kDFQnOp3p7F5mv6WpPBtt.ttf",
      import.meta.url
    )
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#050505",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background Grid Pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            opacity: 0.5,
          }}
        />

        {/* Radial Gradient Glow */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "600px",
            height: "600px",
            background:
              "radial-gradient(circle, rgba(132, 204, 22, 0.15) 0%, transparent 70%)",
            filter: "blur(40px)",
            transform: "translate(50%, -50%)",
            borderRadius: "50%",
          }}
        />

        {/* Main Content Container */}
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "60px",
            position: "relative",
            zIndex: 10,
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              width: "100%",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              {/* Logo */}
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  background: "#84cc16",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#000",
                }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 21V3"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="square"
                  />
                  <path
                    d="M20 21L9 11.5"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="square"
                  />
                  <path
                    d="M20 3L9 13"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="square"
                  />
                </svg>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "#fff",
                    letterSpacing: "0.1em",
                    fontFamily: '"Rajdhani"',
                  }}
                >
                  KIWI_OS
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "14px",
                    color: "#84cc16",
                    marginTop: "4px",
                    fontFamily: '"Rajdhani"',
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                      stroke="none"
                    />
                  </svg>
                  <span>SYSTEM ONLINE</span>
                </div>
              </div>
            </div>

            {/* Region Badge */}
            <div
              style={{
                padding: "8px 16px",
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "4px",
                color: "#94a3b8",
                fontSize: "14px",
                fontFamily: '"Rajdhani"',
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span>SINGAPORE_SG</span>
            </div>
          </div>

          {/* Main Body */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexGrow: 1,
              marginTop: "40px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  padding: "4px 12px",
                  backgroundColor: "rgba(132, 204, 22, 0.1)",
                  border: "1px solid #84cc16",
                  color: "#84cc16",
                  borderRadius: "999px",
                  fontSize: "14px",
                  fontFamily: '"Rajdhani"',
                  alignSelf: "flex-start",
                  marginBottom: "16px",
                  letterSpacing: "0.1em",
                }}
              >
                v2.4 UPDATE
              </div>
              <div
                style={{
                  fontSize: "90px",
                  fontWeight: "bold",
                  color: "#fff",
                  lineHeight: 0.9,
                  fontFamily: '"Rajdhani"',
                }}
              >
                KIWI
              </div>
              <div
                style={{
                  fontSize: "90px",
                  fontWeight: "bold",
                  background: "linear-gradient(to right, #84cc16, #34d399)",
                  backgroundClip: "text",
                  color: "transparent",
                  lineHeight: 0.9,
                  fontFamily: '"Rajdhani"',
                }}
              >
                ORPIN
              </div>

              <div
                style={{
                  height: "4px",
                  width: "120px",
                  backgroundColor: "#84cc16",
                  margin: "24px 0",
                }}
              />

              <div
                style={{
                  fontSize: "30px",
                  color: "#94a3b8",
                  fontFamily: '"Rajdhani"',
                  lineHeight: 1.4,
                }}
              >
                Full Stack Engineer &<br />
                Creative Technologist
              </div>
            </div>

            {/* Visual Abstract Shape (Approximation of Wireframe) */}
            <div
              style={{
                width: "400px",
                height: "400px",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Outer Rings */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  border: "2px dashed rgba(255,255,255,0.1)",
                  borderRadius: "50%",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: "48px",
                  border: "1px dotted rgba(132, 204, 22, 0.3)",
                  borderRadius: "50%",
                }}
              />

              {/* Center Isometric Box */}
              <div
                style={{
                  position: "relative",
                  width: "160px",
                  height: "160px",
                  display: "flex",
                }}
              >
                {/* We draw a simple SVG Cube/Shape here */}
                <svg
                  width="160"
                  height="160"
                  viewBox="0 0 100 100"
                  fill="none"
                  stroke="#84cc16"
                  strokeWidth="1"
                  opacity="0.8"
                >
                  <path
                    d="M50 20 L80 35 L80 65 L50 80 L20 65 L20 35 Z"
                    fill="rgba(132, 204, 22, 0.1)"
                  />
                  <path d="M50 20 L50 50 L80 65" />
                  <path d="M50 50 L20 65" />
                </svg>
              </div>

              {/* Floating Tag */}
              <div
                style={{
                  position: "absolute",
                  bottom: "40px",
                  right: "-20px",
                  backgroundColor: "#050505",
                  border: "1px solid #84cc16",
                  color: "#84cc16",
                  padding: "8px 16px",
                  fontSize: "14px",
                  fontFamily: '"Rajdhani"',
                  boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                }}
              >
                REACT / NEXT.JS / NODE
              </div>
            </div>
          </div>

          {/* Footer */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              borderTop: "1px solid rgba(255,255,255,0.1)",
              paddingTop: "24px",
              width: "100%",
            }}
          >
            <div
              style={{
                fontSize: "20px",
                color: "#64748b",
                fontFamily: '"Rajdhani"',
              }}
            >
              https://keehui.vercel.app
            </div>
            {/* Decor Bars */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                gap: "4px",
                height: "32px",
              }}
            >
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: "4px",
                    backgroundColor:
                      i % 3 === 0 ? "#84cc16" : "rgba(132, 204, 22, 0.3)",
                    height: i % 3 === 0 ? "100%" : "50%",
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* corner accents */}
        <div
          style={{
            position: "absolute",
            top: "30px",
            left: "30px",
            width: "16px",
            height: "16px",
            borderTop: "2px solid #84cc16",
            borderLeft: "2px solid #84cc16",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "30px",
            right: "30px",
            width: "16px",
            height: "16px",
            borderTop: "2px solid #84cc16",
            borderRight: "2px solid #84cc16",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "30px",
            left: "30px",
            width: "16px",
            height: "16px",
            borderBottom: "2px solid #84cc16",
            borderLeft: "2px solid #84cc16",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "30px",
            right: "30px",
            width: "16px",
            height: "16px",
            borderBottom: "2px solid #84cc16",
            borderRight: "2px solid #84cc16",
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Rajdhani",
          data: rajdhaniBold,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
