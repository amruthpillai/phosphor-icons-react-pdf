import { DetectiveIcon as DetectiveBoldIcon } from "../bold/Detective";
import { DetectiveIcon as DetectiveDuotoneIcon } from "../duotone/Detective";
import { DetectiveIcon as DetectiveFillIcon } from "../fill/Detective";
import { DetectiveIcon as DetectiveLightIcon } from "../light/Detective";
import { DetectiveIcon as DetectiveRegularIcon } from "../regular/Detective";
import { DetectiveIcon as DetectiveThinIcon } from "../thin/Detective";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: DetectiveThinIcon,
	light: DetectiveLightIcon,
	regular: DetectiveRegularIcon,
	bold: DetectiveBoldIcon,
	fill: DetectiveFillIcon,
	duotone: DetectiveDuotoneIcon,
} as const;

export function DetectiveIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { DetectiveIcon as Detective };
