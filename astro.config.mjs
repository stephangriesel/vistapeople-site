import { defineConfig } from "astro/config";
import NetlifyCMS from "astro-netlify-cms";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      config: {
        path: "./custom-config.cjs",
      },
    }),
    NetlifyCMS({
      config: {
        // Use Netlify’s “Git Gateway” authentication and target our default branch
        backend: {
          name: "git-gateway",
          branch: "latest",
        },
        // Logo for backend
        logo_url: `https://res.cloudinary.com/stephangriesel/image/upload/v1687318146/logo_cqhhz9.png`,
        // Configure where our media assets are stored & served from
        media_folder: "public/upload",
        public_folder: "/upload",
        // Configure the content collections
        collections: [
          {
            name: "hero",
            label: "Hero Intro",
            label_singular: "intro",
            folder: "src/pages/content/hero",
            create: true,
            delete: true,
            fields: [
              { name: "title", widget: "string", label: "Post Title" },
              {
                name: "description",
                widget: "string",
                label: "Description",
                required: true,
              },
              {
                name: "ctaleft",
                widget: "string",
                label: "CTA Left",
                required: true,
              },
              {
                name: "ctaleftlink",
                widget: "string",
                label: "CTA Left URL",
                required: true,
              },
              {
                name: "ctaright",
                widget: "string",
                label: "CTA Right",
                required: true,
              },
              {
                name: "ctarightlink",
                widget: "string",
                label: "CTA Right URL",
                required: true,
              },
              { name: "body", widget: "markdown", label: "Post Body" },
              {
                name: "layout",
                widget: "select",
                default: "../../../layouts/General.astro",
                options: [
                  {
                    label: "General",
                    value: "../../../layouts/General.astro",
                  },
                ],
              },
            ],
          },
          
        ],
      },
    }),
  ],
});
