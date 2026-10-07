'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, type PanInfo } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

interface CarouselPhoto {
	src: string;
	date: string;
	scene: string;
	alt: string;
}

const PHOTOS: CarouselPhoto[] = [
	{
		src: '/images/events/cursor-shanghai-audience.jpg',
		date: '2025.08.16',
		scene: 'meetupShanghai',
		alt: 'Full house at Cursor Shanghai Meetup',
	},
	{
		src: '/images/events/cursor-shanghai-talk.jpg',
		date: '2025.08.16',
		scene: 'talk',
		alt: 'Audience watching a talk at Cursor Shanghai Meetup',
	},
	{
		src: '/images/events/cursor-shanghai-demo.jpg',
		date: '2025.08.16',
		scene: 'demo',
		alt: 'Speaker presenting a live demo at Cursor Shanghai',
	},
	{
		src: '/images/events/cursor-shanghai-workshop.jpg',
		date: '2025.09.26',
		scene: 'workshop',
		alt: 'Builders collaborating at the Cursor Shanghai workshop',
	},
	{
		src: '/images/events/cursor-shanghai-group.jpg',
		date: '2025.08.16',
		scene: 'group',
		alt: 'Group photo at Cursor Shanghai Meetup',
	},
	{
		src: '/images/events/cursor-nanjing-audience.jpg',
		date: '2025.08.09',
		scene: 'meetupNanjing',
		alt: 'Audience at Cursor Nanjing Meetup',
	},
	{
		src: '/images/events/cursor-nanjing-stage.jpg',
		date: '2025.08.09',
		scene: 'stage',
		alt: 'Community on stage at Cursor Nanjing Meetup',
	},
	{
		src: '/images/events/cursor-nanjing-group.jpg',
		date: '2025.08.09',
		scene: 'group',
		alt: 'Group photo at Cursor Nanjing Meetup',
	},
];

const AUTO_PLAY_MS = 4500;
const DRAG_THRESHOLD = 60;

const PhotoSection: React.FC = () => {
	const { t } = useI18n();
	const [[index, direction], setState] = useState<[number, number]>([0, 0]);
	const [isPaused, setIsPaused] = useState(false);
	const [reducedMotion, setReducedMotion] = useState(false);

	useEffect(() => {
		const query = window.matchMedia('(prefers-reduced-motion: reduce)');
		const update = () => setReducedMotion(query.matches);
		update();
		query.addEventListener('change', update);
		return () => query.removeEventListener('change', update);
	}, []);

	const paginate = useCallback((nextDirection: number) => {
		setState(([current]) => [
			(current + nextDirection + PHOTOS.length) % PHOTOS.length,
			nextDirection,
		]);
	}, []);

	const goTo = useCallback((nextIndex: number) => {
		setState(([current]) => [nextIndex, nextIndex > current ? 1 : -1]);
	}, []);

	useEffect(() => {
		if (isPaused || reducedMotion) return;
		const timer = window.setInterval(() => paginate(1), AUTO_PLAY_MS);
		return () => window.clearInterval(timer);
	}, [isPaused, reducedMotion, paginate, index]);

	const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
		if (info.offset.x < -DRAG_THRESHOLD) paginate(1);
		else if (info.offset.x > DRAG_THRESHOLD) paginate(-1);
	};

	const photo = PHOTOS[index];
	const caption = `${photo.date} — ${t(`home.photoScene.${photo.scene}`)}`;

	const slideVariants = {
		enter: (dir: number) => ({
			x: reducedMotion ? 0 : dir >= 0 ? '100%' : '-100%',
			opacity: reducedMotion ? 0 : 0.4,
		}),
		center: { x: 0, opacity: 1 },
		exit: (dir: number) => ({
			x: reducedMotion ? 0 : dir >= 0 ? '-100%' : '100%',
			opacity: reducedMotion ? 0 : 0.4,
		}),
	};

	return (
		<figure
			aria-roledescription="carousel"
			aria-label={t('home.photoGalleryLabel')}
			onMouseEnter={() => setIsPaused(true)}
			onMouseLeave={() => setIsPaused(false)}
		>
			<div className="group relative aspect-[4/3] w-full touch-pan-y overflow-hidden md:aspect-[21/9]">
				<AnimatePresence initial={false} custom={direction} mode="popLayout">
					<motion.div
						key={index}
						custom={direction}
						variants={slideVariants}
						initial="enter"
						animate="center"
						exit="exit"
						transition={{
							x: { duration: reducedMotion ? 0 : 0.55, ease: [0.32, 0.72, 0, 1] },
							opacity: { duration: reducedMotion ? 0 : 0.45, ease: 'easeOut' },
						}}
						drag={reducedMotion ? false : 'x'}
						dragConstraints={{ left: 0, right: 0 }}
						dragElastic={0.15}
						onDragEnd={handleDragEnd}
						className="absolute inset-0 cursor-grab active:cursor-grabbing"
					>
						<Image
							src={photo.src}
							alt={photo.alt}
							fill
							sizes="(max-width: 1080px) 100vw, 1080px"
							className="pointer-events-none select-none object-cover"
							priority={index < 2}
							draggable={false}
						/>
					</motion.div>
				</AnimatePresence>

				<button
					type="button"
					onClick={() => paginate(-1)}
					aria-label={t('home.photoPrev')}
					className="mono absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center border border-line/60 bg-bg/40 text-ink opacity-0 backdrop-blur-sm transition-opacity duration-300 hover:bg-bg/70 focus-visible:opacity-100 group-hover:opacity-100"
				>
					<ChevronLeft className="h-4 w-4" />
				</button>
				<button
					type="button"
					onClick={() => paginate(1)}
					aria-label={t('home.photoNext')}
					className="mono absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center border border-line/60 bg-bg/40 text-ink opacity-0 backdrop-blur-sm transition-opacity duration-300 hover:bg-bg/70 focus-visible:opacity-100 group-hover:opacity-100"
				>
					<ChevronRight className="h-4 w-4" />
				</button>
			</div>

			<figcaption className="mt-3 flex items-center justify-between gap-4">
				<span className="mono min-w-0 truncate text-mute">{caption}</span>
				<div className="flex shrink-0 items-center gap-2" role="tablist" aria-label={t('home.photoDots')}>
					{PHOTOS.map((item, i) => (
						<button
							key={item.src}
							type="button"
							role="tab"
							aria-selected={i === index}
							aria-label={`${i + 1} / ${PHOTOS.length}`}
							onClick={() => goTo(i)}
							className="group flex h-3 items-center"
						>
							<span
								className={`block h-px transition-all duration-300 ease-out ${
									i === index
										? 'w-6 bg-ink'
										: 'w-3 bg-line group-hover:bg-mute'
								}`}
							/>
						</button>
					))}
				</div>
			</figcaption>
		</figure>
	);
};

export default PhotoSection;
