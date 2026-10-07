'use client';

import React from 'react';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import { MarketingColumn, MarketingGrid } from '@/components/layout/MarketingGrid';

type Photo = {
	src: string;
};

const photos: Photo[] = [
	{ src: '/images/events/cursor-shanghai-talk.jpg' },
	{ src: '/images/events/cursor-shanghai-demo.jpg' },
	{ src: '/images/events/cursor-shanghai-workshop.jpg' },
];

const PillarsSection: React.FC = () => {
	const { t } = useI18n();

	return (
		<section className="py-20 md:py-28">
			<MarketingGrid>
				<MarketingColumn width="full">
					<div className="mb-12 text-center">
						<p className="cursor-eyebrow mb-5 justify-center">
							<span className="h-1.5 w-1.5 rounded-full bg-cursor-accent-orange" />
							{t('home.pillarsKicker')}
						</p>
						<h2 className="cursor-section-title mx-auto max-w-[18ch] text-cursor-text">
							{t('home.pillarsTitle')}
						</h2>
						<p className="mx-auto mt-4 max-w-[52ch] text-sm text-cursor-text-muted">
							{t('home.pillarsSubtitle')}
						</p>
					</div>

					{/* Three photos — centre raised */}
					<div className="mx-auto flex max-w-5xl items-center justify-center gap-4 md:gap-6">
						{photos.map((photo, index) => {
							const isCenter = index === 1;
							return (
								<div
									key={photo.src}
									className={`relative overflow-hidden rounded-xl border border-cursor-border transition-transform duration-500 hover:-translate-y-2 ${
										isCenter
											? 'z-10 aspect-[4/5] w-[38%] shadow-lg md:w-[34%]'
											: 'aspect-[4/5] w-[27%] translate-y-6 opacity-80 shadow-md md:w-[26%]'
									}`}
								>
									<Image
										src={photo.src}
										alt=""
										fill
										sizes="(max-width: 768px) 40vw, 360px"
										className="object-cover"
									/>
								</div>
							);
						})}
					</div>

					<div className="mt-14 text-center">
						<span
							className="mx-auto mb-5 flex h-11 w-11 items-center justify-center rounded-full text-white shadow-glow"
							style={{ background: 'var(--brand-gradient)' }}
						>
							<Sparkles className="h-5 w-5" />
						</span>
						<h3 className="mb-2 text-lg text-cursor-text">{t('home.pillarsHighlightTitle')}</h3>
						<p className="mx-auto max-w-[46ch] text-sm text-cursor-text-muted">
							{t('home.pillarsHighlightDescription')}
						</p>
					</div>
				</MarketingColumn>
			</MarketingGrid>
		</section>
	);
};

export default PillarsSection;
