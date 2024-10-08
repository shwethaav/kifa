const nextConfig = {
  trailingSlash: true,
  output: "export",
  images: {
    domains: ["img.youtube.com"],
    unoptimized: true,
  },
  // swcMinify: true, 
  // experimental: {
  //   modern: true, // Add experimental modern setting
  // },

  // swcMinify: false, // Temporary workaround to disable SWC
  // compiler: {
  //   swc: false, // Add this line to completely disable SWC
  // },
};

export default nextConfig;

