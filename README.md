# Dangbana Republik — V4 / Refined Edition

This is the revised **Next.js 15** independent website concept, incorporating the design review from November 2026.

## What V4 fixes

- **Desktop hero:** much smaller, balanced title; no duplicate floating emblem. The **mobile hero keeps the original V3 presentation**.
- **Typography:** complete headings (e.g. *The music.*, *Meet the artists.*, *Watch the music.*), more whitespace and reduced font sizes across the site.
- **Spotlights:** no stamps, “play the film” stickers, or noisy overlays. Each artist retains a randomized queue with three upcoming videos.
- **Autoplay:** YouTube video starts **muted** when the relevant spotlight enters the viewport. One spotlight is active at a time; the active desktop spotlight alternates roughly every 40 seconds until a visitor manually selects one. On mobile, the visible artist deck becomes active. When a video ends, the next queued video plays. Users can click **SOUND OFF · TAP TO LISTEN** to unmute. Autoplay is subject to browser and YouTube embed policies, so a standard play button remains as fallback. On devices with reduced motion or data saver the automatic player stays off until tapped.
- **Reduced clutter:** removed the duplicated “Beyond the Records / See the Sound” promotion and the extra cultural full-bleed block; cleaned up merch, journal, roster and tour visuals.
- **Functional fix:** scroll reveals observe content after route changes, not just on first load.
- **Still included:** official wheel-and-floral logo based on the supplied screenshot, two edited hero videos, Bella + FOLA artist photos, release covers and player modals, photo wall, press coverage, and merch/tour concepts.

## Run locally (Windows, VS Code)

```powershell
npm install
npm run dev
```

Open http://localhost:3000. To test the production build:

```powershell
npm run build
```

## Important notes

The included `preview.html` is a **static layout preview**. Open it directly to see the new layout without installing packages. Auto-playing YouTube players, internal routing and album playback require the **running Next.js site**, not the preview file.

**Autoplay with sound is normally blocked by browsers.** V4 auto-plays muted, and visitors can opt into sound with a click. Embedded video playback still depends on browser settings and YouTube permissions.

The logo is the faithful upscale of the user-provided low-resolution reference, not an official vector master. Third-party photographs and covers are illustrative and require proper usage rights before public launch. Sample tour dates and merchandise remain fictional design placeholders. This is **not the label's official website**.

Content remains editable in `data/site.ts` and `data/experience.ts`. Styling corrections live in `app/refinements.css`, loaded after `app/globals.css` for easy iteration.

## Validation

- TS/TSX parsed without syntax diagnostics; both CSS files parsed without stylesheet errors.
- A production Next.js build was **not** run here because npm could not resolve `registry.npmjs.org` (`EAI_AGAIN`). Run `npm install` / `npm run build` on your PC before deployment.
- A full live browser screenshot test was not completed here.

## Brand spelling correction

The label is **Dangbana Republik**, not Dagbana. Visible website copy, headings, social metadata, and placeholders use the corrected name. Asset file paths and the deployed address (`https://dagbana.vercel.app`) are intentionally unchanged to avoid breaking existing references and deployments.
