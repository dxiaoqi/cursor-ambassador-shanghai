import { WorldEventPhoto } from "@/lib/types";

// Real photos from Cursor communities in China. The Shanghai chapter is the home community;
// Nanjing is a nearby sister chapter. Swap in other cities as more chapter photos become available.
export const worldEventPhotos: WorldEventPhoto[] = [
  {
    src: "/images/events/cursor-shanghai-group.jpg",
    location: "Shanghai",
    locationLocal: "上海",
    date: "Summer 2025",
    dateLocal: "2025 年夏",
    alt: "Group photo at Cursor Shanghai Meetup",
    altLocal: "上海 Cursor Meetup 大合影",
  },
  {
    src: "/images/events/cursor-nanjing-group.jpg",
    location: "Nanjing",
    locationLocal: "南京",
    date: "August 9, 2025",
    dateLocal: "2025 年 8 月 9 日",
    alt: "Group photo at Cursor Nanjing Meetup",
    altLocal: "南京 Cursor Meetup 大合影",
  },
];
