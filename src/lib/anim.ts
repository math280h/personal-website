import type { CSSProperties } from 'react';

/** Build an inline style that sets the `--d` reveal/rise delay custom property. */
export const delay = (ms: number): CSSProperties => ({ '--d': `${ms}ms` }) as CSSProperties;
