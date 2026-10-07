'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useI18n } from '@/lib/i18n';
import { useTheme } from '@/lib/theme';

const NAV_LINKS = [
	{ href: '/#recaps', key: 'nav.recaps' },
	{ href: '/#about', key: 'nav.about' },
	{ href: '/#contact', key: 'nav.contact' },
] as const;

function ThemeToggle() {
	const { resolved, setPreference, mounted } = useTheme();

	return (
		<button
			type="button"
			aria-label="Toggle theme"
			onClick={() =>
				setPreference(resolved === 'dark' ? 'light' : 'dark')
			}
			className="mono flex h-6 w-6 items-center justify-center rounded-full border border-line"
		>
			<span
				className="block h-[18px] w-[18px] rounded-full"
				style={{
					background: mounted
						? resolved === 'dark'
							? 'linear-gradient(90deg, var(--ink) 50%, var(--bg) 50%)'
							: 'linear-gradient(90deg, var(--bg) 50%, var(--ink) 50%)'
						: 'linear-gradient(90deg, var(--ink) 50%, var(--bg) 50%)',
				}}
			/>
		</button>
	);
}

function LocaleToggle() {
	const { locale, setLocale } = useI18n();
	const next = locale === 'zh' ? 'en' : 'zh';

	return (
		<button
			type="button"
			onClick={() => setLocale(next)}
			className="mono text-ink transition-opacity hover:opacity-60"
		>
			{locale === 'zh' ? 'EN' : '中'}
		</button>
	);
}

export default function Navbar() {
	const { t } = useI18n();

	return (
		<header className="sticky top-0 z-40 bg-bg">
			<div className="mx-auto flex h-16 w-full max-w-[1080px] items-center justify-between px-6">
				<Link
					href="/"
					className="flex items-center gap-2.5 text-[15px] font-medium tracking-tight text-ink"
				>
					<Image
						src="/images/spacexai-logo.png"
						alt=""
						width={24}
						height={24}
						priority
						className="brand-logo h-6 w-6"
					/>
					SpaceX AI Shanghai
				</Link>

				<nav className="flex items-center gap-7">
					{NAV_LINKS.map(({ href, key }) => (
						<Link
							key={key}
							href={href}
							className="u-link mono hidden text-ink md:inline"
						>
							{t(key)}
						</Link>
					))}
					<LocaleToggle />
					<ThemeToggle />
				</nav>
			</div>
		</header>
	);
}
