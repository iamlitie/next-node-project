/** @type {import('next').NextConfig} */

const rewrites = () => {
  return {
    // 设置请求代理
    fallback: [
      {
        source: "/api/:path*",
        destination: `http://localhost:9000/api/:path*`,
      },
    ],
  };
};

const nextConfig = {
  rewrites,
};

export default nextConfig;
