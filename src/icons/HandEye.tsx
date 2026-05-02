import { HandEyeIcon as HandEyeBoldIcon } from "../bold/HandEye";
import { HandEyeIcon as HandEyeDuotoneIcon } from "../duotone/HandEye";
import { HandEyeIcon as HandEyeFillIcon } from "../fill/HandEye";
import { HandEyeIcon as HandEyeLightIcon } from "../light/HandEye";
import { HandEyeIcon as HandEyeRegularIcon } from "../regular/HandEye";
import { HandEyeIcon as HandEyeThinIcon } from "../thin/HandEye";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: HandEyeThinIcon,
	light: HandEyeLightIcon,
	regular: HandEyeRegularIcon,
	bold: HandEyeBoldIcon,
	fill: HandEyeFillIcon,
	duotone: HandEyeDuotoneIcon,
} as const;

export function HandEyeIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { HandEyeIcon as HandEye };
