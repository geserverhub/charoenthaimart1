const LIVE_SITE = "https://strong-dory-enabled.ngrok-free.app";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // This deployment has no access to the real MySQL database (it's bound to
  // localhost on the origin server), so data-backed pages can't work here.
  // Send visitors to the real, working site instead.
  async redirects() {
    return [
      {
        source: "/charoenthaimart/shop",
        destination: `${LIVE_SITE}/charoenthaimart/shop`,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
