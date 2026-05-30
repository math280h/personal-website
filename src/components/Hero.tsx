import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react';
import { delay } from '../lib/anim';
import { ButtonLink } from './ButtonLink';

export function Hero() {
	return (
		<section
			id="top"
			className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-5 pb-20 pt-28 sm:px-8"
		>
			<p
				className="rise flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs uppercase tracking-[0.22em] text-muted"
				style={delay(0)}
			>
				<span className="text-accent">Principal Software Engineer</span>
				<span className="text-faint">/</span>
				<span className="inline-flex items-center gap-1.5">
					Denmark
					<ArrowRight className="h-3 w-3 text-faint" />
					New York
				</span>
			</p>

			<h1
				className="rise mt-7 font-display font-medium leading-[0.95] tracking-[-0.025em]"
				style={delay(90)}
			>
				<span className="block text-[clamp(2.3rem,7vw,5.5rem)]">Hi, I&apos;m Thias.</span>
				<span className="mt-1 block text-[clamp(2.3rem,7vw,5.5rem)] text-muted">
					I build platforms that <span className="text-accent">scale</span> and stay compliant
					<span className="text-accent">.</span>
				</span>
			</h1>

			<p className="rise mt-8 max-w-2xl text-lg leading-relaxed text-muted" style={delay(190)}>
				I build and scale the <span className="text-ink">platforms and infrastructure</span> that
				large systems run on, in places where security and compliance aren&apos;t optional.
				Originally from Denmark, now living in New York. I care as much about the developer
				experience around a system as the system itself. When I step away from the terminal,
				there&apos;s usually a <span className="text-ink">camera</span> in my hand.
			</p>

			<div className="rise mt-11 flex flex-wrap items-center gap-3" style={delay(290)}>
				<ButtonLink href="https://github.com/math280h" variant="primary" external>
					Find me on GitHub
					<ArrowUpRight className="h-4 w-4 text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-bg" />
				</ButtonLink>
				<ButtonLink href="#gallery">View the gallery</ButtonLink>
			</div>

			<div
				className="rise mt-16 flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.25em] text-faint"
				style={delay(520)}
			>
				<ArrowDown className="h-4 w-4 animate-bounce text-accent" />
				Scroll
			</div>
		</section>
	);
}
