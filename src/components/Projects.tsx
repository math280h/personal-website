import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';
import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';

export function Projects() {
	return (
		<section id="work" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
			<SectionHeader
				index="01"
				title="Work"
				note={
					<>
						A selected index of open-source work. The full catalogue lives on{' '}
						<a
							href="https://github.com/math280h"
							target="_blank"
							rel="noreferrer"
							className="text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-accent"
						>
							GitHub
						</a>
						.
					</>
				}
			/>

			<Reveal className="mt-6 grid border-t border-line sm:grid-cols-2 sm:gap-x-12">
				{projects.map((project, i) => (
					<a
						key={project.name}
						href={project.link}
						target="_blank"
						rel="noreferrer"
						className="group flex items-baseline gap-3 border-b border-line py-3.5 transition-colors duration-300 hover:bg-surface/30"
					>
						<span className="font-mono text-xs text-faint transition-colors duration-300 group-hover:text-accent">
							{String(i + 1).padStart(2, '0')}
						</span>

						<div className="min-w-0 flex-1">
							<div className="flex items-baseline justify-between gap-3">
								<h3 className="flex min-w-0 items-center gap-1.5 font-mono text-sm font-medium text-ink transition-colors duration-300 group-hover:text-accent sm:text-base">
									<span className="min-w-0 truncate" title={project.name}>
										{project.name}
									</span>
									<ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
								</h3>
								<span className="shrink-0 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-faint transition-colors duration-300 group-hover:text-muted">
									{project.tag}
								</span>
							</div>
							<p className="mt-1 truncate text-xs text-muted" title={project.description}>
								{project.description}
							</p>
						</div>
					</a>
				))}
			</Reveal>
		</section>
	);
}
