import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  integrations: [
    starlight({
      title: "BookSailor 도서관",
      social: {
        github: "https://github.com/bookSailer",
      },
      sidebar: [
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
        {
          label: "귀에 쏙쏙 들어오는 함수형 프로그래밍",
          autogenerate: { directory: "functional-programming" },
        },
      ],
    }),
  ],
});
