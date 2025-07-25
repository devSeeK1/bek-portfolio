import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

// Assign the array to a variable before exporting
const config = [
  // Ignore build files
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

export default config;