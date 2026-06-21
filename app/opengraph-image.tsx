import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0d0d0d",
          color: "#ffffff",
          fontSize: 64,
          fontWeight: 700,
          fontFamily: "Arial, sans-serif",
        }}
      >
        Ritika Gupta Portfolio
      </div>
    ),
    size,
  );
}
