import { MouseMiddleClickIcon as MouseMiddleClickBoldIcon } from "../bold/MouseMiddleClick";
import { MouseMiddleClickIcon as MouseMiddleClickDuotoneIcon } from "../duotone/MouseMiddleClick";
import { MouseMiddleClickIcon as MouseMiddleClickFillIcon } from "../fill/MouseMiddleClick";
import { MouseMiddleClickIcon as MouseMiddleClickLightIcon } from "../light/MouseMiddleClick";
import { MouseMiddleClickIcon as MouseMiddleClickRegularIcon } from "../regular/MouseMiddleClick";
import { MouseMiddleClickIcon as MouseMiddleClickThinIcon } from "../thin/MouseMiddleClick";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MouseMiddleClickThinIcon,
	light: MouseMiddleClickLightIcon,
	regular: MouseMiddleClickRegularIcon,
	bold: MouseMiddleClickBoldIcon,
	fill: MouseMiddleClickFillIcon,
	duotone: MouseMiddleClickDuotoneIcon,
} as const;

export function MouseMiddleClickIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MouseMiddleClickIcon as MouseMiddleClick };
