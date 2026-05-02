import { CloudWarningIcon as CloudWarningBoldIcon } from "../bold/CloudWarning";
import { CloudWarningIcon as CloudWarningDuotoneIcon } from "../duotone/CloudWarning";
import { CloudWarningIcon as CloudWarningFillIcon } from "../fill/CloudWarning";
import { CloudWarningIcon as CloudWarningLightIcon } from "../light/CloudWarning";
import { CloudWarningIcon as CloudWarningRegularIcon } from "../regular/CloudWarning";
import { CloudWarningIcon as CloudWarningThinIcon } from "../thin/CloudWarning";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CloudWarningThinIcon,
	light: CloudWarningLightIcon,
	regular: CloudWarningRegularIcon,
	bold: CloudWarningBoldIcon,
	fill: CloudWarningFillIcon,
	duotone: CloudWarningDuotoneIcon,
} as const;

export function CloudWarningIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CloudWarningIcon as CloudWarning };
