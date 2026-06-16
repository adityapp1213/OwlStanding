# OwlStanding ^_^

OwlStanding is a fun little Next.js site for our cohort, waitlist, mentors, services, and all the good stuff around helping people grow from campus to career :)

## routes

- `/`
  - redirects to `/cohort`
- `/cohort`
  - main landing page right now
- `/home`
  - brand home page
- `/feature-01`
- `/pricing-01`
- `/services-02`
- `/team-01`

## stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Motion
- Lucide React
- Iconify

## project shape


app/
  cohort/
  home/
  feature-01/
  pricing-01/
  services-02/
  team-01/
  globals.css
  layout.tsx
  page.tsx

components/
  header.tsx
  footer.tsx
  logo.tsx
  ui/
  shadcn-space/blocks/

assets/
  favicon.ico
  fonts/

public/
  images and static assets
```


## how to run it


install deps:

```bash
npm install
```

start dev server:

```bash
npm run dev
```

open:
http://localhost:3000


other commands:

```bash
npm run build
npm run start
npm run lint
```

## build status

good news... the build is healthy right now :)

- `npm run build` passes
- `npm run lint` passes with warnings only
- all app routes are statically generated

current generated routes:

- `/`
- `/_not-found`
- `/cohort`
- `/home`
- `/feature-01`
- `/pricing-01`
- `/services-02`
- `/team-01`

## small warnings left

nothing scary, just cleanup stuff...

- a few places still use plain `<img>` instead of `next/image`
- one unused variable warning exists in `components/ui/text-effect.tsx`

so yeah, not broken... just a bit unfinished in the polish department :) 

## branding notes

- browser favicon comes from `assets/favicon.ico`
- the visible OwlStanding logo still uses the owl SVG
- the display font is wired locally, so no random Google Fonts build failure drama anymore ^_^

## main user flow

pretty simple and clean:

1. user lands on `/`
2. gets redirected to `/cohort`
3. sees cohort details, pricing, mentors, and info
4. clicks a CTA
5. gets sent to the waitlist Google Form..

## future cleanup ideas

- replace leftover `<img>` tags with `next/image`
- clean up a few weird encoding/copy artifacts
- tighten reusable block structure a bit
- add analytics if you want to track signups later...


This is a live site ~owlstanding.in/ this is the whole dir use it refine it make it it your own have fun :) 
