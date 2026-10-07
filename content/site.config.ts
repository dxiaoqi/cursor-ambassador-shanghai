// REPLACE: Update these values for your local Cursor community.
// Keep the required footer template credit in components/Footer.tsx (see NOTICE / ATTRIBUTION.md).
export const siteConfig = {
	communityName: 'SpaceX AI Shanghai',
	communityNameLocal: 'SpaceX AI Shanghai',
	city: 'Shanghai',
	country: 'China',
	lumaUrl: 'https://luma.com/spacexai-shanghai',
	// REPLACE: Paste your Luma calendar embed URL from Luma → Calendar → Embed. Leave empty to hide the calendar section.
	lumaCalendarEmbedUrl: '',
	cursorCommunityUrl: 'https://cursor.com/community',
	defaultLocale: 'zh',
	locales: ['en', 'zh'],
	footerTagline: '',
	/** Short site description for <meta>, Open Graph, and Twitter cards. Keep it concrete. */
	description:
		'上海及周边城市的开发者与 AI 爱好者社区，围绕 Grok、Grok Bot 与 Cursor 的线下活动。',
	/** Path under /public for the default 1200×630 share image. */
	ogImage: '/og.jpg',
	sections: {
		matchmaking: false,
		photoDisclaimer: false,
		lumaCalendar: false,
		communityTweets: false,
		/** Set true after replacing sample quotes in content/community-quotes.ts */
		communityQuotes: false,
	},
};

export type SiteConfig = typeof siteConfig;
