const isProd = process.env.NODE_ENV === "production";
 
const nextConfig = {
  basePath: isProd ? "/portfolio" : "",
  // assetPrefix: isProd ? "/portfolio/" : "",
  output: "export",
  images: {
    unoptimized: true,
  },
};
 
module.exports = nextConfig;