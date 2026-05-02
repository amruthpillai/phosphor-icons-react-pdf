import { AtIcon as AtBoldIcon } from "../bold/At";
import { AtIcon as AtDuotoneIcon } from "../duotone/At";
import { AtIcon as AtFillIcon } from "../fill/At";
import { AtIcon as AtLightIcon } from "../light/At";
import { AtIcon as AtRegularIcon } from "../regular/At";
import { AtIcon as AtThinIcon } from "../thin/At";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: AtThinIcon,
	light: AtLightIcon,
	regular: AtRegularIcon,
	bold: AtBoldIcon,
	fill: AtFillIcon,
	duotone: AtDuotoneIcon,
} as const;

export function AtIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { AtIcon as At };
