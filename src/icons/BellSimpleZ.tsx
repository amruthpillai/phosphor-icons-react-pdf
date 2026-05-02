import { BellSimpleZIcon as BellSimpleZBoldIcon } from "../bold/BellSimpleZ";
import { BellSimpleZIcon as BellSimpleZDuotoneIcon } from "../duotone/BellSimpleZ";
import { BellSimpleZIcon as BellSimpleZFillIcon } from "../fill/BellSimpleZ";
import { BellSimpleZIcon as BellSimpleZLightIcon } from "../light/BellSimpleZ";
import { BellSimpleZIcon as BellSimpleZRegularIcon } from "../regular/BellSimpleZ";
import { BellSimpleZIcon as BellSimpleZThinIcon } from "../thin/BellSimpleZ";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BellSimpleZThinIcon,
	light: BellSimpleZLightIcon,
	regular: BellSimpleZRegularIcon,
	bold: BellSimpleZBoldIcon,
	fill: BellSimpleZFillIcon,
	duotone: BellSimpleZDuotoneIcon,
} as const;

export function BellSimpleZIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BellSimpleZIcon as BellSimpleZ };
