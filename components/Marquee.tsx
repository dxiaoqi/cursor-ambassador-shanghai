'use client';

import React from 'react';
import { useI18n } from '@/lib/i18n';

export type MarqueeItem = {
	value: string;
	labelKey: string;
};

type MarqueeProps = {
	items: MarqueeItem[];
};

const Marquee: React.FC<MarqueeProps> = ({ items }) => {
	const { t } = useI18n();
	const loop = [...items, ...items];

	return (
		<div className="relative flex w-full overflow-hidden border-y border-cursor-border bg-cursor-bg py-4">
			<div className="flex shrink-0 animate-marquee items-center whitespace-nowrap">
				{loop.map((item, index) => (
					<React.Fragment key={`${item.labelKey}-${index}`}>
						<span className="flex items-center gap-2 px-6 text-sm text-cursor-text-secondary">
							<span className="text-base font-semibold text-cursor-text">{item.value}</span>
							{t(item.labelKey)}
						</span>
						<span className="h-1 w-1 rounded-full bg-cursor-accent-orange" aria-hidden="true" />
					</React.Fragment>
				))}
			</div>
		</div>
	);
};

export default Marquee;
