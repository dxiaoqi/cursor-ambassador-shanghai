import { nanjingMeetupRecap } from "@/content/recaps/nanjing-meetup";
import { shanghaiMeetupRecap } from "@/content/recaps/shanghai-meetup";
import { RecapData } from "@/lib/types";

export const recapsBySlug: Record<string, RecapData> = {
  [shanghaiMeetupRecap.slug]: shanghaiMeetupRecap,
  [nanjingMeetupRecap.slug]: nanjingMeetupRecap,
};
