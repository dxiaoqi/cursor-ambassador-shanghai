'use client';

import React from 'react';
import { ArrowUpRight, Code2, Coffee, Users, Video, Wrench } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import { siteConfig } from '@/content/site.config';
import { MarketingColumn, MarketingGrid } from '@/components/layout/MarketingGrid';

type Activity = {
	number: string;
	icon: React.ElementType;
	titleKey: string;
	descriptionKey: string;
};

const activities: Activity[] = [
	{
		number: '01',
		icon: Users,
		titleKey: 'home.space1Title',
		descriptionKey: 'home.space1Description',
	},
	{
		number: '02',
		icon: Wrench,
		titleKey: 'home.space2Title',
		descriptionKey: 'home.space2Description',
	},
	{
		number: '03',
		icon: Video,
		titleKey: 'home.space3Title',
		descriptionKey: 'home.space3Description',
	},
	{
		number: '04',
		icon: Code2,
		titleKey: 'home.space4Title',
		descriptionKey: 'home.space4Description',
	},
	{
		number: '05',
		icon: Coffee,
		titleKey: 'home.space5Title',
		descriptionKey: 'home.space5Description',
	},
];

const SpacesSection: React.FC = () => {
	const { t } = useI18n();

	return (
		<section className="py-20 md:py-28">
			<MarketingGrid>
				<MarketingColumn width="full">
					<div className="mb-12 text-center">
						<p className="cursor-eyebrow mb-5 justify-center">
							<span className="h-1.5 w-1.5 rounded-full bg-cursor-accent-orange" />
							{t('home.spacesKicker')}
						</p>
						<h2 className="cursor-section-title mx-auto mb-4 max-w-[20ch] text-cursor-text">
							{t('home.spacesTitle')}
						</h2>
						<p className="mx-auto max-w-[52ch] text-sm leading-relaxed text-cursor-text-muted md:text-base">
							{t('home.spacesSubtitle')}
						</p>
					</div>

					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
						{activities.map((activity) => {
							const Icon = activity.icon;
							return (
								<a
									key={activity.number}
									href={siteConfig.lumaUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="group flex flex-col rounded-2xl border border-cursor-border bg-cursor-surface p-6 shadow-xs transition-[transform,box-shadow,border-color,background-color] duration-300 hover:-translate-y-1 hover:border-cursor-accent-orange/40 hover:bg-cursor-surface-raised hover:shadow-md md:p-7"
								>
									<div className="mb-5 flex items-center justify-between">
										<span
											className="flex h-11 w-11 items-center justify-center rounded-xl text-cursor-accent-orange"
											style={{ background: 'var(--cursor-accent-orange-bg)' }}
										>
											<Icon className="h-5 w-5" strokeWidth={1.75} />
										</span>
										<span className="font-bsru text-2xl text-cursor-text-faint transition-colors duration-300 group-hover:text-cursor-accent-orange/60">
											{activity.number}
										</span>
									</div>
									<h3 className="mb-2 text-base text-cursor-text">
										{t(activity.titleKey)}
									</h3>
									<p className="mb-6 text-xs leading-relaxed text-cursor-text-muted">
										{t(activity.descriptionKey)}
									</p>
									<span className="mt-auto inline-flex items-center gap-1.5 text-xs font-medium text-cursor-accent-orange">
										{t('home.spaceCta')}
										<ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
									</span>
								</a>
							);
						})}
					</div>
				</MarketingColumn>
			</MarketingGrid>
		</section>
	);
};

export default SpacesSection;
