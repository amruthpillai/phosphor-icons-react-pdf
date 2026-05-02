import { MouseLeftClickIcon as MouseLeftClickBoldIcon } from "../bold/MouseLeftClick";
import { MouseLeftClickIcon as MouseLeftClickDuotoneIcon } from "../duotone/MouseLeftClick";
import { MouseLeftClickIcon as MouseLeftClickFillIcon } from "../fill/MouseLeftClick";
import { MouseLeftClickIcon as MouseLeftClickLightIcon } from "../light/MouseLeftClick";
import { MouseLeftClickIcon as MouseLeftClickRegularIcon } from "../regular/MouseLeftClick";
import { MouseLeftClickIcon as MouseLeftClickThinIcon } from "../thin/MouseLeftClick";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MouseLeftClickThinIcon,
	light: MouseLeftClickLightIcon,
	regular: MouseLeftClickRegularIcon,
	bold: MouseLeftClickBoldIcon,
	fill: MouseLeftClickFillIcon,
	duotone: MouseLeftClickDuotoneIcon,
} as const;

export function MouseLeftClickIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MouseLeftClickIcon as MouseLeftClick };
