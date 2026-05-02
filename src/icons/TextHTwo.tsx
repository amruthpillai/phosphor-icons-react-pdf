import { TextHTwoIcon as TextHTwoBoldIcon } from "../bold/TextHTwo";
import { TextHTwoIcon as TextHTwoDuotoneIcon } from "../duotone/TextHTwo";
import { TextHTwoIcon as TextHTwoFillIcon } from "../fill/TextHTwo";
import { TextHTwoIcon as TextHTwoLightIcon } from "../light/TextHTwo";
import { TextHTwoIcon as TextHTwoRegularIcon } from "../regular/TextHTwo";
import { TextHTwoIcon as TextHTwoThinIcon } from "../thin/TextHTwo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TextHTwoThinIcon,
	light: TextHTwoLightIcon,
	regular: TextHTwoRegularIcon,
	bold: TextHTwoBoldIcon,
	fill: TextHTwoFillIcon,
	duotone: TextHTwoDuotoneIcon,
} as const;

export function TextHTwoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TextHTwoIcon as TextHTwo };
