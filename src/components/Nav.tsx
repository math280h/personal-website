import { useEffect, useState } from 'react';

const LINKS: { href: string; label: string; external?: boolean }[] = [
	{ href: '#work', label: 'Work' },
	{ href: '#gallery', label: 'Gallery' },
	{ href: 'https://github.com/math280h', label: 'GitHub', external: true },
];

export function Nav() {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<header
			className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 ${
				scrolled ? 'border-line bg-bg/70 backdrop-blur-xl' : 'border-transparent'
			}`}
		>
			<div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
				<a href="#top" className="font-mono text-sm tracking-wide">
					<span className="font-medium text-ink">thias</span>
					<span className="text-faint">.dev</span>
				</a>

				<nav className="flex items-center gap-4 sm:gap-6">
					{LINKS.map((link) => (
						<a
							key={link.href}
							href={link.href}
							target={link.external ? '_blank' : undefined}
							rel={link.external ? 'noreferrer' : undefined}
							className="font-mono text-xs uppercase tracking-[0.16em] text-muted transition-colors hover:text-ink"
						>
							{link.label}
						</a>
					))}
				</nav>
			</div>
		</header>
	);
}
