'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useI18n } from '@/lib/i18n';

const ContactSection: React.FC = () => {
  const { t } = useI18n();
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && dialogRef.current?.open) {
        dialogRef.current.close();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const openDialog = () => {
    dialogRef.current?.showModal();
  };

  const closeDialog = () => {
    dialogRef.current?.close();
  };

  const handleBackdropClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    const dialog = dialogRef.current;
    if (!dialog || event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    const inside =
      event.clientX >= rect.left &&
      event.clientX <= rect.right &&
      event.clientY >= rect.top &&
      event.clientY <= rect.bottom;
    if (!inside) closeDialog();
  };

  return (
    <section id="contact" className="scroll-mt-20">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-[88px_minmax(0,1fr)] md:gap-10">
        <Image
          src="/images/ambassadors/shangui.png"
          alt="山鬼"
          width={88}
          height={88}
          className="h-[88px] w-[88px] rounded-full border border-line bg-white object-cover"
        />

        <div>
          <p className="text-[17px] font-medium text-ink">山鬼</p>
          <p className="mono mt-1 text-mute">{t('contact.role')}</p>
          <p className="mt-4 text-[15px] leading-[1.7] text-ink">
            {t('contact.sentence')}
          </p>
          <button type="button" onClick={openDialog} className="pill mt-6">
            {t('contact.wechatButton')}
            <span className="pill-arrow">→</span>
          </button>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className="wechat-dialog"
        onClick={handleBackdropClick}
      >
        <button
          type="button"
          onClick={closeDialog}
          className="mono absolute right-4 top-4 text-mute hover:text-ink"
        >
          {t('contact.close')}
        </button>

        <p className="text-[16px] font-medium text-ink">山鬼</p>
        <p className="mono mt-1 text-mute">{t('contact.scanWechat')}</p>
        <div className="mt-5 inline-block bg-white p-2">
          <Image
            src="/images/ambassadors/shangui-wechat.png"
            alt={t('contact.scanWechat')}
            width={220}
            height={220}
            className="h-[220px] w-[220px] object-contain"
          />
        </div>
      </dialog>
    </section>
  );
};

export default ContactSection;
