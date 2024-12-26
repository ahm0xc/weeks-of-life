import { defineManifest } from "@crxjs/vite-plugin";
import packageData from "../package.json";

//@ts-ignore
const isDev = process.env.NODE_ENV == "development";

export default defineManifest({
  name: `${packageData.displayName || packageData.name}${isDev ? ` ➡️ Dev` : ""}`,
  description: packageData.description,
  version: packageData.version,
  manifest_version: 3,
  icons: {
    16: "img/logo16x.png",
    32: "img/logo34x.png",
    48: "img/logo48x.png",
    128: "img/logo128x.png",
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
        "img/logo128x.png",
      ],
      matches: [],
    },
  ],
  permissions: [],
  chrome_url_overrides: {
    newtab: "newtab.html",
  },
});
