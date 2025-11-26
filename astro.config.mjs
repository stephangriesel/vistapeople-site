import { defineConfig } from "astro/config";
import NetlifyCMS from "astro-netlify-cms";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      config: {
        path: "./custom-config.cjs",
      },
    }),
    icon(),
    NetlifyCMS({
      config: {
        // Use Netlify’s “Git Gateway” authentication and target our default branch
        backend: {
          name: "git-gateway",
          branch: "master",
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
              { name: "title", widget: "string", label: "Post Title", required: true },
              { name: "backgroundvideo", widget: "string", label: "Background Video Url", required: false },
              { name: "backgroundphoto", widget: "string", label: "Background Photo", required: false },
              {
                name: "description",
                widget: "string",
                label: "Description",
                required: false,
              },
              {
                name: "ctaleft",
                widget: "string",
                label: "CTA Left",
                required: false,
              },
              {
                name: "ctaleftlink",
                widget: "string",
                label: "CTA Left URL",
                required: false,
              },
              {
                name: "ctaright",
                widget: "string",
                label: "CTA Right",
                required: false,
              },
              {
                name: "ctarightlink",
                widget: "string",
                label: "CTA Right URL",
                required: false,
              },
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
                required: false,
              },
              {
                name: "description2",
                widget: "string",
                label: "Paragraph 2",
                required: false,
              },
              {
                name: "description3",
                widget: "string",
                label: "Paragraph 3",
                required: false,
              },
              { name: "title2", widget: "string", label: "Post Title 2" },
              {
                name: "description4",
                widget: "string",
                label: "Paragraph 4",
                required: false,
              },
              { name: "title3", widget: "string", label: "Post Title 3" },
              {
                name: "description5",
                widget: "string",
                label: "Paragraph 5",
                required: false,
              },
              {
                name: "cta",
                widget: "string",
                label: "CTA",
                required: false,
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
            name: "services",
            label: "Services",
            label_singular: "service",
            folder: "src/pages/content/services",
            create: true,
            delete: true,
            fields: [
              { name: "smalltext", widget: "string", label: "Small Text" },
              { name: "title", widget: "string", label: "Title" },
              { name: "description", widget: "string", label: "Services Description" },
              {
                name: "block1icon",
                widget: "string",
                label: "Icon Name",
                required: true,
              },
              {
                name: "block1title",
                widget: "string",
                label: "Title 1",
                required: true,
              },
              {
                name: "block1text",
                widget: "string",
                label: "Text 1",
                required: true,
              },
              {
                name: "block2icon",
                widget: "string",
                label: "Icon Name",
                required: true,
              },
              {
                name: "block2title",
                widget: "string",
                label: "Title 2",
                required: true,
              },
              {
                name: "block2text",
                widget: "string",
                label: "Text 2",
                required: true,
              },
              {
                name: "block3icon",
                widget: "string",
                label: "Icon Name",
                required: true,
              },
              {
                name: "block3title",
                widget: "string",
                label: "Title 3",
                required: true,
              },
              {
                name: "block3text",
                widget: "string",
                label: "Text 3",
                required: true,
              },
              {
                name: "block4icon",
                widget: "string",
                label: "Icon Name",
                required: true,
              },
              {
                name: "block4title",
                widget: "string",
                label: "TItle 4",
                required: true,
              },
              {
                name: "block4text",
                widget: "string",
                label: "Text 4",
                required: true,
              },
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
            name: "ctasection",
            label: "Why",
            label_singular: "ctasection",
            folder: "src/pages/content/ctasection",
            create: true,
            delete: true,
            fields: [
              { name: "maintitle", widget: "string", label: "Main Title" },
              {
                name: "title1",
                widget: "string",
                label: "Title 1",
                required: true,
              },
              {
                name: "description1",
                widget: "string",
                label: "Paragraph 1",
                required: true,
              },
              {
                name: "title2",
                widget: "string",
                label: "Title 2",
                required: true,
              },
              {
                name: "description2",
                widget: "string",
                label: "Paragraph 2",
                required: true,
              },
              {
                name: "title3",
                widget: "string",
                label: "Title 3",
                required: true,
              },
              {
                name: "description3",
                widget: "string",
                label: "Paragraph 3",
                required: true,
              },
              {
                name: "cta",
                widget: "string",
                label: "CTA",
                required: true,
              },
              {
                name: "ctaurl",
                widget: "string",
                label: "CTA URL",
                required: true,
              },
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
            name: "testimonials",
            label: "Testimonials",
            label_singular: "testimonial",
            folder: "src/pages/content/testimonials",
            create: true,
            delete: true,
            fields: [
              {
                name: "authorname1",
                widget: "string",
                label: "Author Name",
                required: true,
              },
              {
                name: "authorrole1",
                widget: "string",
                label: "Author Role",
                required: true,
              },
              {
                name: "image1",
                widget: "image",
                label: "Image",
                required: true
              },
              {
                name: "message1",
                widget: "string",
                label: "Message 1",
                required: true,
              },
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
            name: "careers",
            label: "Careers",
            label_singular: "careers",
            folder: "src/pages/content/careers",
            create: true,
            delete: true,
            fields: [
              { name: "title", widget: "string", label: "Title", default: "Careers" },
              { name: "subtitle", widget: "string", label: "Subtitle", default: "Join the maillist" },
              {
                name: "description1",
                widget: "string",
                label: "Paragraph 1",
                required: false,
                default: "Our clients are mostly foreign companies across Europe, the UK and the USA, wanting to work with South African professionals, remotely."
              },
              {
                name: "description2",
                widget: "string",
                label: "Paragraph 2",
                required: false,
                default: "Leave your details below and we’ll let you know when opportunities become available."
              },
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
