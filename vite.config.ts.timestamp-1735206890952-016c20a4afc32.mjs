// vite.config.ts
import { defineConfig } from "file:///Users/ahmed/projects/weeks-of-life/node_modules/.pnpm/vite@4.5.5_@types+node@22.10.2/node_modules/vite/dist/node/index.js";
import { crx } from "file:///Users/ahmed/projects/weeks-of-life/node_modules/.pnpm/@crxjs+vite-plugin@2.0.0-beta.28/node_modules/@crxjs/vite-plugin/dist/index.mjs";

// src/manifest.ts
import { defineManifest } from "file:///Users/ahmed/projects/weeks-of-life/node_modules/.pnpm/@crxjs+vite-plugin@2.0.0-beta.28/node_modules/@crxjs/vite-plugin/dist/index.mjs";

// package.json
var package_default = {
  name: "weeks-of-life",
  displayName: "Weeks of life",
  version: "0.0.1",
  author: "**",
  description: "",
  type: "module",
  license: "MIT",
  keywords: [
    "inspiration",
    "new tab customization",
    "life"
  ],
  engines: {
    node: ">=14.18.0"
  },
  scripts: {
    dev: "vite",
    build: "tsc && vite build",
    preview: "vite preview",
    fmt: "prettier --write '**/*.{ts,json,css,scss,md}'",
    zip: "npm run build && node src/zip.js"
  },
  devDependencies: {
    "@crxjs/vite-plugin": "^2.0.0-beta.19",
    "@types/chrome": "^0.0.246",
    autoprefixer: "^10.4.20",
    gulp: "^4.0.2",
    "gulp-zip": "^6.0.0",
    postcss: "^8.4.49",
    prettier: "^3.0.3",
    tailwindcss: "^3.4.17",
    typescript: "^5.2.2",
    vite: "^4.4.11"
  },
  dependencies: {
    "date-fns": "^4.1.0",
    "tailwindcss-animate": "^1.0.7"
  }
};

// src/manifest.ts
var isDev = process.env.NODE_ENV == "development";
var manifest_default = defineManifest({
  name: `${package_default.displayName || package_default.name}${isDev ? ` \u27A1\uFE0F Dev` : ""}`,
  description: package_default.description,
  version: package_default.version,
  manifest_version: 3,
  icons: {
    16: "img/logo16x.png",
    32: "img/logo34x.png",
    48: "img/logo48x.png",
    128: "img/logo128x.png"
  },
  // action: {
  //   default_popup: "popup.html",
  //   default_icon: "img/logo-48.png",
  // },
  // options_page: "options.html",
  // devtools_page: "devtools.html",
  // background: {
  //   service_worker: "src/background/index.ts",
  //   type: "module",
  // },
  // content_scripts: [
  //   {
  //     matches: ["http://*/*", "https://*/*"],
  //     js: ["src/contentScript/index.ts"],
  //   },
  // ],
  web_accessible_resources: [
    {
      resources: [
        "img/logo16x.png",
        "img/logo34x.png",
        "img/logo48x.png",
        "img/logo128x.png"
      ],
      matches: []
    }
  ],
  permissions: [],
  chrome_url_overrides: {
    newtab: "newtab.html"
  }
});

// vite.config.ts
var vite_config_default = defineConfig(({ mode }) => {
  return {
    build: {
      emptyOutDir: true,
      outDir: "build",
      rollupOptions: {
        output: {
          chunkFileNames: "assets/chunk-[hash].js"
        }
      }
    },
    plugins: [crx({ manifest: manifest_default })]
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAic3JjL21hbmlmZXN0LnRzIiwgInBhY2thZ2UuanNvbiJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9haG1lZC9wcm9qZWN0cy93ZWVrcy1vZi1saWZlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvYWhtZWQvcHJvamVjdHMvd2Vla3Mtb2YtbGlmZS92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvYWhtZWQvcHJvamVjdHMvd2Vla3Mtb2YtbGlmZS92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgeyBjcnggfSBmcm9tIFwiQGNyeGpzL3ZpdGUtcGx1Z2luXCI7XG5pbXBvcnQgbWFuaWZlc3QgZnJvbSBcIi4vc3JjL21hbmlmZXN0XCI7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiB7XG4gIHJldHVybiB7XG4gICAgYnVpbGQ6IHtcbiAgICAgIGVtcHR5T3V0RGlyOiB0cnVlLFxuICAgICAgb3V0RGlyOiBcImJ1aWxkXCIsXG4gICAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAgIG91dHB1dDoge1xuICAgICAgICAgIGNodW5rRmlsZU5hbWVzOiBcImFzc2V0cy9jaHVuay1baGFzaF0uanNcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcblxuICAgIHBsdWdpbnM6IFtjcngoeyBtYW5pZmVzdCB9KV0sXG4gIH07XG59KTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2FobWVkL3Byb2plY3RzL3dlZWtzLW9mLWxpZmUvc3JjXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvYWhtZWQvcHJvamVjdHMvd2Vla3Mtb2YtbGlmZS9zcmMvbWFuaWZlc3QudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2FobWVkL3Byb2plY3RzL3dlZWtzLW9mLWxpZmUvc3JjL21hbmlmZXN0LnRzXCI7aW1wb3J0IHsgZGVmaW5lTWFuaWZlc3QgfSBmcm9tIFwiQGNyeGpzL3ZpdGUtcGx1Z2luXCI7XG5pbXBvcnQgcGFja2FnZURhdGEgZnJvbSBcIi4uL3BhY2thZ2UuanNvblwiO1xuXG4vL0B0cy1pZ25vcmVcbmNvbnN0IGlzRGV2ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT0gXCJkZXZlbG9wbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVNYW5pZmVzdCh7XG4gIG5hbWU6IGAke3BhY2thZ2VEYXRhLmRpc3BsYXlOYW1lIHx8IHBhY2thZ2VEYXRhLm5hbWV9JHtpc0RldiA/IGAgXHUyN0ExXHVGRTBGIERldmAgOiBcIlwifWAsXG4gIGRlc2NyaXB0aW9uOiBwYWNrYWdlRGF0YS5kZXNjcmlwdGlvbixcbiAgdmVyc2lvbjogcGFja2FnZURhdGEudmVyc2lvbixcbiAgbWFuaWZlc3RfdmVyc2lvbjogMyxcbiAgaWNvbnM6IHtcbiAgICAxNjogXCJpbWcvbG9nbzE2eC5wbmdcIixcbiAgICAzMjogXCJpbWcvbG9nbzM0eC5wbmdcIixcbiAgICA0ODogXCJpbWcvbG9nbzQ4eC5wbmdcIixcbiAgICAxMjg6IFwiaW1nL2xvZ28xMjh4LnBuZ1wiLFxuICB9LFxuICAvLyBhY3Rpb246IHtcbiAgLy8gICBkZWZhdWx0X3BvcHVwOiBcInBvcHVwLmh0bWxcIixcbiAgLy8gICBkZWZhdWx0X2ljb246IFwiaW1nL2xvZ28tNDgucG5nXCIsXG4gIC8vIH0sXG4gIC8vIG9wdGlvbnNfcGFnZTogXCJvcHRpb25zLmh0bWxcIixcbiAgLy8gZGV2dG9vbHNfcGFnZTogXCJkZXZ0b29scy5odG1sXCIsXG4gIC8vIGJhY2tncm91bmQ6IHtcbiAgLy8gICBzZXJ2aWNlX3dvcmtlcjogXCJzcmMvYmFja2dyb3VuZC9pbmRleC50c1wiLFxuICAvLyAgIHR5cGU6IFwibW9kdWxlXCIsXG4gIC8vIH0sXG4gIC8vIGNvbnRlbnRfc2NyaXB0czogW1xuICAvLyAgIHtcbiAgLy8gICAgIG1hdGNoZXM6IFtcImh0dHA6Ly8qLypcIiwgXCJodHRwczovLyovKlwiXSxcbiAgLy8gICAgIGpzOiBbXCJzcmMvY29udGVudFNjcmlwdC9pbmRleC50c1wiXSxcbiAgLy8gICB9LFxuICAvLyBdLFxuICB3ZWJfYWNjZXNzaWJsZV9yZXNvdXJjZXM6IFtcbiAgICB7XG4gICAgICByZXNvdXJjZXM6IFtcbiAgICAgICAgXCJpbWcvbG9nbzE2eC5wbmdcIixcbiAgICAgICAgXCJpbWcvbG9nbzM0eC5wbmdcIixcbiAgICAgICAgXCJpbWcvbG9nbzQ4eC5wbmdcIixcbiAgICAgICAgXCJpbWcvbG9nbzEyOHgucG5nXCIsXG4gICAgICBdLFxuICAgICAgbWF0Y2hlczogW10sXG4gICAgfSxcbiAgXSxcbiAgcGVybWlzc2lvbnM6IFtdLFxuICBjaHJvbWVfdXJsX292ZXJyaWRlczoge1xuICAgIG5ld3RhYjogXCJuZXd0YWIuaHRtbFwiLFxuICB9LFxufSk7XG4iLCAie1xuICBcIm5hbWVcIjogXCJ3ZWVrcy1vZi1saWZlXCIsXG4gIFwiZGlzcGxheU5hbWVcIjogXCJXZWVrcyBvZiBsaWZlXCIsXG4gIFwidmVyc2lvblwiOiBcIjAuMC4xXCIsXG4gIFwiYXV0aG9yXCI6IFwiKipcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICBcInR5cGVcIjogXCJtb2R1bGVcIixcbiAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXG4gIFwia2V5d29yZHNcIjogW1xuICAgIFwiaW5zcGlyYXRpb25cIixcbiAgICBcIm5ldyB0YWIgY3VzdG9taXphdGlvblwiLFxuICAgIFwibGlmZVwiXG4gIF0sXG4gIFwiZW5naW5lc1wiOiB7XG4gICAgXCJub2RlXCI6IFwiPj0xNC4xOC4wXCJcbiAgfSxcbiAgXCJzY3JpcHRzXCI6IHtcbiAgICBcImRldlwiOiBcInZpdGVcIixcbiAgICBcImJ1aWxkXCI6IFwidHNjICYmIHZpdGUgYnVpbGRcIixcbiAgICBcInByZXZpZXdcIjogXCJ2aXRlIHByZXZpZXdcIixcbiAgICBcImZtdFwiOiBcInByZXR0aWVyIC0td3JpdGUgJyoqLyoue3RzLGpzb24sY3NzLHNjc3MsbWR9J1wiLFxuICAgIFwiemlwXCI6IFwibnBtIHJ1biBidWlsZCAmJiBub2RlIHNyYy96aXAuanNcIlxuICB9LFxuICBcImRldkRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJAY3J4anMvdml0ZS1wbHVnaW5cIjogXCJeMi4wLjAtYmV0YS4xOVwiLFxuICAgIFwiQHR5cGVzL2Nocm9tZVwiOiBcIl4wLjAuMjQ2XCIsXG4gICAgXCJhdXRvcHJlZml4ZXJcIjogXCJeMTAuNC4yMFwiLFxuICAgIFwiZ3VscFwiOiBcIl40LjAuMlwiLFxuICAgIFwiZ3VscC16aXBcIjogXCJeNi4wLjBcIixcbiAgICBcInBvc3Rjc3NcIjogXCJeOC40LjQ5XCIsXG4gICAgXCJwcmV0dGllclwiOiBcIl4zLjAuM1wiLFxuICAgIFwidGFpbHdpbmRjc3NcIjogXCJeMy40LjE3XCIsXG4gICAgXCJ0eXBlc2NyaXB0XCI6IFwiXjUuMi4yXCIsXG4gICAgXCJ2aXRlXCI6IFwiXjQuNC4xMVwiXG4gIH0sXG4gIFwiZGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcImRhdGUtZm5zXCI6IFwiXjQuMS4wXCIsXG4gICAgXCJ0YWlsd2luZGNzcy1hbmltYXRlXCI6IFwiXjEuMC43XCJcbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEyUixTQUFTLG9CQUFvQjtBQUN4VCxTQUFTLFdBQVc7OztBQ0Q2USxTQUFTLHNCQUFzQjs7O0FDQWhVO0FBQUEsRUFDRSxNQUFRO0FBQUEsRUFDUixhQUFlO0FBQUEsRUFDZixTQUFXO0FBQUEsRUFDWCxRQUFVO0FBQUEsRUFDVixhQUFlO0FBQUEsRUFDZixNQUFRO0FBQUEsRUFDUixTQUFXO0FBQUEsRUFDWCxVQUFZO0FBQUEsSUFDVjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBVztBQUFBLElBQ1QsTUFBUTtBQUFBLEVBQ1Y7QUFBQSxFQUNBLFNBQVc7QUFBQSxJQUNULEtBQU87QUFBQSxJQUNQLE9BQVM7QUFBQSxJQUNULFNBQVc7QUFBQSxJQUNYLEtBQU87QUFBQSxJQUNQLEtBQU87QUFBQSxFQUNUO0FBQUEsRUFDQSxpQkFBbUI7QUFBQSxJQUNqQixzQkFBc0I7QUFBQSxJQUN0QixpQkFBaUI7QUFBQSxJQUNqQixjQUFnQjtBQUFBLElBQ2hCLE1BQVE7QUFBQSxJQUNSLFlBQVk7QUFBQSxJQUNaLFNBQVc7QUFBQSxJQUNYLFVBQVk7QUFBQSxJQUNaLGFBQWU7QUFBQSxJQUNmLFlBQWM7QUFBQSxJQUNkLE1BQVE7QUFBQSxFQUNWO0FBQUEsRUFDQSxjQUFnQjtBQUFBLElBQ2QsWUFBWTtBQUFBLElBQ1osdUJBQXVCO0FBQUEsRUFDekI7QUFDRjs7O0FEbkNBLElBQU0sUUFBUSxRQUFRLElBQUksWUFBWTtBQUV0QyxJQUFPLG1CQUFRLGVBQWU7QUFBQSxFQUM1QixNQUFNLEdBQUcsZ0JBQVksZUFBZSxnQkFBWSxJQUFJLEdBQUcsUUFBUSxzQkFBWSxFQUFFO0FBQUEsRUFDN0UsYUFBYSxnQkFBWTtBQUFBLEVBQ3pCLFNBQVMsZ0JBQVk7QUFBQSxFQUNyQixrQkFBa0I7QUFBQSxFQUNsQixPQUFPO0FBQUEsSUFDTCxJQUFJO0FBQUEsSUFDSixJQUFJO0FBQUEsSUFDSixJQUFJO0FBQUEsSUFDSixLQUFLO0FBQUEsRUFDUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFpQkEsMEJBQTBCO0FBQUEsSUFDeEI7QUFBQSxNQUNFLFdBQVc7QUFBQSxRQUNUO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsU0FBUyxDQUFDO0FBQUEsSUFDWjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLGFBQWEsQ0FBQztBQUFBLEVBQ2Qsc0JBQXNCO0FBQUEsSUFDcEIsUUFBUTtBQUFBLEVBQ1Y7QUFDRixDQUFDOzs7QUQzQ0QsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxLQUFLLE1BQU07QUFDeEMsU0FBTztBQUFBLElBQ0wsT0FBTztBQUFBLE1BQ0wsYUFBYTtBQUFBLE1BQ2IsUUFBUTtBQUFBLE1BQ1IsZUFBZTtBQUFBLFFBQ2IsUUFBUTtBQUFBLFVBQ04sZ0JBQWdCO0FBQUEsUUFDbEI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBRUEsU0FBUyxDQUFDLElBQUksRUFBRSwyQkFBUyxDQUFDLENBQUM7QUFBQSxFQUM3QjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
