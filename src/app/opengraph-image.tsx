import { ImageResponse } from "next/server";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#141414",
          fontSize: 32,
          fontWeight: 600,
        }}
      >
        <p
          style={{
            fontSize: "128",
          }}
        >
          👔
        </p>
        <div style={{ marginTop: 16, color: "#ffffff" }}>tinytie</div>
        <p
          style={{
            fontSize: 24,
            color: "#ffffff",
          }}
        >
          shorten your links with ease.
        </p>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}
