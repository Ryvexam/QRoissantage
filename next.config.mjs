import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  allowedDevOrigins: ["192.168.1.104"],
  turbopack: {
    root: rootDir,
  },
};

export default nextConfig;
