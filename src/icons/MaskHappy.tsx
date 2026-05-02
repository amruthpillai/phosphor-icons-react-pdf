import { MaskHappyIcon as MaskHappyBoldIcon } from "../bold/MaskHappy";
import { MaskHappyIcon as MaskHappyDuotoneIcon } from "../duotone/MaskHappy";
import { MaskHappyIcon as MaskHappyFillIcon } from "../fill/MaskHappy";
import { MaskHappyIcon as MaskHappyLightIcon } from "../light/MaskHappy";
import { MaskHappyIcon as MaskHappyRegularIcon } from "../regular/MaskHappy";
import { MaskHappyIcon as MaskHappyThinIcon } from "../thin/MaskHappy";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MaskHappyThinIcon,
	light: MaskHappyLightIcon,
	regular: MaskHappyRegularIcon,
	bold: MaskHappyBoldIcon,
	fill: MaskHappyFillIcon,
	duotone: MaskHappyDuotoneIcon,
} as const;

export function MaskHappyIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MaskHappyIcon as MaskHappy };
