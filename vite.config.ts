// Static-export build for self-hosting (GitHub Pages).
// nitro disabled; TanStack Start prerenders all routes to plain HTML.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
    nitro: false,
    tanstackStart: {
          server: { entry: "server" },
          prerender: {
                  enabled: true,
                  crawlLinks: true,
                  autoSubfolderIndex: true,
          },
    },
});
