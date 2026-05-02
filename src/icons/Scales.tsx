import { ScalesIcon as ScalesBoldIcon } from "../bold/Scales";
import { ScalesIcon as ScalesDuotoneIcon } from "../duotone/Scales";
import { ScalesIcon as ScalesFillIcon } from "../fill/Scales";
import { ScalesIcon as ScalesLightIcon } from "../light/Scales";
import { ScalesIcon as ScalesRegularIcon } from "../regular/Scales";
import { ScalesIcon as ScalesThinIcon } from "../thin/Scales";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ScalesThinIcon,
	light: ScalesLightIcon,
	regular: ScalesRegularIcon,
	bold: ScalesBoldIcon,
	fill: ScalesFillIcon,
	duotone: ScalesDuotoneIcon,
} as const;

export function ScalesIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ScalesIcon as Scales };
