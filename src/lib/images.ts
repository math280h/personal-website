import { photoMeta } from '../data/photos';

// Grid thumbnails: small WebP. Lightbox: larger WebP. Original: untouched source JPG.
const thumbs = import.meta.glob('../images/**/*.{jpg,jpeg,png}', {
	eager: true,
	import: 'default',
	query: '?w=640&format=webp&quality=72',
}) as Record<string, string>;

const fulls = import.meta.glob('../images/**/*.{jpg,jpeg,png}', {
	eager: true,
	import: 'default',
	query: '?w=1800&format=webp&quality=80',
}) as Record<string, string>;

const originals = import.meta.glob('../images/**/*.{jpg,jpeg,png}', {
	eager: true,
	import: 'default',
	query: '?url',
}) as Record<string, string>;

export type Photo = {
	id: string;
	place: string;
	placeLabel: string;
	thumb: string;
	full: string;
	original: string;
	title: string;
	/** Pre-lowercased haystack for search: title + tags + place + filename. */
	search: string;
};

export type Collection = {
	id: string;
	label: string;
	note: string;
	photos: Photo[];
};

/** Labels + a short field note for known places. Unknown folders still appear, humanized. */
const META: Record<string, { label: string; note: string }> = {
	denmark: { label: 'Denmark', note: 'home ground' },
	norway: { label: 'Norway', note: 'fjords & winter light' },
	france: { label: 'France', note: 'a summer south' },
	uk: { label: 'United Kingdom', note: 'grey and green' },
	us: { label: 'United States', note: 'new coordinates' },
	canada: { label: 'Canada', note: 'west coast' },
	sky: { label: 'Sky', note: 'heads up' },
};

/** META declaration order is the display order; unknown folders are appended alphabetically. */
const ORDER = Object.keys(META);

const humanize = (id: string) => id.charAt(0).toUpperCase() + id.slice(1);

type Entry = { place: string; file: string; path: string };

const entries: Entry[] = Object.keys(thumbs)
	.map((path): Entry | null => {
		const match = path.match(/\/images\/([^/]+)\/([^/]+)$/);
		return match ? { place: match[1], file: match[2], path } : null;
	})
	.filter((entry): entry is Entry => entry !== null)
	.sort((a, b) => a.path.localeCompare(b.path));

function toPhoto({ place, file, path }: Entry): Photo {
	const placeLabel = META[place]?.label ?? humanize(place);
	const meta = photoMeta[`${place}/${file}`] ?? {};
	const title = (meta.title ?? '').trim();
	const tags = meta.tags ?? [];
	return {
		id: `${place}/${file}`,
		place,
		placeLabel,
		thumb: thumbs[path],
		full: fulls[path],
		original: originals[path],
		title,
		search: [title, tags.join(' '), placeLabel, file].join(' ').toLowerCase(),
	};
}

const photosByPlace = new Map<string, Photo[]>();
for (const entry of entries) {
	const list = photosByPlace.get(entry.place) ?? [];
	list.push(toPhoto(entry));
	photosByPlace.set(entry.place, list);
}

const ids = [
	...ORDER.filter((id) => photosByPlace.has(id)),
	...[...photosByPlace.keys()].filter((id) => !ORDER.includes(id)).sort(),
];

export const collections: Collection[] = ids.map((id) => ({
	id,
	label: META[id]?.label ?? humanize(id),
	note: META[id]?.note ?? '',
	photos: photosByPlace.get(id) ?? [],
}));

export const allPhotos: Photo[] = collections.flatMap((collection) => collection.photos);

export const places = collections.map((collection) => ({
	id: collection.id,
	label: collection.label,
	count: collection.photos.length,
}));
