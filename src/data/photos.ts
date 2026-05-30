export type PhotoMeta = { title?: string; tags?: string[] };

/**
 * Optional per-photo metadata, keyed by "<place>/<filename>".
 * Fill in `title` and `tags` to make a photo searchable. Blank entries still
 * appear and stay searchable by their place name and filename.
 */
export const photoMeta: Record<string, PhotoMeta> = {
	// canada
	'canada/IMG_20171110_115401.jpg': { title: '', tags: [] },

	// denmark
	'denmark/20211008_192413.jpg': { title: '', tags: [] },
	'denmark/IMG_20190801_070910.jpg': { title: '', tags: [] },
	'denmark/IMG_20191201_161906.jpg': { title: '', tags: [] },
	'denmark/IMG_20200803_213157.jpg': { title: '', tags: [] },
	'denmark/IMG_20200803_213211.jpg': { title: '', tags: [] },
	'denmark/IMG_20210501_192611.jpg': { title: '', tags: [] },
	'denmark/IMG_20210513_193206.jpg': { title: '', tags: [] },
	'denmark/IMG_20210815_094702.jpg': { title: '', tags: [] },
	'denmark/IMG_20210815_122328.jpg': { title: '', tags: [] },
	'denmark/IMG_20210816_111512.jpg': { title: '', tags: [] },
	'denmark/IMG_20210816_113313.jpg': { title: '', tags: [] },

	// france
	'france/IMG_20210623_160706.jpg': { title: '', tags: [] },
	'france/IMG_20210627_085541.jpg': { title: '', tags: [] },
	'france/IMG_20210701_141954.jpg': { title: '', tags: [] },

	// norway
	'norway/20211219_153930.jpg': { title: '', tags: [] },
	'norway/20211220_095015.jpg': { title: '', tags: [] },
	'norway/20211223_123329.jpg': { title: '', tags: [] },
	'norway/20211223_125841.jpg': { title: '', tags: [] },
	'norway/20211226_091534.jpg': { title: '', tags: [] },

	// sky
	'sky/20211016_171125.jpg': { title: '', tags: [] },
	'sky/20220114_080118.jpg': { title: '', tags: [] },

	// uk
	'uk/IMG_0145.jpg': { title: '', tags: [] },
	'uk/IMG_2774.jpg': { title: '', tags: [] },
	'uk/IMG_2835.jpg': { title: '', tags: [] },

	// us
	'us/20220207_132836.jpg': { title: '', tags: [] },
	'us/20220220_174102.jpg': { title: '', tags: [] },
	'us/IMG_0120.jpg': { title: '', tags: [] },
	'us/IMG_0511.jpg': { title: '', tags: [] },
	'us/IMG_0975.jpg': { title: '', tags: [] },
	'us/IMG_1041.jpg': { title: '', tags: [] },
	'us/IMG_1502.jpg': { title: '', tags: [] },
	'us/IMG_1510.jpg': { title: '', tags: [] },
	'us/IMG_1518.jpg': { title: '', tags: [] },
	'us/IMG_1533.jpg': { title: '', tags: [] },
	'us/IMG_1550.jpg': { title: '', tags: [] },
	'us/IMG_1599.jpg': { title: '', tags: [] },
	'us/IMG_1627.jpg': { title: '', tags: [] },
	'us/IMG_1680.jpg': { title: '', tags: [] },
	'us/IMG_1714.jpg': { title: '', tags: [] },
	'us/IMG_1727.jpg': { title: '', tags: [] },
	'us/IMG_1749.jpg': { title: '', tags: [] },
	'us/IMG_1795.jpg': { title: '', tags: [] },
	'us/IMG_1804.jpg': { title: '', tags: [] },
	'us/IMG_1805.jpg': { title: '', tags: [] },
	'us/IMG_1838.jpg': { title: '', tags: [] },
	'us/IMG_1839.jpg': { title: '', tags: [] },
	'us/IMG_1867.jpg': { title: '', tags: [] },
	'us/IMG_1924.jpg': { title: '', tags: [] },
	'us/IMG_1959.jpg': { title: '', tags: [] },
	'us/IMG_1990.jpg': { title: '', tags: [] },
	'us/IMG_2016.jpg': { title: '', tags: [] },
	'us/IMG_2270.jpg': { title: '', tags: [] },
	'us/IMG_3072.jpg': { title: '', tags: [] },
	'us/IMG_5641.jpg': { title: '', tags: [] },
};
