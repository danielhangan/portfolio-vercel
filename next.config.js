/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    after: true,
  },
  transpilePackages: ["geist"],
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
          {
            key: "Cross-Origin-Embedder-Policy",
            value: "require-corp",
          },
        ],
      },
    ];
  },
};
