import { CrossIcon as CrossBoldIcon } from "../bold/Cross";
import { CrossIcon as CrossDuotoneIcon } from "../duotone/Cross";
import { CrossIcon as CrossFillIcon } from "../fill/Cross";
import { CrossIcon as CrossLightIcon } from "../light/Cross";
import { CrossIcon as CrossRegularIcon } from "../regular/Cross";
import { CrossIcon as CrossThinIcon } from "../thin/Cross";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CrossThinIcon,
	light: CrossLightIcon,
	regular: CrossRegularIcon,
	bold: CrossBoldIcon,
	fill: CrossFillIcon,
	duotone: CrossDuotoneIcon,
} as const;

export function CrossIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CrossIcon as Cross };
