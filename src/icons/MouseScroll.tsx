import { MouseScrollIcon as MouseScrollBoldIcon } from "../bold/MouseScroll";
import { MouseScrollIcon as MouseScrollDuotoneIcon } from "../duotone/MouseScroll";
import { MouseScrollIcon as MouseScrollFillIcon } from "../fill/MouseScroll";
import { MouseScrollIcon as MouseScrollLightIcon } from "../light/MouseScroll";
import { MouseScrollIcon as MouseScrollRegularIcon } from "../regular/MouseScroll";
import { MouseScrollIcon as MouseScrollThinIcon } from "../thin/MouseScroll";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MouseScrollThinIcon,
	light: MouseScrollLightIcon,
	regular: MouseScrollRegularIcon,
	bold: MouseScrollBoldIcon,
	fill: MouseScrollFillIcon,
	duotone: MouseScrollDuotoneIcon,
} as const;

export function MouseScrollIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MouseScrollIcon as MouseScroll };
