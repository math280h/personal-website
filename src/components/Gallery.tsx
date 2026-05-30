import { Search, X } from 'lucide-react';
import { type ChangeEvent, useCallback, useMemo, useState } from 'react';
import { allPhotos, collections, type Photo, places } from '../lib/images';
import { Lightbox } from './Lightbox';
import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';

type LightboxState = { photos: Photo[]; index: number } | null;

function PhotoButton({ photo, onOpen }: { photo: Photo; onOpen: () => void }) {
	const caption = photo.title ? `${photo.placeLabel} · ${photo.title}` : photo.placeLabel;
	return (
		<button
			type="button"
			onClick={onOpen}
			className="group relative mb-3 block w-full break-inside-avoid overflow-hidden border border-line"
		>
			<img
				src={photo.thumb}
				alt={photo.title || photo.placeLabel}
				loading="lazy"
				decoding="async"
				className="w-full transition-transform duration-700 ease-out group-hover:scale-[1.05]"
			/>
			<span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/85 via-bg/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
			<span className="pointer-events-none absolute inset-x-3 bottom-2.5 truncate font-mono text-[0.62rem] uppercase tracking-[0.18em] text-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100">
				{caption}
			</span>
		</button>
	);
}

function Chip({
	active,
	onClick,
	label,
	count,
}: {
	active: boolean;
	onClick: () => void;
	label: string;
	count: number;
}) {
	return (
		<button
			type="button"
			onClick={onClick}
			className={`flex items-center gap-1.5 border px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.14em] transition-colors ${
				active
					? 'border-accent/60 bg-accent/[0.07] text-ink'
					: 'border-line text-muted hover:border-ink/30 hover:text-ink'
			}`}
		>
			{label}
			<span className={active ? 'text-accent' : 'text-faint'}>{count}</span>
		</button>
	);
}

function PhotoGrid({
	photos,
	onOpen,
	className,
}: {
	photos: Photo[];
	onOpen: (index: number) => void;
	className?: string;
}) {
	return (
		<div className={`columns-2 gap-3 md:columns-3 ${className ?? ''}`}>
			{photos.map((photo, i) => (
				<PhotoButton key={photo.id} photo={photo} onOpen={() => onOpen(i)} />
			))}
		</div>
	);
}

export function Gallery() {
	const [query, setQuery] = useState('');
	const [place, setPlace] = useState('all');
	const [lightbox, setLightbox] = useState<LightboxState>(null);

	const q = query.trim().toLowerCase();
	const isFiltering = q !== '' || place !== 'all';

	const filtered = useMemo(
		() =>
			allPhotos.filter(
				(photo) =>
					(place === 'all' || photo.place === place) && (q === '' || photo.search.includes(q)),
			),
		[q, place],
	);

	const open = useCallback((photos: Photo[], index: number) => setLightbox({ photos, index }), []);
	const close = useCallback(() => setLightbox(null), []);
	const nav = useCallback(
		(delta: number) =>
			setLightbox((current) =>
				current
					? {
							...current,
							index: (current.index + delta + current.photos.length) % current.photos.length,
						}
					: current,
			),
		[],
	);

	const reset = () => {
		setQuery('');
		setPlace('all');
	};

	const onSearch = (event: ChangeEvent<HTMLInputElement>) => setQuery(event.target.value);

	return (
		<section id="gallery" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
			<SectionHeader
				index="02"
				title="Gallery"
				note="Shot on the move and free to use under the MIT License. Search or filter by place, then click any frame for the full photo."
			/>

			<Reveal className="mt-8 flex flex-col gap-4">
				<div className="relative max-w-md">
					<Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-faint" />
					<input
						type="search"
						value={query}
						onChange={onSearch}
						placeholder="Search photos, places, tags…"
						className="w-full border border-line bg-surface/40 py-2.5 pl-10 pr-10 font-mono text-sm text-ink transition-colors placeholder:text-faint focus:border-accent/60 focus:outline-none"
					/>
					{query && (
						<button
							type="button"
							onClick={() => setQuery('')}
							aria-label="Clear search"
							className="absolute right-3 top-1/2 -translate-y-1/2 text-faint transition-colors hover:text-ink"
						>
							<X className="h-4 w-4" />
						</button>
					)}
				</div>

				<div className="flex flex-wrap gap-2">
					<Chip
						active={place === 'all'}
						onClick={() => setPlace('all')}
						label="All"
						count={allPhotos.length}
					/>
					{places.map((p) => (
						<Chip
							key={p.id}
							active={place === p.id}
							onClick={() => setPlace(p.id)}
							label={p.label}
							count={p.count}
						/>
					))}
				</div>
			</Reveal>

			{isFiltering ? (
				filtered.length > 0 ? (
					<div className="mt-10">
						<p className="font-mono text-xs text-faint">
							{filtered.length} {filtered.length === 1 ? 'frame' : 'frames'}
						</p>
						<PhotoGrid photos={filtered} onOpen={(i) => open(filtered, i)} className="mt-5" />
					</div>
				) : (
					<div className="mt-16 border border-line bg-surface/30 py-16 text-center">
						<p className="font-mono text-sm text-muted">No frames match that search.</p>
						<button
							type="button"
							onClick={reset}
							className="mt-3 font-mono text-xs uppercase tracking-[0.16em] text-accent hover:underline"
						>
							Reset
						</button>
					</div>
				)
			) : (
				collections.map((collection) => (
					<Reveal key={collection.id} className="mt-16 first:mt-12">
						<div className="flex items-baseline justify-between border-b border-line pb-3">
							<h3 className="font-display text-2xl font-medium text-ink sm:text-3xl">
								{collection.label}
							</h3>
							<span className="font-mono text-xs text-faint">
								{collection.note}, {String(collection.photos.length).padStart(2, '0')} frames
							</span>
						</div>
						<PhotoGrid
							photos={collection.photos}
							onOpen={(i) => open(collection.photos, i)}
							className="mt-6"
						/>
					</Reveal>
				))
			)}

			{lightbox && (
				<Lightbox photos={lightbox.photos} index={lightbox.index} onClose={close} onNav={nav} />
			)}
		</section>
	);
}
