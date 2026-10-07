'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Globe, Linkedin, X } from 'lucide-react';
import { siGithub, siWechat, siX } from 'simple-icons';
import { ambassadors } from '@/content/ambassadors';
import { Ambassador } from '@/lib/types';
import { siteConfig } from '@/content/site.config';
import { useI18n } from '@/lib/i18n';
import { cardTile } from '@/components/ui';

type BrandIconProps = {
	iconPath: string;
};

const BrandIcon: React.FC<BrandIconProps> = ({ iconPath }) => {
	return (
		<svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4">
			<path d={iconPath} fill="currentColor" />
		</svg>
	);
};

type SocialIconProps = {
	kind: 'x' | 'linkedin' | 'github' | 'website';
};

const SocialIcon: React.FC<SocialIconProps> = ({ kind }) => {
	if (kind === 'x') return <BrandIcon iconPath={siX.path} />;
	if (kind === 'linkedin') return <Linkedin className="w-4 h-4" />;
	if (kind === 'github') return <BrandIcon iconPath={siGithub.path} />;
	return <Globe className="w-4 h-4" />;
};

type WeChatModalProps = {
	ambassador: Ambassador;
	displayName: string;
	onClose: () => void;
};

const WeChatModal: React.FC<WeChatModalProps> = ({ ambassador, displayName, onClose }) => {
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') onClose();
		};
		document.addEventListener('keydown', handleKeyDown);
		return () => document.removeEventListener('keydown', handleKeyDown);
	}, [onClose]);

	if (!ambassador.wechatQrCode) return null;

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
			onClick={onClose}
			role="dialog"
			aria-modal="true"
			aria-label={`${displayName} WeChat QR code`}
		>
			<div
				className="relative animate-modal-pop rounded-2xl bg-cursor-surface p-4 shadow-lg"
				onClick={(event) => event.stopPropagation()}
			>
				<button
					type="button"
					onClick={onClose}
					className="absolute top-2 right-2 z-10 p-1.5 rounded-full text-cursor-text-muted hover:text-cursor-text hover:bg-cursor-surface-raised transition-colors"
					aria-label="Close"
				>
					<X className="w-5 h-5" />
				</button>
				<Image
					src={ambassador.wechatQrCode}
					alt={`${displayName} WeChat QR code`}
					width={300}
					height={445}
					className="w-[280px] h-auto rounded-lg sm:w-[300px]"
				/>
			</div>
		</div>
	);
};

const AmbassadorSection: React.FC = () => {
	const { locale, t } = useI18n();
	const isZh = locale === 'zh';
	const [wechatAmbassador, setWechatAmbassador] = useState<Ambassador | null>(null);

	if (ambassadors.length === 0) {
		return null;
	}

	return (
		<section id="community" className="mb-20 scroll-mt-20">
			<p className="cursor-eyebrow mb-2">{t('ambassadors.title', { communityName: siteConfig.communityName })}</p>
			<h2 className="cursor-section-title mb-8 text-cursor-text">{t('ambassadors.heading')}</h2>

			<div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
				{ambassadors.map((ambassador) => {
					const displayName = isZh ? (ambassador.nameLocal ?? ambassador.name) : ambassador.name;
					const displayRole = isZh ? (ambassador.roleLocal ?? ambassador.role) : ambassador.role;

					const links = [
						{ kind: 'x' as const, href: ambassador.links.x },
						{ kind: 'linkedin' as const, href: ambassador.links.linkedin },
						{ kind: 'github' as const, href: ambassador.links.github },
						{ kind: 'website' as const, href: ambassador.links.website },
					].filter((entry) => Boolean(entry.href));

					return (
						<article key={ambassador.name} className={`${cardTile} p-5 group`}>
							<div className="flex items-center gap-4">
								<div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-cursor-border-emphasis">
									<Image src={ambassador.photo} alt={displayName} fill className="object-cover" sizes="80px" />
								</div>
								<div>
									<p className="text-cursor-text font-medium">{displayName}</p>
									{displayRole ? <p className="text-cursor-text-muted text-sm">{displayRole}</p> : null}
								</div>
							</div>

							{links.length > 0 || ambassador.wechatQrCode ? (
								<div className="flex items-center gap-3 mt-4">
									{ambassador.wechatQrCode ? (
										<button
											type="button"
											onClick={() => setWechatAmbassador(ambassador)}
											className="p-2 rounded border border-cursor-border text-cursor-text-muted hover:text-cursor-text hover:border-cursor-border-emphasis transition-colors"
											aria-label={`${displayName} WeChat`}
										>
											<BrandIcon iconPath={siWechat.path} />
										</button>
									) : null}
									{links.map((link) => (
										<a
											key={`${ambassador.name}-${link.kind}`}
											href={link.href}
											target="_blank"
											rel="noopener noreferrer"
											className="p-2 rounded border border-cursor-border text-cursor-text-muted hover:text-cursor-text hover:border-cursor-border-emphasis transition-colors"
											aria-label={`${displayName} ${link.kind}`}
										>
											<SocialIcon kind={link.kind} />
										</a>
									))}
								</div>
							) : null}
						</article>
					);
				})}
			</div>

			{wechatAmbassador ? (
				<WeChatModal
					ambassador={wechatAmbassador}
					displayName={
						isZh
							? (wechatAmbassador.nameLocal ?? wechatAmbassador.name)
							: wechatAmbassador.name
					}
					onClose={() => setWechatAmbassador(null)}
				/>
			) : null}
		</section>
	);
};

export default AmbassadorSection;
