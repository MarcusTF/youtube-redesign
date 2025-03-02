import { VideoCardProps } from "./VideoCard";

export const EMPTY_VIDEO_FOR_SKELETON = {
  thumbnail: {
    url: "LOADING",
    description: ".",
    title: "",
  },
  duration: 0,
  channelAvatar: {
    url: "LOADING",
    description: ".",
    title: ".",
  },
  title: ".",
  channelName: ".",
  views: 0,
  uploadDateTime: {
    date: "",
    timezone: "",
    timezone_type: 1,
  },
  id: "loading",
} satisfies VideoCardProps;
