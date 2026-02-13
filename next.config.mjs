/** @type {import('next').NextConfig} */
const nextConfig = {
  //     images: {
  //         domains: [
  //             `${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com`,
  //             'via.placeholder.com',
  //             'picsum.photos'
  //         ],
  //     },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: `${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com`,
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
};

// export default nextConfig;
