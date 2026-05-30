import type { ReactNode } from 'react';

const VARIANTS = {
	primary: 'border-accent/50 bg-accent/[0.06] text-ink hover:bg-accent hover:text-bg',
	ghost: 'border-line text-muted hover:border-ink/30 hover:text-ink',
};

type ButtonLinkProps = {
	href: string;
	children: ReactNode;
	variant?: keyof typeof VARIANTS;
	external?: boolean;
};

/** Shared bordered call-to-action link (hero, footer). Pass a trailing icon as a child. */
export function ButtonLink({
	href,
	children,
	variant = 'ghost',
	external = false,
}: ButtonLinkProps) {
	return (
		<a
			href={href}
			target={external ? '_blank' : undefined}
			rel={external ? 'noreferrer' : undefined}
			className={`group inline-flex items-center gap-2 border px-6 py-3 font-mono text-sm transition-colors duration-300 ${VARIANTS[variant]}`}
		>
			{children}
		</a>
	);
}
