export type Artist = {
  slug: string; name: string; eyebrow: string; index: string; intro: string; bio: string;
  image: string; imageCredit:string; className: string; listenUrl: string; listenLabel: string;
};

export const artists: Artist[] = [
  { slug:'bella-shmurda',name:'BELLA SHMURDA',eyebrow:'FOUNDER / ARTIST',index:'01',
    intro:'THE VOICE THAT STARTED A MOVEMENT.',
    bio:'Bella Shmurda founded Dangbana Republik in 2021. His music crosses street-pop, melody, reflection and unmistakable Lagos energy, with projects including Hypertension and Sanity.',
    image:'https://notjustok.com/wp-content/uploads/2025/02/IMG_0069.jpeg',imageCredit:'NOTJUSTOK / PROMOTIONAL PORTRAIT',className:'bella',
    listenUrl:'https://music.apple.com/us/artist/bella-shmurda/1455517405',listenLabel:'Explore Bella’s music' },
  { slug:'fola',name:'FOLA',eyebrow:'ARTIST / SONGWRITER',index:'02',
    intro:'THE SOUND OF A NEW GENERATION.',
    bio:'FOLA brings a deeply melodic, emotionally led approach to Afropop and R&B. Following what a feeling and catharsis, his second album 9 arrived in October 2026 through Dangbana Republik Records / EMPIRE.',
    image:'https://notjustok.com/wp-content/uploads/2024/12/IMG_9017.jpeg',imageCredit:'NOTJUSTOK / PROMOTIONAL PORTRAIT',className:'fola',
    listenUrl:'https://music.apple.com/us/artist/fola/1571944412',listenLabel:'Explore FOLA’s music' },
];

export type Release = {
  title:string;artist:string;year:string;type:'Album'|'Single'|'EP';filter:'bella'|'fola'|'both';
  url:string; artwork:string; artCredit:string; theme:string; number:string;
  spotifyUrl?:string; spotifyId?:string;appleId?:string;tracks?:string[];
};

export const releases:Release[] = [
  { title:'9',artist:'FOLA',year:'2026',type:'Album',filter:'fola',theme:'nine',number:'01',
    url:'https://music.apple.com/us/album/9/6810267024',appleId:'6810267024',
    spotifyUrl:'https://open.spotify.com/album/1fHRY61FCATcIMjN0DPtdm',spotifyId:'1fHRY61FCATcIMjN0DPtdm',
    artwork:'https://albumtalks.com/wp-content/uploads/2026/10/hujpqqcx0aakads995427120257594242-1024x1024.jpg',artCredit:'ALBUM TALKS / OFFICIAL ALBUM ART',
    tracks:['awade','how many?','2am in toronto (feat. Davido)','stubborn','miss u ii (nriri)','in order','treat u right (feat. Ayra Starr)','attention!','fine ting (fine $hit)','waf','crime','my type (feat. BNXN)','hold u down (feat. Darkoo)',"it's over (feat. Bella Shmurda & Zlatan)"]},
  { title:'Sanity',artist:'Bella Shmurda',year:'2025',type:'Album',filter:'bella',theme:'sanity',number:'02',
    url:'https://music.apple.com/us/album/sanity/1834805696',appleId:'1834805696',
    artwork:'https://geo-media.beatport.com/image_size/1400x1400/85994d6d-787e-4835-bf5f-56f128937685.jpg',artCredit:'BEATPORT / OFFICIAL RELEASE ART',
    tracks:['Appraisal','Verily','Turn Me On','Sanity','Holy Jah','Mandalene','Bounce (feat. Seyi Vibez)','Fuji Fusion','Apala Fusion','Bygone (feat. CKay)','Pretty Girl (feat. Joshua Baraka)','Dangbana Riddim (feat. FOLA)','Run from God (feat. T.I BLAZE)','My G','Pain','Family']},
  { title:'catharsis',artist:'FOLA',year:'2025',type:'Album',filter:'fola',theme:'catharsis',number:'03',
    url:'https://music.apple.com/us/album/catharsis/1831623489',appleId:'1831623489',
    spotifyUrl:'https://open.spotify.com/album/6gTLViwiDv6NKtTAG0nm7S',spotifyId:'6gTLViwiDv6NKtTAG0nm7S',
    artwork:'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/59/b8/63/59b86391-e066-1f75-3302-b8b568667bd7/199316218947_cover.jpg/1380x1380bb.webp',artCredit:'APPLE MUSIC / OFFICIAL RELEASE ART',
    tracks:['gokada','eko','golibe (feat. Victony)','you','lost (feat. Kizz Daniel)','healer','cruise control','robbery (feat. Gabzy)','caricature','disco (feat. Young Jonn)',"it's going"]},
  { title:'Dangbana Riddim',artist:'Bella Shmurda × FOLA',year:'2025',type:'Single',filter:'both',theme:'riddim',number:'04',
    url:'https://music.apple.com/us/album/dangbana-riddim-single/1806940483',appleId:'1806940483',
    artwork:'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a4/0d/a6/a40da68e-e99a-67fc-ac85-6a80237b6ec3/0.jpg/3000x3000bb.jpg',artCredit:'APPLE MUSIC / OFFICIAL RELEASE ART',tracks:['Dangbana Riddim']},
  { title:'Hypertension',artist:'Bella Shmurda',year:'2022',type:'Album',filter:'bella',theme:'hyper',number:'05',
    url:'https://music.apple.com/us/album/hypertension/1647422092',appleId:'1647422092',
    artwork:'https://i.scdn.co/image/ab67616d0000b273a5690070aec5979696ad8678',artCredit:'SPOTIFY / OFFICIAL RELEASE ART'},
  { title:'what a feeling',artist:'FOLA',year:'2024',type:'EP',filter:'fola',theme:'feeling',number:'06',
    url:'https://music.apple.com/us/album/what-a-feeling-ep/1777531024',appleId:'1777531024',
    spotifyUrl:'https://open.spotify.com/album/0NWBna7snlHKH0NJ2f3Skp',spotifyId:'0NWBna7snlHKH0NJ2f3Skp',
    artwork:'https://i.audiomack.com/folapondis/5ddc8e88c3.webp?height=1000&width=1000',artCredit:'AUDIOMACK / OFFICIAL EP ART',
    tracks:['who does that? (feat. Bella Shmurda)','alone - Remix (feat. BNXN)','tonight','mandela (effect) (feat. Magixx)','bye bye','alone (feat. BhadBoi OML)']},
  { title:'DND',artist:'Bella Shmurda',year:'2023',type:'EP',filter:'bella',theme:'dnd',number:'07',
    url:'https://open.spotify.com/album/4P84VNKfBLVKhIliJ5D0dW',spotifyUrl:'https://open.spotify.com/album/4P84VNKfBLVKhIliJ5D0dW',spotifyId:'4P84VNKfBLVKhIliJ5D0dW',
    artwork:'https://i.scdn.co/image/ab67616d0000b273feb4336050731c224f786d31',artCredit:'SPOTIFY / OFFICIAL EP ART',
    tracks:['In Charge','Ara (Gen Gen Tin)','NSV (feat. Tiwa Savage)','DND (feat. Lil Kesh)','Bankruptcy (feat. Pheelz)','Jojo']},
  { title:'High Tension 2.0',artist:'Dangbana Republik × Bella Shmurda',year:'2021',type:'EP',filter:'bella',theme:'tension',number:'08',
    url:'https://music.apple.com/us/album/high-tension-2-0/1566806454',appleId:'1566806454',
    artwork:'https://i.audiomack.com/bella-shmurda/4694b820f7.webp',artCredit:'AUDIOMACK / OFFICIAL RELEASE ART',
    tracks:['Out There','World','Soldier Go','Far Away','Lako','Rush','Party Next Door','Champion']},
];
export const socials={instagram:'https://www.instagram.com/dangbana__republik/'};
