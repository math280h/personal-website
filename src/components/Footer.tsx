import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { ButtonLink } from './ButtonLink';
import { Reveal } from './Reveal';

export function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="relative border-t border-line">
			<div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
				<Reveal>
					<p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">Get in touch</p>
					<h2 className="mt-5 max-w-2xl font-display text-4xl font-medium leading-[1.05] tracking-[-0.01em] sm:text-5xl">
						Let&apos;s build something that refuses to fall over.
					</h2>

					<div className="mt-9 flex flex-wrap gap-3">
						<ButtonLink href="https://github.com/math280h" variant="primary" external>
							GitHub
							<ArrowUpRight className="h-4 w-4 text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-bg" />
						</ButtonLink>
						<ButtonLink href="#top">
							Back to top
							<ArrowUp className="h-3.5 w-3.5" />
						</ButtonLink>
					</div>
				</Reveal>

				<div className="mt-20 border-t border-line pt-6 font-mono text-[0.7rem] text-faint">
					© {year} Mathias V. Nielsen
				</div>
			</div>
		</footer>
	);
}
