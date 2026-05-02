import { MouseIcon as MouseBoldIcon } from "../bold/Mouse";
import { MouseIcon as MouseDuotoneIcon } from "../duotone/Mouse";
import { MouseIcon as MouseFillIcon } from "../fill/Mouse";
import { MouseIcon as MouseLightIcon } from "../light/Mouse";
import { MouseIcon as MouseRegularIcon } from "../regular/Mouse";
import { MouseIcon as MouseThinIcon } from "../thin/Mouse";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MouseThinIcon,
	light: MouseLightIcon,
	regular: MouseRegularIcon,
	bold: MouseBoldIcon,
	fill: MouseFillIcon,
	duotone: MouseDuotoneIcon,
} as const;

export function MouseIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MouseIcon as Mouse };
