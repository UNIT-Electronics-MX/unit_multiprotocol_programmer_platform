import { sidebar } from "vuepress-theme-hope";

export const esSidebar = sidebar({
  "/es/": [
    "",
    {
      text: "Sección",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: [
        "README.md",
        "general_info.md",
        "firmware.md",
        "docker_sdk.md",

        "license.md",
      ],
    },
    {
      text: "Documentos",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
    {
      text: "Slides",
      icon: "person-chalkboard",
      link: "https://plugin-md-enhance.vuejs.press/guide/content/revealjs/demo.html",
    },
  ],
});
