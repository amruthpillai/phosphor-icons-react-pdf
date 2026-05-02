import { CrownIcon as CrownBoldIcon } from "../bold/Crown";
import { CrownIcon as CrownDuotoneIcon } from "../duotone/Crown";
import { CrownIcon as CrownFillIcon } from "../fill/Crown";
import { CrownIcon as CrownLightIcon } from "../light/Crown";
import { CrownIcon as CrownRegularIcon } from "../regular/Crown";
import { CrownIcon as CrownThinIcon } from "../thin/Crown";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CrownThinIcon,
	light: CrownLightIcon,
	regular: CrownRegularIcon,
	bold: CrownBoldIcon,
	fill: CrownFillIcon,
	duotone: CrownDuotoneIcon,
} as const;

export function CrownIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CrownIcon as Crown };
