'use client';

import React from 'react';
import { useI18n } from '@/lib/i18n';
import { siteConfig } from '@/content/site.config';

const AboutSection: React.FC = () => {
  const { t } = useI18n();

  return (
    <section id="about" className="label-grid scroll-mt-20">
      <p className="mono text-mute">{t('home.aboutLabel')}</p>

      <div>
        <p className="big text-ink">{t('home.aboutTitle')}</p>
        <p className="mt-6 max-w-[60ch] text-[15px] leading-[1.7] text-mute">
          {t('home.aboutDescription')}
        </p>
        <p className="mono mt-8 text-mute">
          {t('home.aboutFormats')}
        </p>
        <a
          href={siteConfig.lumaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="u-link mt-8 inline-block text-[15px] font-medium text-ink"
        >
          {t('home.joinCommunity')}
        </a>
      </div>
    </section>
  );
};

export default AboutSection;
