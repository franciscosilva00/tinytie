import { ImageResponse } from "next/server";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
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
            fontSize: 128,
          }}
        >
          👔
        </p>
        <div
          style={{
            color: "#fff",
          }}
        >
          tinytie
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  );
}
