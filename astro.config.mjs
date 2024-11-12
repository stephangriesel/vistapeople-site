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
          {
            name: "about",
            label: "About",
            label_singular: "about",
            folder: "src/pages/content/about",
            create: true,
            delete: true,
            fields: [
              { name: "title", widget: "string", label: "Post Title 1" },
              {
                name: "description1",
                widget: "string",
                label: "Paragraph 1",
                required: true,
              },
              {
                name: "description2",
                widget: "string",
                label: "Paragraph 2",
                required: true,
              },
              {
                name: "description3",
                widget: "string",
                label: "Paragraph 3",
                required: true,
              },
              { name: "title2", widget: "string", label: "Post Title 2" },
              {
                name: "description4",
                widget: "string",
                label: "Paragraph 4",
                required: true,
              },
              { name: "title3", widget: "string", label: "Post Title 3" },
              {
                name: "description5",
                widget: "string",
                label: "Paragraph 5",
                required: true,
              },
              {
                name: "cta",
                widget: "string",
                label: "CTA",
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
