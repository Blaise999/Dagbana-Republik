# Source credits & production checklist — Dagbana Republik concept

This is an independently produced, non-official design concept. It is **not** a live/authorized Dagbana Republik store, concert announcement, or newsletter.

## YouTube spotlight — official uploads

Video data is in `data/experience.ts` and can be edited without changing any React components.

- Bella Shmurda — Happy Song: https://www.youtube.com/watch?v=JriGKmLtIc0
- Bella Shmurda feat. Olamide — Ara: https://www.youtube.com/watch?v=Uf4p2tAdfrA
- Bella Shmurda feat. Seyi Vibez — Bounce: https://www.youtube.com/watch?v=LblUEe3Kves
- Bella Shmurda & FOLA — Dagbana Riddim: https://www.youtube.com/watch?v=nwSYUMzIXPM
- FOLA, Bella Shmurda & Zlatan — it's over: https://www.youtube.com/watch?v=xRiw_5aBEjM
- FOLA — attention!: https://www.youtube.com/watch?v=Wk0OU6zAdPU
- FOLA & Victony — golibe: https://www.youtube.com/watch?v=ZFWIFFQ7PYM

The spotlight initially shuffles the order and rotates **poster previews** every 12 seconds while idle and in view. Clicking Play loads the official YouTube player; it automatically queues the next video when the current one ends. Autoplay of sound is intentionally *not* attempted without visitor interaction. Clicking Skip advances manually. The YouTube player script isn't downloaded until someone presses Play. Playback availability depends on uploader embed settings and network access.

## Editorial headlines (third-party articles)

Each story links back to its publisher and date. Published article images are hotlinked for a concept demonstration (some publishers block hotlinking, in which case site uses a locally extracted frame).

- 49th Street, Bella Shmurda Is Happy and Building Beyond Himself (Aug 2026): https://the49thstreet.com/bella-shmurda-is-happy-and-building-beyond-himself
- TurnTable Charts, FOLA’s Full-Circle Moment (Sep 2026): https://turntablecharts.com/news/2275-fola-s-full-circle-moment-from-bella-and-zlatan-s-co-sign-to-no-1
- The Guardian, Fola's Pop-Soul Diary (May 2025): https://guardian.ng/life/music/folas-pop-soul-diary/
- Pulse Nigeria, Bella Shmurda & FOLA Unite on Dagbana Riddim (Apr 2025): https://www.pulse.ng/story/bella-shmurda-and-fola-unite-on-explosive-new-anthem-dangbana-riddim-2025041112560248281
- Pulse Nigeria, FOLA's UK headlining show (Apr 2026): https://www.pulse.ng/story/afrobeats-fola-shine-in-his-maiden-uk-concert-2026042017060099913

Photo URL sources include Notjustok, HIPTV, BusinessDay, Bella Shmurda's X post, African Folder, and Pulse. Photo rights have **not** been cleared for production deployment. Replace with licensed, approved artist press photos and magazine imagery (or negotiate permissions) before public launch.

## Merchandise

Generic hoodie reference image is sourced from Lummi and may not be appropriate for public/commercial use. If it fails to load, a locally authored SVG placeholder displays. The sample hoodie branding is a design mockup, **not a real product**. No checkout, pricing or inventory is represented.

## Tours

All 2027 dates and locations in `conceptShows` are **fictional layout samples**, clearly marked as unannounced on every tour surface. Replace the data with verified events before removing the notices. The images for each stop are still frames from the supplied montage, not photographs of real concerts.

## Before publishing

1. Obtain written permission for the YouTube-derived hero video and clear photo/logo use.
2. Replace external editorial images with approved press assets hosted on your own optimized image CDN.
3. Confirm any tour information with management; remove fictitious data.
4. Replace merchandise mockups with real, approved products and attach a real store only if authorized.
5. Add verified management/press contacts and wire actual newsletter/subscription infrastructure if needed.
6. Test `npm run build`, video behavior, YouTube embeds and mobile performance using your network. Set `robots` to `index: true` **only after authorization**.
