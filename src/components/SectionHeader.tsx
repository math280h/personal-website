import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

type SectionHeaderProps = {
	index: string;
	title: string;
	note: ReactNode;
};

export function SectionHeader({ index, title, note }: SectionHeaderProps) {
	return (
		<Reveal className="flex flex-col gap-5 border-b border-line pb-6">
			<div className="flex items-end justify-between gap-6">
				<div className="flex items-baseline gap-4">
					<span className="font-mono text-sm text-accent">{index}</span>
					<h2 className="font-display text-4xl font-medium tracking-[-0.01em] sm:text-5xl">
						{title}
					</h2>
				</div>
				<p className="hidden max-w-xs text-right text-sm leading-relaxed text-muted sm:block">
					{note}
				</p>
			</div>
			<p className="text-sm leading-relaxed text-muted sm:hidden">{note}</p>
		</Reveal>
	);
}
