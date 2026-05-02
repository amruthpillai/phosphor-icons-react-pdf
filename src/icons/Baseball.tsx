import { BaseballIcon as BaseballBoldIcon } from "../bold/Baseball";
import { BaseballIcon as BaseballDuotoneIcon } from "../duotone/Baseball";
import { BaseballIcon as BaseballFillIcon } from "../fill/Baseball";
import { BaseballIcon as BaseballLightIcon } from "../light/Baseball";
import { BaseballIcon as BaseballRegularIcon } from "../regular/Baseball";
import { BaseballIcon as BaseballThinIcon } from "../thin/Baseball";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BaseballThinIcon,
	light: BaseballLightIcon,
	regular: BaseballRegularIcon,
	bold: BaseballBoldIcon,
	fill: BaseballFillIcon,
	duotone: BaseballDuotoneIcon,
} as const;

export function BaseballIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BaseballIcon as Baseball };
