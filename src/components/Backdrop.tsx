/** Fixed, layered atmosphere: hairline grid, drifting ember glow, film grain, vignette. */
export function Backdrop() {
	return (
		<div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
			<div className="bg-grid absolute inset-0" />
			<div className="bg-glow absolute left-1/2 top-0 h-[65vh] w-[85vw] max-w-5xl" />
			<div className="bg-grain absolute inset-0" />
			<div className="bg-vignette absolute inset-0" />
		</div>
	);
}
