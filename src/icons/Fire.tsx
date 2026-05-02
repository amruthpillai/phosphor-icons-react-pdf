import { FireIcon as FireBoldIcon } from "../bold/Fire";
import { FireIcon as FireDuotoneIcon } from "../duotone/Fire";
import { FireIcon as FireFillIcon } from "../fill/Fire";
import { FireIcon as FireLightIcon } from "../light/Fire";
import { FireIcon as FireRegularIcon } from "../regular/Fire";
import { FireIcon as FireThinIcon } from "../thin/Fire";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FireThinIcon,
	light: FireLightIcon,
	regular: FireRegularIcon,
	bold: FireBoldIcon,
	fill: FireFillIcon,
	duotone: FireDuotoneIcon,
} as const;

export function FireIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FireIcon as Fire };
