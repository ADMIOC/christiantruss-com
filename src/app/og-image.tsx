import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Christian Truss";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background: "#0f0e0c",
          color: "#f7f4ef",
        }}
      >
        <div style={{ color: "#b8954a", fontSize: 24, letterSpacing: 6 }}>
          TRUSS THE CUTS / TRUSS THE CARE
        </div>
        <div style={{ marginTop: 32, fontSize: 92, lineHeight: 0.95 }}>
          Christian Truss
        </div>
        <div style={{ marginTop: 28, fontSize: 34, color: "#c4c0b8" }}>
          Truss The Cuts. Truss The Care. Truss yourself.
        </div>
      </div>
    ),
    size,
  );
}
