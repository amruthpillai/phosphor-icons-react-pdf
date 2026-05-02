import { HeartIcon as HeartBoldIcon } from "../bold/Heart";
import { HeartIcon as HeartDuotoneIcon } from "../duotone/Heart";
import { HeartIcon as HeartFillIcon } from "../fill/Heart";
import { HeartIcon as HeartLightIcon } from "../light/Heart";
import { HeartIcon as HeartRegularIcon } from "../regular/Heart";
import { HeartIcon as HeartThinIcon } from "../thin/Heart";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: HeartThinIcon,
	light: HeartLightIcon,
	regular: HeartRegularIcon,
	bold: HeartBoldIcon,
	fill: HeartFillIcon,
	duotone: HeartDuotoneIcon,
} as const;

export function HeartIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { HeartIcon as Heart };
