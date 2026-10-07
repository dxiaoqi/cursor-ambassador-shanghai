'use client';

import React from 'react';
import { featuredResource } from '@/content/featured';
import { useI18n } from '@/lib/i18n';
import { Button } from '@/components/ui';

const FeaturedSection: React.FC = () => {
	const { locale, t } = useI18n();
	const isZh = locale === 'zh';

	return (
		<section className="mb-20 border-t border-cursor-border pt-10">
			<p className="cursor-eyebrow mb-2">{t('home.featured')}</p>
			<h2 className="cursor-section-title mb-3 text-cursor-text">
				{isZh ? (featuredResource.titleLocal ?? featuredResource.title) : featuredResource.title}
			</h2>
			<p className="mb-6 max-w-2xl text-base leading-relaxed text-cursor-text-secondary md:text-lg">
				{isZh
					? featuredResource.descriptionLocal ?? featuredResource.description
					: featuredResource.description || t('featured.defaultDescription')}
			</p>
			<Button href={featuredResource.href} variant="primary" size="md">
				{isZh
					? featuredResource.ctaLabelLocal ?? featuredResource.ctaLabel
					: featuredResource.ctaLabel || t('home.viewSlides')}
				<span aria-hidden="true">→</span>
			</Button>
		</section>
	);
};

export default FeaturedSection;
