/*
 * Editable content for the concept experience.
 * YouTube IDs point to official artist uploads verified November 2026.
 * External editorial photography is linked to its publisher; replace with cleared press assets before public launch.
 * Tour dates and merchandise are deliberately fictional visual placeholders.
 */
export type SpotlightVideo = { id: string; title: string; credit: string; year: string; tag: string };
export type SpotlightArtist = { name: string; slug: string; number: string; color: string; blurb: string; videos: SpotlightVideo[] };

export const spotlightArtists: SpotlightArtist[] = [
  {name: 'BELLA SHMURDA', slug: 'bella', number: '01', color: 'chartreuse', blurb: 'THE SOUND THAT STARTED THE MOVEMENT.', videos: [
    { id: 'JriGKmLtIc0', title: 'Happy Song', credit: 'Bella Shmurda', year: '2026', tag: 'OFFICIAL VIDEO' },
    { id: 'Uf4p2tAdfrA', title: 'Ara', credit: 'Bella Shmurda feat. Olamide', year: '2026', tag: 'OFFICIAL VIDEO' },
    { id: 'LblUEe3Kves', title: 'Bounce', credit: 'Bella Shmurda feat. Seyi Vibez', year: '2025', tag: 'OFFICIAL VIDEO' },
    { id: 'nwSYUMzIXPM', title: 'Dagbana Riddim', credit: 'Bella Shmurda, FOLA', year: '2025', tag: 'OFFICIAL VIDEO' },
    { id: 'xRiw_5aBEjM', title: "it's over", credit: 'FOLA, Bella Shmurda, Zlatan', year: '2026', tag: 'OFFICIAL VIDEO' },
  ]},
  {name: 'FOLA', slug: 'fola', number: '02', color: 'lavender', blurb: 'MELODIES FOR THE PEOPLE WHO FEEL EVERYTHING.', videos: [
    { id: 'Wk0OU6zAdPU', title: 'attention!', credit: 'FOLA', year: '2026', tag: 'OFFICIAL VIDEO' },
    { id: 'xRiw_5aBEjM', title: "it's over", credit: 'FOLA, Bella Shmurda, Zlatan', year: '2026', tag: 'OFFICIAL VIDEO' },
    { id: 'ZFWIFFQ7PYM', title: 'golibe', credit: 'FOLA, Victony', year: '2025', tag: 'OFFICIAL VIDEO' },
  ]},
];

export type JournalEntry = { title: string; artist: string; date: string; source: string; url: string; image: string; fallback: string; number: string };
export const journal: JournalEntry[] = [
 {number:'01', artist:'FOLA', date:'09 OCT 2026', source:'THE NATIVE', title:'FOLA Is Channeling a Striker’s Drive on “9”', url:'https://thenativemag.com/interview-fola-is-channeling-a-strikers-drive-on-9/', image:'https://albumtalks.com/wp-content/uploads/2026/10/hujpqqcx0aakads995427120257594242-1024x1024.jpg', fallback:'/images/editorial-fallback.svg'},
 {number:'02', artist:'FOLA', date:'09 OCT 2026', source:'BELLANAIJA', title:'FOLA’s Sophomore Album “9” Is Here', url:'https://www.bellanaija.com/2026/10/folas-sophomore-album-is-here-listen/', image:'https://notjustok.com/wp-content/uploads/2024/12/IMG_9017.jpeg', fallback:'/images/editorial-fallback.svg'},
 {number:'03', artist:'BELLA SHMURDA', date:'2025', source:'NOTJUSTOK', title:'Bella Shmurda Sets the Stage for “Sanity”', url:'https://notjustok.com/news/bella-shmurda-sets-release-date-for-new-album-sanity/', image:'https://notjustok.com/wp-content/uploads/2025/02/IMG_0069.jpeg', fallback:'/images/editorial-fallback.svg'},
 {number:'04', artist:'BELLA × FOLA', date:'11 APR 2025', source:'PULSE NIGERIA', title:'Bella Shmurda and FOLA Unite on “Dagbana Riddim”', url:'https://www.pulse.ng/story/bella-shmurda-and-fola-unite-on-explosive-new-anthem-dangbana-riddim-2025041112560248281', image:'https://sportal365images.com/process/smp-images-production/pulse.ng/11042025/ab6f7c51-56de-4ac7-b46e-d64d57d505c8.png?operations=autocrop%28700%3A467%29', fallback:'/images/editorial-fallback.svg'},
 {number:'05', artist:'FOLA', date:'18 APR 2026', source:'THE NATIVE', title:'FOLA Is Fully Loaded Ahead of His Headline Shows', url:'https://thenativemag.com/interview-fola-is-fully-loaded/', image:'https://sportal365images.com/process/smp-images-production/pulse.ng/17112025/8250be43-d0b6-415d-8054-68b1a24ed121.jpg?operations=autocrop%281200%3A630%29', fallback:'/images/editorial-fallback.svg'},
];

export const portraits = [
 {artist:'BELLA', label:'THE ORIGIN', image:'https://notjustok.com/wp-content/uploads/2025/02/IMG_0069.jpeg', fallback:'/images/editorial-fallback.svg', credit:'NOTJUSTOK'},
 {artist:'FOLA', label:'THE NEW WAVE', image:'https://notjustok.com/wp-content/uploads/2024/12/IMG_9017.jpeg', fallback:'/images/editorial-fallback.svg', credit:'NOTJUSTOK'},
 {artist:'BELLA × FOLA', label:'THE COSIGN', image:'https://pbs.twimg.com/media/GZnBrheWMA8DLBH.jpg', fallback:'/images/editorial-fallback.svg', credit:'X / ARTIST ANNOUNCEMENT'},
 {artist:'BELLA', label:'THE VOICE', image:'https://notjustok.com/wp-content/uploads/2025/02/Bella-Shmurda.jpg', fallback:'/images/editorial-fallback.svg', credit:'NOTJUSTOK'},
 {artist:'FOLA', label:'THE STRIKER', image:'https://sportal365images.com/process/smp-images-production/pulse.ng/17112025/8250be43-d0b6-415d-8054-68b1a24ed121.jpg?operations=autocrop%281200%3A630%29', fallback:'/images/editorial-fallback.svg', credit:'PULSE NIGERIA'},
];

// Fictional date/city mockups — never publish as actual announced events.
export const conceptShows = [
  {day:'14', month:'FEB', year:'2027', city:'LAGOS', country:'NIGERIA', venue:'VENUE TO BE ANNOUNCED'},
  {day:'17', month:'APR', year:'2027', city:'LONDON', country:'UNITED KINGDOM', venue:'VENUE TO BE ANNOUNCED'},
  {day:'05', month:'JUN', year:'2027', city:'TORONTO', country:'CANADA', venue:'VENUE TO BE ANNOUNCED'},
  {day:'28', month:'AUG', year:'2027', city:'ACCRA', country:'GHANA', venue:'VENUE TO BE ANNOUNCED'},
];
