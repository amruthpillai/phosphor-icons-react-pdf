import { MouseRightClickIcon as MouseRightClickBoldIcon } from "../bold/MouseRightClick";
import { MouseRightClickIcon as MouseRightClickDuotoneIcon } from "../duotone/MouseRightClick";
import { MouseRightClickIcon as MouseRightClickFillIcon } from "../fill/MouseRightClick";
import { MouseRightClickIcon as MouseRightClickLightIcon } from "../light/MouseRightClick";
import { MouseRightClickIcon as MouseRightClickRegularIcon } from "../regular/MouseRightClick";
import { MouseRightClickIcon as MouseRightClickThinIcon } from "../thin/MouseRightClick";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MouseRightClickThinIcon,
	light: MouseRightClickLightIcon,
	regular: MouseRightClickRegularIcon,
	bold: MouseRightClickBoldIcon,
	fill: MouseRightClickFillIcon,
	duotone: MouseRightClickDuotoneIcon,
} as const;

export function MouseRightClickIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MouseRightClickIcon as MouseRightClick };
