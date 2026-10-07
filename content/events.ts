import { CursorEvent } from "@/lib/types";

export const events: CursorEvent[] = [
  {
    id: "grok-bot-meetup-shanghai-2026-10",
    title: "Grok Bot Meetup Shanghai",
    titleLocal: "Grok Bot 上海 Meetup",
    date: "2026-10-18",
    time: "14:00–17:00",
    displayDate: "October 18, 2026",
    displayDateLocal: "2026 年 10 月 18 日",
    city: "上海",
    cityEn: "Shanghai",
    location: "Pudong Software Park, Shanghai",
    locationLocal: "上海浦东软件园",
    lumaUrl: "https://luma.com/spacexai-kh2x",
    status: "upcoming",
  },
  {
    id: "cursor-luobu-game-jam-shanghai-2026-06",
    title: "Cursor / Luobu AI Game Jam Shanghai",
    titleLocal: "Cursor / 罗布 AI Game Jam 上海",
    date: "2026-06-13",
    displayDate: "June 13, 2026",
    displayDateLocal: "2026 年 6 月 13 日",
    city: "上海",
    cityEn: "Shanghai",
    location: "Xuhui, Shanghai",
    locationLocal: "上海徐汇区",
    lumaUrl: "https://luma.com/45hgzng7",
    status: "past",
  },
  {
    id: "cafe-cursor-shanghai-2025-12",
    title: "Cafe Cursor Shanghai",
    titleLocal: "上海 Cursor 咖啡局",
    date: "2025-12-20",
    displayDate: "December 20, 2025",
    displayDateLocal: "2025 年 12 月 20 日",
    city: "上海",
    cityEn: "Shanghai",
    location: "Shanghai, China",
    locationLocal: "中国 上海",
    lumaUrl: "https://luma.com/pqmlwqf8",
    status: "past",
  },
  {
    id: "cursor-shanghai-workshop-code-fun-2025-09",
    title: "Cursor Shanghai Workshop: Code Fun",
    titleLocal: "Cursor 上海工作坊：Code Fun",
    date: "2025-09-26",
    displayDate: "September 26, 2025",
    displayDateLocal: "2025 年 9 月 26 日",
    city: "上海",
    cityEn: "Shanghai",
    location: "Shanghai, China",
    locationLocal: "中国 上海",
    lumaUrl: "https://luma.com/9y12zutc",
    status: "past",
  },
  {
    id: "cursor-meetup-changsha-2025-09",
    title: "Cursor Meetup ChangSha",
    titleLocal: "Cursor 长沙 Meetup",
    date: "2025-09-20",
    displayDate: "September 20, 2025",
    displayDateLocal: "2025 年 9 月 20 日",
    city: "长沙",
    cityEn: "Changsha",
    location: "Changsha, China",
    locationLocal: "中国 长沙",
    lumaUrl: "https://luma.com/cpc6q9fp",
    status: "past",
  },
  {
    id: "cursor-vibe-coding-workshop-shanghai-2025-09",
    title: "Cursor Vibe Coding Workshop Shanghai",
    titleLocal: "Cursor Vibe Coding 上海工作坊",
    date: "2025-09-14",
    displayDate: "September 14, 2025",
    displayDateLocal: "2025 年 9 月 14 日",
    city: "上海",
    cityEn: "Shanghai",
    location: "Shanghai, China",
    locationLocal: "中国 上海",
    lumaUrl: "https://luma.com/o7ly8mqg",
    status: "past",
  },
  {
    id: "cursor-meetup-shanghai-2025-08",
    title: "Cursor Meetup Shanghai",
    titleLocal: "Cursor 上海 Meetup",
    date: "2025-08-16",
    displayDate: "August 16, 2025",
    displayDateLocal: "2025 年 8 月 16 日",
    city: "上海",
    cityEn: "Shanghai",
    location: "Pudong Software Park, Shanghai",
    locationLocal: "上海浦东软件园",
    lumaUrl: "https://luma.com/hsuzdjwv",
    status: "past",
  },
  {
    id: "cursor-meetup-nanjing-2025-08",
    title: "Cursor Meetup Nanjing",
    titleLocal: "Cursor 南京 Meetup",
    date: "2025-08-09",
    displayDate: "August 9, 2025",
    displayDateLocal: "2025 年 8 月 9 日",
    city: "南京",
    cityEn: "Nanjing",
    location: "Jianye, Nanjing",
    locationLocal: "南京市建邺区金鱼嘴基金大厦",
    lumaUrl: "https://luma.com/rpeixzgx",
    status: "past",
  },
];

export const upcomingEvents = events.filter(
  (event) => event.status === "upcoming",
);
export const pastEvents = events.filter((event) => event.status === "past");

const CITY_COLUMN_ORDER = ["Shanghai", "Nanjing", "Changsha"];

export interface EventCity {
  city: string;
  cityEn: string;
}

export function getEventCities(): EventCity[] {
  const unique = new Map<string, EventCity>();
  for (const event of events) {
    if (!unique.has(event.cityEn)) {
      unique.set(event.cityEn, { city: event.city, cityEn: event.cityEn });
    }
  }
  return [...unique.values()].sort((a, b) => {
    const ia = CITY_COLUMN_ORDER.indexOf(a.cityEn);
    const ib = CITY_COLUMN_ORDER.indexOf(b.cityEn);
    return (ia === -1 ? CITY_COLUMN_ORDER.length : ia) -
      (ib === -1 ? CITY_COLUMN_ORDER.length : ib);
  });
}

export function formatDottedDate(isoDate?: string): string {
  if (!isoDate) return "";
  return isoDate.replace(/-/g, ".");
}
