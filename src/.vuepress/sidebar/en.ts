import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      text: "Section",
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
      text: "Docs",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
    {
      text: "Slides",
      icon: "person-chalkboard",
      link: "https://ecosystem.vuejs.press/plugins/markdown/revealjs/demo.html",
    },
  ],
});
