| Command            | Action                                             |
| :----------------- | :------------------------------------------------- |
| `pnpm install`     | Installs dependencies                              |
| `pnpm run dev`     | Starts local dev & Netlify CMS proxy servers       |
| `pnpm run build`   | Build your production site to `./dist/`            |
| `pnpm run preview` | Serve `./dist/` & run the Netlify CMS proxy server |

### Troubleshoot

If you receive this error: Internal server error: Failed to resolve import "netlify-cms-app" from "virtual:astro-netlify-cms/user-config

Run this in your terminal

`pnpm i {,@types/}{react,react-dom}@^17 netlify-cms-app`
