import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/unit_multiprotocol_programmer_platform/",

  // Configuración del repositorio
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],

  locales: {
    "/": {
      lang: "en-US",
      title: "Multiprotocol Programmer",
      description: "A complete documentation for the Multiprotocol Programmer development board",
    },
    "/es/": {
      lang: "es-ES",
      title: "Programador Multiprotocolo",
      description: "Documentación completa para la tarjeta de desarrollo Programador Multiprotocolo",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
