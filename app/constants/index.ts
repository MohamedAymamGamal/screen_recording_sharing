export const MAX_VIDEO_SIZE = 500 * 1024 * 1024;
export const MAX_THUMBNAIL_SIZE = 10 * 1024 * 1024;

export const BUNNY = {
  STREAM_BASE_URL: "https://video.bunnycdn.com/library",
  STORAGE_BASE_URL: "https://sg.storage.bunnycdn.com/snapcast",
  CDN_URL: "https://snapcast.b-cdn.net",
  EMBED_URL: "https://iframe.mediadelivery.net/embed",
  TRANSCRIPT_URL: "https://vz-47a08e64-84d.b-cdn.net",
};

export const emojis = ["😂", "😍", "👍"];

export const filterOptions = [
  "Most Viewed",
  "Most Recent",
  "Oldest First",
  "Least Viewed",
];

export const visibilities: Visibility[] = ["public", "private"];

export const ICONS = {
  record: "/assets/icons/record.svg",
  close: "/assets/icons/close.svg",
  upload: "/assets/icons/upload.svg",
};

export const initialVideoState = {
  isLoaded: false,
  hasIncrementedView: false,
  isProcessing: true,
  processingProgress: 0,
};

export const infos = ["transcript", "metadata"];

export const DEFAULT_VIDEO_CONFIG = {
  width: { ideal: 1920 },
  height: { ideal: 1080 },
  frameRate: { ideal: 30 },
};

export const DEFAULT_RECORDING_CONFIG = {
  mimeType: "video/webm;codecs=vp9,opus",
  audioBitsPerSecond: 128000,
  videoBitsPerSecond: 2500000,
};

const dummyCards = [
// {
//       id='1',
//       title='video title',
//       thumbnail='/assets/images/video1.png',
//       createdAt={new Date("2025-03-20T14:10:00")},
//       userImg='/assets/images/jason.png',
//       username='jason',
//       views=10,
//       visibility='public',
//       duration={120}
// },
{
  id: '2',
  title: 'Learn React in 10 Minutes',
  thumbnail: '/assets/images/video1.png',
  createdAt: new Date('2025-04-15T10:24:00'),
  userImg: '/assets/images/emily.png',
  username: 'emily_dev',
  views: 243,
  visibility: 'public',
  duration: 600
},

{
  id: '3',
  title: 'Top 5 JavaScript Tricks',
  thumbnail: '/assets/images/video1png',
  createdAt: new Date('2025-03-20T14:10:00'),
  userImg: '/assets/images/james.webp',
  username: 'mike_coder',
  views: 1045,
  visibility: 'private',
  duration: 420
} ,

{
  id: '4',
  title: 'CSS Grid vs Flexbox',
  thumbnail: '/assets/images/video1.png',
  createdAt: new Date('2025-05-01T09:00:00'),
  userImg: '/assets/images/james.webp',
  username: 'lisa_styles',
  views: 376,
  visibility: 'unlisted',
  duration: 300
},

{
  id: '5',
  title: 'Node.js Crash Course',
  thumbnail: '/assets/images/video1.png',
  createdAt: new Date('2025-01-25T17:45:00'),
  userImg: '/assets/images/james.webp',
  username: 'tom_backend',
  views: 802,
  visibility: 'public',
  duration: 900
},


]