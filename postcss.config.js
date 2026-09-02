import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

const configDir = dirname(fileURLToPath(import.meta.url));

export default {
  plugins: [
    tailwindcss({ config: join(configDir, "tailwind.config.ts") }),
    autoprefixer(),
  ],
};
