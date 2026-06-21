import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

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
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0d0d0d",
          color: "#ffffff",
          padding: 64,
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div
            style={{
              width: 86,
              height: 86,
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.22)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 700,
              background: "rgba(255,255,255,0.06)",
            }}
          >
            RG
          </div>
          <div style={{ color: "rgba(255,255,255,0.48)", fontSize: 24 }}>Systems Portfolio</div>
        </div>

        <div>
          <div style={{ color: "rgba(255,255,255,0.56)", fontSize: 26, letterSpacing: 4, textTransform: "uppercase" }}>
            Backend / Platform / Applied AI Engineer
          </div>
          <h1 style={{ margin: "28px 0 0", maxWidth: 960, fontSize: 82, lineHeight: 0.92, letterSpacing: -5 }}>
            Ritika Gupta builds complete systems.
          </h1>
          <p style={{ margin: "30px 0 0", maxWidth: 900, color: "rgba(255,255,255,0.62)", fontSize: 30, lineHeight: 1.35 }}>
            {siteConfig.description}
          </p>
        </div>
      </div>
    ),
    size,
  );
}
