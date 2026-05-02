import { ClosedCaptioningIcon as ClosedCaptioningBoldIcon } from "../bold/ClosedCaptioning";
import { ClosedCaptioningIcon as ClosedCaptioningDuotoneIcon } from "../duotone/ClosedCaptioning";
import { ClosedCaptioningIcon as ClosedCaptioningFillIcon } from "../fill/ClosedCaptioning";
import { ClosedCaptioningIcon as ClosedCaptioningLightIcon } from "../light/ClosedCaptioning";
import { ClosedCaptioningIcon as ClosedCaptioningRegularIcon } from "../regular/ClosedCaptioning";
import { ClosedCaptioningIcon as ClosedCaptioningThinIcon } from "../thin/ClosedCaptioning";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ClosedCaptioningThinIcon,
	light: ClosedCaptioningLightIcon,
	regular: ClosedCaptioningRegularIcon,
	bold: ClosedCaptioningBoldIcon,
	fill: ClosedCaptioningFillIcon,
	duotone: ClosedCaptioningDuotoneIcon,
} as const;

export function ClosedCaptioningIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ClosedCaptioningIcon as ClosedCaptioning };
