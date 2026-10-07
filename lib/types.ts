export type LocaleCode = string;

export interface CursorEvent {
  id: string;
  title: string;
  titleLocal?: string;
  date?: string;
  time?: string;
  displayDate: string;
  displayDateLocal?: string;
  attendees?: number;
  city: string;
  cityEn: string;
  location: string;
  locationLocal?: string;
  lumaUrl?: string;
  recapPath?: string;
  thumbnail?: string;
  galleryImages?: string[];
  status: "upcoming" | "past";
  host?: { name: string; nameLocal?: string; logo: string; url?: string };
}

export interface SocialLinks {
  x?: string;
  linkedin?: string;
  github?: string;
  website?: string;
}

export interface Ambassador {
  name: string;
  nameLocal?: string;
  role?: string;
  roleLocal?: string;
  photo: string;
  links: SocialLinks;
  wechatQrCode?: string;
}

export interface Partner {
  name: string;
  logo: string;
  url: string;
  logoBg?: string;
  logoHeight?: string;
}

export interface FeaturedResource {
  title: string;
  titleLocal?: string;
  description: string;
  descriptionLocal?: string;
  href: string;
  ctaLabel: string;
  ctaLabelLocal?: string;
}

export interface BentoImage {
  src: string;
  alt: string;
  altLocal?: string;
}

export interface BentoSlot {
  row: number;
  col: number;
  rowSpan?: number;
  colSpan?: number;
  mobile?: {
    row: number;
    col: number;
    rowSpan?: number;
    colSpan?: number;
  };
  mobileHidden?: boolean;
}

export interface HeaderPhoto extends BentoSlot, BentoImage {}

export interface HeroBentoPhotos {
  desktop: HeaderPhoto[];
  mobile: HeaderPhoto[];
}

export interface GalleryPhoto {
  src: string;
  alt: string;
  altLocal?: string;
}

export interface RecapPhotoCredit {
  name: string;
  url?: string;
}

export interface RecapSpeaker {
  name: string;
  topic: string;
  topicLocal?: string;
  photo?: string;
  url?: string;
}

export interface RecapProject {
  name: string;
  description: string;
  descriptionLocal?: string;
  author?: string;
  url?: string;
}

export interface RecapHighlight {
  quote: string;
  quoteLocal?: string;
  author?: string;
}

export interface RecapResource {
  label: string;
  labelLocal?: string;
  url: string;
}

export interface RecapData {
  slug: string;
  title: string;
  titleLocal?: string;
  date: string;
  dateLocal?: string;
  attendees?: number;
  summary: string[];
  summaryLocal?: string[];
  host?: { name: string; nameLocal?: string; logo: string; url?: string };
  speakers?: RecapSpeaker[];
  projects?: RecapProject[];
  highlights?: RecapHighlight[];
  resources?: RecapResource[];
  photoCredits?: RecapPhotoCredit[];
  photos: GalleryPhoto[];
}

export interface WorldEventPhoto {
  src: string;
  location: string;
  locationLocal?: string;
  date?: string;
  dateLocal?: string;
  alt: string;
  altLocal?: string;
}

export interface SiteSections {
  matchmaking?: boolean;
  photoDisclaimer?: boolean;
  lumaCalendar?: boolean;
  communityTweets?: boolean;
}
