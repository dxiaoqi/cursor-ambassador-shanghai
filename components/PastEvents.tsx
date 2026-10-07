'use client';

import React from 'react';
import { pastEvents, formatDottedDate } from '@/content/events';
import { useI18n } from '@/lib/i18n';

const PastEvents: React.FC = () => {
  const { locale, t } = useI18n();
  const isZh = locale === 'zh';

  if (pastEvents.length === 0) {
    return null;
  }

  return (
    <section id="recaps" className="label-grid scroll-mt-20">
      <p className="mono text-mute">{t('home.recapsLabel')}</p>

      <div className="border-t border-line">
        {pastEvents.map((event) => (
          <a
            key={event.id}
            href={event.lumaUrl ?? '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="recap-row grid grid-cols-[72px_minmax(0,1fr)_auto_16px] items-baseline gap-x-3 border-b border-line py-4 md:grid-cols-[96px_minmax(0,1fr)_auto_20px] md:gap-x-6"
          >
            <span className="mono text-mute">
              {formatDottedDate(event.date)}
            </span>
            <span className="min-w-0 truncate font-medium text-ink">
              {isZh ? event.titleLocal ?? event.title : event.title}
            </span>
            <span className="mono text-mute">
              {isZh ? event.city : event.cityEn}
            </span>
            <span className="recap-arrow mono text-ink">→</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default PastEvents;
