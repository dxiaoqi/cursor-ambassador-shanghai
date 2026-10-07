/**
 * Inspiration-style cards: soft radius, gentle resting shadow that grows
 * and lifts on hover. Motion lives in transform + box-shadow only.
 */

const cardMotion =
  "transition-[transform,box-shadow,border-color,background-color] duration-300 ease-out";

export const cardBase = `relative overflow-hidden bg-cursor-surface border border-cursor-border rounded-2xl shadow-sm ${cardMotion}`;

export const cardHover =
  "hover:-translate-y-1 hover:shadow-md hover:border-cursor-border-emphasis";

export const cardInteractive = `${cardBase} ${cardHover}`;

/** Featured / accent-rail event card — glows warmly on hover */
export const cardFeatured = `relative overflow-hidden bg-cursor-surface border border-cursor-border border-l-2 border-l-cursor-accent-orange rounded-2xl shadow-sm ${cardMotion} hover:-translate-y-1 hover:shadow-glow`;

/** Ambassador / partner tile */
export const cardTile = `bg-cursor-surface border border-cursor-border rounded-2xl shadow-sm ${cardMotion} hover:-translate-y-1 hover:shadow-md hover:border-cursor-border-emphasis`;
