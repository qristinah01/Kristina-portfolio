import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Kristina Hakobyan — Product Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "72px 80px",
          backgroundColor: "#111014",
          color: "#FAF9F6",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <div
            style={{
              fontSize: 20,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(250,249,246,0.35)",
            }}
          >
            Portfolio
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
            }}
          >
            Kristina Hakobyan
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 300,
              fontStyle: "italic",
              color: "rgba(250,249,246,0.55)",
              marginTop: "4px",
            }}
          >
            Product Designer
          </div>
          <div
            style={{
              fontSize: 18,
              color: "rgba(250,249,246,0.4)",
              marginTop: "16px",
              maxWidth: "640px",
              lineHeight: 1.6,
            }}
          >
            Designing clear, structured interfaces that simplify complex systems.
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 72,
            right: 80,
            display: "flex",
            alignItems: "baseline",
            gap: "2px",
            fontSize: 48,
            fontWeight: 700,
          }}
        >
          kh
          <span style={{ color: "#E8634A" }}>.</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
