import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

const LOCAL_DEV_PORT = 5173;
const CI_DEFAULT_PORT = 3000;

function parsePort(value: string | undefined): number | undefined {
  if (!value) return undefined;
  const n = Number.parseInt(value, 10);
  if (!Number.isFinite(n)) return undefined;
  if (n < 1 || n > 65535) return undefined;
  return n;
}

// Some local dev environments set `CI=1` even when not actually running in a CI runner.
// Use a stricter check for known CI providers to avoid forcing CI ports locally.
const isCI =
  process.env.GITHUB_ACTIONS === "true" ||
  process.env.GITLAB_CI === "true" ||
  process.env.BUILDKITE === "true" ||
  process.env.CIRCLECI === "true" ||
  process.env.TRAVIS === "true";
const port =
  parsePort(process.env.PORT) ??
  (isCI ? CI_DEFAULT_PORT : LOCAL_DEV_PORT);

// https://vitejs.dev/config/
export default defineConfig(({
  server: {
    host: "::",
    port,
    hmr: {
      overlay: false,
    },
  },
  preview: {
    host: "::",
    port,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
