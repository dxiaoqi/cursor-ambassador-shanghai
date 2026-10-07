import { BentoImage } from "@/lib/types";

// Real chapter photos from Cursor meetups in Shanghai and Nanjing.
// Layout slots live in bento-slots.ts; images shuffle daily into those fixed slots on the server.
export const headerPhotoPool: BentoImage[] = [
  {
    src: "/images/events/cursor-shanghai-talk.jpg",
    alt: "Audience watching a talk at Cursor Shanghai Meetup",
    altLocal: "上海 Cursor Meetup 演讲现场",
  },
  {
    src: "/images/events/cursor-shanghai-audience.jpg",
    alt: "Full house at Cursor Shanghai Meetup",
    altLocal: "上海 Cursor Meetup 满座的观众",
  },
  {
    src: "/images/events/cursor-shanghai-demo.jpg",
    alt: "Speaker presenting a live demo at Cursor Shanghai",
    altLocal: "上海 Cursor 活动现场演示",
  },
  {
    src: "/images/events/cursor-shanghai-workshop.jpg",
    alt: "Builders collaborating at the Cursor Shanghai workshop",
    altLocal: "上海 Cursor 工作坊动手实践",
  },
  {
    src: "/images/events/cursor-shanghai-group.jpg",
    alt: "Group photo at Cursor Shanghai Meetup",
    altLocal: "上海 Cursor Meetup 大合影",
  },
  {
    src: "/images/events/cursor-nanjing-audience.jpg",
    alt: "Audience at Cursor Nanjing Meetup",
    altLocal: "南京 Cursor Meetup 观众席",
  },
  {
    src: "/images/events/cursor-nanjing-stage.jpg",
    alt: "Community on stage at Cursor Nanjing Meetup",
    altLocal: "南京 Cursor Meetup 舞台合影",
  },
  {
    src: "/images/events/cursor-nanjing-group.jpg",
    alt: "Group photo at Cursor Nanjing Meetup",
    altLocal: "南京 Cursor Meetup 大合影",
  },
];
