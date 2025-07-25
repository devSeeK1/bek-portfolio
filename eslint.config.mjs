// eslint.config.mjs
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

// Assign the configuration array to a variable
const config = [
  // Ignore build files and node_modules
  {
    ignores: [
      ".next/**",
      "out/**",
      "node_modules/**",
      ".env*",
      "!.env.example",
      "*.log",
      ".eslintcache"
    ]
  },
  // Apply Next.js ESLint configuration
  ...compat.extends("next/core-web-vitals")
];
// Export the named variable
export default config;