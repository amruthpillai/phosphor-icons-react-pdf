import { AtomIcon as AtomBoldIcon } from "../bold/Atom";
import { AtomIcon as AtomDuotoneIcon } from "../duotone/Atom";
import { AtomIcon as AtomFillIcon } from "../fill/Atom";
import { AtomIcon as AtomLightIcon } from "../light/Atom";
import { AtomIcon as AtomRegularIcon } from "../regular/Atom";
import { AtomIcon as AtomThinIcon } from "../thin/Atom";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: AtomThinIcon,
	light: AtomLightIcon,
	regular: AtomRegularIcon,
	bold: AtomBoldIcon,
	fill: AtomFillIcon,
	duotone: AtomDuotoneIcon,
} as const;

export function AtomIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { AtomIcon as Atom };
