'use client';

import React from 'react';
import { useI18n } from '@/lib/i18n';
import { siteConfig } from '@/content/site.config';
import {
	upcomingEvents,
	getEventCities,
	formatDottedDate,
} from '@/content/events';

const HeroHeader: React.FC = () => {
	const { locale, t } = useI18n();
	const isZh = locale === 'zh';

	const nextEvent =
		[...upcomingEvents].sort((a, b) =>
			(a.date ?? '').localeCompare(b.date ?? ''),
		)[0] ?? null;

	const cities = getEventCities();

	return (
		<section className="pt-10 md:pt-16">
			<p className="mono text-mute">
				{isZh ? 'SpaceX AI 上海社区' : 'SpaceX AI Shanghai'}
			</p>

			<h1 className="h1 mt-6 text-ink">
				{t('home.heroHeadingA')}
				<br />
				{t('home.heroHeadingB')}
			</h1>

			<p className="mt-6 max-w-[52ch] text-[15px] leading-[1.7] text-mute">
				{t('home.heroDescription')}
			</p>

			<div id="events" className="mt-12 scroll-mt-20">
				{nextEvent ? (
					<a
						href={nextEvent.lumaUrl ?? siteConfig.lumaUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="grid grid-cols-[auto_1fr_auto] items-center gap-x-4 border-t border-ink border-b border-line py-4 transition-opacity hover:opacity-70 md:gap-x-8"
					>
						<span className="mono flex items-center gap-2 whitespace-nowrap text-ink">
							<span className="inline-block h-2 w-2 animate-dot rounded-full bg-dot" />
							{t('home.nextEvent')}
						</span>
						<span className="flex min-w-0 flex-col gap-1 md:flex-row md:items-baseline md:gap-3">
							<span className="truncate text-[15px] font-medium text-ink">
								{isZh
									? nextEvent.titleLocal ?? nextEvent.title
									: nextEvent.title}
							</span>
							<span className="mono truncate text-mute">
								{formatDottedDate(nextEvent.date)}
								{nextEvent.time ? `  ${nextEvent.time}` : ''}
								<span className="hidden md:inline">
									{`  ·  ${isZh ? nextEvent.locationLocal ?? nextEvent.location : nextEvent.location}`}
								</span>
							</span>
						</span>
						<span className="mono whitespace-nowrap text-ink">
							{t('home.register')} →
						</span>
					</a>
				) : (
					<a
						href={siteConfig.lumaUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="u-link mono flex items-center justify-between border-t border-ink border-b border-line py-4 text-ink"
					>
						{t('home.subscribeCalendar')}
						<span>→</span>
					</a>
				)}
			</div>

			<div className="mt-10 grid grid-cols-3 gap-4 md:mt-14">
				{cities.map((c) => (
					<div key={c.cityEn}>
						<p className="city-name text-ink">
							{isZh ? c.city : c.cityEn}
						</p>
						<p className="mono mt-2 text-mute">{c.cityEn}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default HeroHeader;
