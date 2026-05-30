import { type ReactNode, useEffect, useRef } from 'react';

type RevealProps = {
	children: ReactNode;
	className?: string;
};

/** Wraps content and fades/slides it into view the first time it intersects. */
export function Reveal({ children, className }: RevealProps) {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						entry.target.setAttribute('data-reveal', 'shown');
						observer.unobserve(entry.target);
					}
				}
			},
			{ threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
		);

		observer.observe(el);
		return () => observer.disconnect();
	}, []);

	return (
		<div ref={ref} data-reveal="" className={className}>
			{children}
		</div>
	);
}
