import { ImageResponse } from "next/og";

export function GET(request: Request) {
  const url = new URL(request.url);
  const title = url.searchParams.get("title") || "Daniel Hangan";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#0a0a0a",
          padding: "60px 80px",
          fontFamily: "monospace",
          position: "relative",
        }}
      >
        {/* Grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            position: "relative",
          }}
        >
          {/* Top section */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {/* Terminal prompt */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span style={{ color: "#34d399", fontSize: "24px" }}>→</span>
              <span style={{ color: "#525252", fontSize: "24px" }}>~/daniel</span>
            </div>

            {/* Name */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <h1
                style={{
                  fontSize: "72px",
                  fontWeight: "bold",
                  color: "#fafafa",
                  margin: 0,
                  letterSpacing: "-0.02em",
                }}
              >
                {title}
              </h1>

              {/* Cursor */}
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ color: "#a3a3a3", fontSize: "32px" }}>
                  Social Growth Engineer & Founder
                </span>
                <div
                  style={{
                    width: "4px",
                    height: "36px",
                    backgroundColor: "#34d399",
                    borderRadius: "2px",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            {/* Projects */}
            <div style={{ display: "flex", gap: "32px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ color: "#34d399", fontSize: "20px" }}>◆</span>
                <span style={{ color: "#d4d4d4", fontSize: "20px" }}>DansUGC</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ color: "#525252", fontSize: "20px" }}>$</span>
                <span style={{ color: "#737373", fontSize: "20px" }}>dansvpn.com</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ color: "#525252", fontSize: "20px" }}>$</span>
                <span style={{ color: "#737373", fontSize: "20px" }}>clippersdb.com</span>
              </div>
            </div>

            {/* Location */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ color: "#34d399", fontSize: "18px" }}>location:</span>
              <span style={{ color: "#525252", fontSize: "18px" }}>Lisbon, Portugal</span>
            </div>
          </div>
        </div>

        {/* Decorative corner elements */}
        <div
          style={{
            position: "absolute",
            top: "40px",
            right: "40px",
            display: "flex",
            gap: "8px",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: "#ef4444",
              opacity: 0.8,
            }}
          />
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: "#eab308",
              opacity: 0.8,
            }}
          />
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: "#22c55e",
              opacity: 0.8,
            }}
          />
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
