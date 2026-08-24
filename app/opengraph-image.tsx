import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const logoPath = join(process.cwd(), "public", "images", "logo-mark.png");
  const logoBase64 = readFileSync(logoPath).toString("base64");
  const logoSrc = `data:image/png;base64,${logoBase64}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#FFFFFF",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: 44,
          }}
        >
          <img src={logoSrc} width={96} height={96} alt="" style={{ borderRadius: 999 }} />
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 68,
            fontWeight: 700,
            color: "#0B0B0B",
            lineHeight: 1.08,
            maxWidth: 980,
          }}
        >
          Structured clarity before high-stakes education decisions
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#3A3A3A",
            marginTop: 30,
            maxWidth: 900,
          }}
        >
          Four Maps to evaluate identity, universities, application narrative and execution.
        </div>
      </div>
    ),
    { ...size }
  );
}
