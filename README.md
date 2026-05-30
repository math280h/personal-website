# personal-website

Source for my personal site — [thias.dev](https://thias.dev).

## Stack

- [React](https://react.dev) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev) for build tooling
- [Tailwind CSS v4](https://tailwindcss.com)
- [Bun](https://bun.sh) as the package manager / runtime
- [Biome](https://biomejs.dev) for linting + formatting
- [lucide-react](https://lucide.dev) for icons
- Deployed on Cloudflare Pages

## Develop

```sh
bun install      # install dependencies
bun run dev      # start the dev server
bun run build    # type-check + production build to dist/
bun run preview  # preview the production build
bun run lint     # Biome lint
bun run format   # Biome format (write)
```

Photos live in `src/images/<place>/` and are picked up automatically by
`src/lib/images.ts` — drop a `.jpg` into a folder and it shows up in the gallery.
