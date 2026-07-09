import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import keystatic from "@keystatic/astro";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import path from "node:path";
import { fileURLToPath } from "node:url";

import mdx from "@astrojs/mdx";
import node from "@apphosting/astro-adapter";
import { createRequire } from "node:module";

import { siteFonts } from "./site-fonts.mjs";

import markdoc from "@astrojs/markdoc";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const require = createRequire(import.meta.url);
const pluginPath = path.join(require.resolve("@astrojs/node"), "../vite-plugin-config.js");
const { createConfigPlugin } = require(pluginPath);

const isTest = typeof process !== "undefined" && !!process.env.VITEST;

const customAppHostingAdapter = !isTest ? (() => {
  const integration = node({
    mode: "standalone",
  });
  const originalConfigDone = integration.hooks["astro:config:done"];

  integration.hooks["astro:config:done"] = (params) => {
    const originalSetAdapter = params.setAdapter;

    params.setAdapter = (adapter) => {
      originalSetAdapter({
        ...adapter,
        entrypointResolution: "auto",
      });
    };

    originalConfigDone(params);
  };
  return integration;
})() : null;

// https://astro.build/config
export default defineConfig({
  ...(isTest
    ? {}
    : {
        adapter: customAppHostingAdapter,
      }),
  site: "https://avantia.com.co",
  redirects: {
    "/contactanos": "/#contacto",
    "/favicon.ico": "/favicon.svg",
  },
  fonts: siteFonts,
  build: {
    inlineStylesheets: "always",
  },
  devToolbar: {
    enabled: false,
  },
  server: {
    host: true,
    port: process.env.PORT ? parseInt(process.env.PORT) : 4321,
    allowedHosts: true,
  },
  security: {
    checkOrigin: false,
    allowedDomains: [
      {
        protocol: "https",
        hostname: "avantia.com.co",
      },
      {
        protocol: "https",
        hostname: "www.avantia.com.co",
      },
      {
        protocol: "https",
        hostname: "**.hosted.app",
      },
    ],
  },
  image: {
    domains: [],
  },
  integrations: [...(isTest
    ? []
    : [
        {
          name: "clean-apphosting-directory",
          hooks: {
            "astro:build:start": async () => {
              const fs = await import("node:fs/promises");

              try {
                await fs.rm("./.apphosting", { recursive: true, force: true });
              } catch (e) {
                // ignore
              }
            },
          },
        },
        {
          name: "apphosting-astro-node-bridge",
          hooks: {
            "astro:config:setup": ({ updateConfig, config }) => {
              updateConfig({
                vite: {
                  plugins: [
                    createConfigPlugin({
                      mode: "standalone",
                      client: config.build.client?.toString(),
                      server: config.build.server?.toString(),
                      host: config.server.host,
                      port: config.server.port,
                      staticHeaders: false,
                      bodySizeLimit: 1024 * 1024 * 1024,
                      experimentalDisableStreaming: false,
                    }),
                  ],
                },
              });
            },
          },
        },
        {
          name: "builder-preview-dev-only",
          hooks: {
            "astro:config:setup": ({ command, injectRoute, updateConfig }) => {
              if (command === "dev") {
                injectRoute({
                  pattern: "/component-docs/builder-preview",
                  entrypoint: "./src/component-docs/pages/builder-preview.astro",
                  prerender: false,
                });
                updateConfig({
                  adapter: {
                    name: "dev-only-server-preview",
                    serverEntrypoint: "",
                    supportedAstroFeatures: {
                      serverOutput: "stable",
                      staticOutput: "stable",
                      hybridOutput: "stable",
                      sharpImageService: "stable",
                    },
                  },
                });
              }
            },
          },
        },
        keystatic(),
        icon({
          iconDir: path.resolve(__dirname, "src/icons"),
          svgoOptions: {
            plugins: [
              {
                name: "preset-default",
                params: {
                  overrides: {
                    cleanupIds: false,
                  },
                },
              },
            ],
          },
        }),
        sitemap({
          filter: (page) => {
            if (page.endsWith("/404") || page.endsWith("/404.html")) {
              return false;
            }
            if (page.includes("/component-docs")) {
              return false;
            }
            return true;
          },
        }),
      ]), mdx(), react(), markdoc()],
  vite: {
    define: {
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.PUBLIC_KEYSTATIC_PROJECT': JSON.stringify(process.env.PUBLIC_KEYSTATIC_PROJECT || 'avantia-landing-page/avantia-landing-page'),
    },
    build: {
      minify: "esbuild",
    },
    plugins: isTest
      ? []
      : [
          {
            name: "suppress-node-externalized-warning",
            config() {
              return {
                build: {
                  rollupOptions: {
                    onwarn(warning, defaultHandler) {
                      if (
                        warning.message?.includes("externalized for browser compatibility") &&
                        warning.message?.includes("discoverVideoSources")
                      )
                        return;
                      defaultHandler(warning);
                    },
                  },
                },
              };
            },
            configResolved(config) {
              const originalWarn = config.logger.warn;

              config.logger.warn = (msg, options) => {
                if (
                  typeof msg === "string" &&
                  msg.includes("externalized for browser compatibility") &&
                  msg.includes("discoverVideoSources")
                )
                  return;
                originalWarn(msg, options);
              };
            },
          },
        ],
    build: {
      chunkSizeWarningLimit: 1024,
    },
    css: {
      devSourcemap: true,
    },
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@building-blocks": path.resolve(__dirname, "src/components/building-blocks"),
        "@core-elements": path.resolve(__dirname, "src/components/building-blocks/core-elements"),
        "@forms": path.resolve(__dirname, "src/components/building-blocks/forms"),
        "@wrappers": path.resolve(__dirname, "src/components/building-blocks/wrappers"),
        "@navigation": path.resolve(__dirname, "src/components/navigation"),
        "@page-sections": path.resolve(__dirname, "src/components/page-sections"),
        "@features": path.resolve(__dirname, "src/components/page-sections/features"),
        "@builders": path.resolve(__dirname, "src/components/page-sections/builders"),
        "@data": path.resolve(__dirname, "src/data"),
        "@content": path.resolve(__dirname, "src/content"),
        "@assets": path.resolve(__dirname, "src/assets"),
        "@component-docs": path.resolve(__dirname, "src/component-docs"),
        "@layouts": path.resolve(__dirname, "src/layouts"),
        "@component-utils": path.resolve(__dirname, "src/components/utils"),
        "@styles": path.resolve(__dirname, "src/styles"),
      },
    },
  },
});