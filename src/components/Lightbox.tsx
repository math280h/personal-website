import { ArrowUpRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { type MouseEvent, useEffect } from 'react';
import type { Photo } from '../lib/images';

type LightboxProps = {
	photos: Photo[];
	index: number;
	onClose: () => void;
	onNav: (delta: number) => void;
};

export function Lightbox({ photos, index, onClose, onNav }: LightboxProps) {
	const photo = photos[index];

	useEffect(() => {
		const onKey = (event: KeyboardEvent) => {
			if (event.key === 'Escape') onClose();
			if (event.key === 'ArrowRight') onNav(1);
			if (event.key === 'ArrowLeft') onNav(-1);
		};
		document.addEventListener('keydown', onKey);
		document.body.style.overflow = 'hidden';
		return () => {
			document.removeEventListener('keydown', onKey);
			document.body.style.overflow = '';
		};
	}, [onClose, onNav]);

	const stop = (event: MouseEvent) => event.stopPropagation();

	if (!photo) return null;

	return (
		<div
			className="fixed inset-0 z-[100] flex flex-col bg-bg/92 p-4 backdrop-blur-md sm:p-8"
			onClick={onClose}
		>
			<div className="flex items-center justify-between font-mono text-xs text-muted">
				<span className="uppercase tracking-[0.18em] text-faint">
					{photo.placeLabel} <span className="text-accent">/</span>{' '}
					{String(index + 1).padStart(2, '0')}
					<span className="text-faint">—{String(photos.length).padStart(2, '0')}</span>
				</span>
				<button
					type="button"
					onClick={onClose}
					className="inline-flex items-center gap-2 border border-line px-4 py-1.5 uppercase tracking-[0.16em] text-muted transition-colors hover:border-ink/30 hover:text-ink"
				>
					Close
					<X className="h-3.5 w-3.5" />
				</button>
			</div>

			<div className="flex min-h-0 flex-1 items-center justify-center gap-3 py-4 sm:gap-5">
				<button
					type="button"
					onClick={(event) => {
						stop(event);
						onNav(-1);
					}}
					aria-label="Previous"
					className="hidden h-11 w-11 shrink-0 items-center justify-center border border-line text-muted transition-colors hover:border-ink/30 hover:text-ink sm:flex"
				>
					<ChevronLeft className="h-5 w-5" />
				</button>

				<img
					src={photo.full}
					alt={photo.title || photo.placeLabel}
					onClick={stop}
					className="max-h-full max-w-full border border-line object-contain shadow-2xl"
				/>

				<button
					type="button"
					onClick={(event) => {
						stop(event);
						onNav(1);
					}}
					aria-label="Next"
					className="hidden h-11 w-11 shrink-0 items-center justify-center border border-line text-muted transition-colors hover:border-ink/30 hover:text-ink sm:flex"
				>
					<ChevronRight className="h-5 w-5" />
				</button>
			</div>

			<div className="flex flex-col items-center gap-1.5 text-center" onClick={stop}>
				{photo.title && (
					<p className="font-display text-base font-medium text-ink">{photo.title}</p>
				)}
				<a
					href={photo.original}
					target="_blank"
					rel="noreferrer"
					className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.18em] text-muted transition-colors hover:text-accent"
				>
					Open original
					<ArrowUpRight className="h-3.5 w-3.5" />
				</a>
			</div>
		</div>
	);
}
