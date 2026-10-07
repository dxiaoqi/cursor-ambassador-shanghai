'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import { MarketingColumn, MarketingGrid } from '@/components/layout/MarketingGrid';

const SHOW_PARTNERS = false;

const PartnersSection: React.FC = () => {
	const { t } = useI18n();

	if (!SHOW_PARTNERS) {
		return null;
	}

	return (
		<section id="partners" className="scroll-mt-20 py-20 md:py-28">
			<MarketingGrid>
				<MarketingColumn width="full">
					<div className="overflow-hidden rounded-2xl border border-cursor-border bg-cursor-surface shadow-xs">
						<div className="grid gap-8 p-8 md:grid-cols-[1.1fr_1fr] md:items-center md:gap-12 md:p-12">
							<div>
								<p className="cursor-eyebrow mb-4">
									<span className="h-1.5 w-1.5 rounded-full bg-cursor-accent-orange" />
									{t('partners.kicker')}
								</p>
								<h2 className="cursor-section-title text-cursor-text">
									{t('partners.heading')}
								</h2>
							</div>
							<div>
								<p className="mb-7 text-sm leading-relaxed text-cursor-text-secondary md:text-base">
									{t('partners.description')}
								</p>
								<a
									href="#community"
									className="group inline-flex items-center gap-2 rounded-full border border-cursor-border px-5 py-2.5 text-sm font-medium text-cursor-text transition-all duration-200 hover:-translate-y-0.5 hover:border-cursor-accent-orange/50 hover:shadow-md"
								>
									{t('partners.cta')}
									<ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
								</a>
							</div>
						</div>
					</div>
				</MarketingColumn>
			</MarketingGrid>
		</section>
	);
};

export default PartnersSection;
