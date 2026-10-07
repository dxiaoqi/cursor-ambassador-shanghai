'use client';

import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="mt-24 border-t border-line md:mt-40">
      <div className="mx-auto flex w-full max-w-[1080px] items-center justify-between px-6 py-8">
        <div className="flex items-center gap-2.5">
          <Image
            src="/images/spacexai-logo.png"
            alt=""
            width={20}
            height={20}
            className="brand-logo h-5 w-5"
          />
          <p className="mono text-mute">© 2026 SpaceX AI Shanghai</p>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://x.com/SpaceX"
            target="_blank"
            rel="noopener noreferrer"
            className="u-link mono text-ink"
          >
            X
          </a>
          <a
            href="https://luma.com/spacexai-shanghai"
            target="_blank"
            rel="noopener noreferrer"
            className="u-link mono text-ink"
          >
            Luma
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
