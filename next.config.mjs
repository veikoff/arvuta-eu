/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/sitemap.xml",
        headers: [{ key: "Content-Type", value: "application/xml" }],
      },
      {
        source: "/sitemap-0.xml",
        headers: [{ key: "Content-Type", value: "application/xml" }],
      },
    ];
  },
};

export default nextConfig;
