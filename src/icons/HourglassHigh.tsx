import { HourglassHighIcon as HourglassHighBoldIcon } from "../bold/HourglassHigh";
import { HourglassHighIcon as HourglassHighDuotoneIcon } from "../duotone/HourglassHigh";
import { HourglassHighIcon as HourglassHighFillIcon } from "../fill/HourglassHigh";
import { HourglassHighIcon as HourglassHighLightIcon } from "../light/HourglassHigh";
import { HourglassHighIcon as HourglassHighRegularIcon } from "../regular/HourglassHigh";
import { HourglassHighIcon as HourglassHighThinIcon } from "../thin/HourglassHigh";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: HourglassHighThinIcon,
	light: HourglassHighLightIcon,
	regular: HourglassHighRegularIcon,
	bold: HourglassHighBoldIcon,
	fill: HourglassHighFillIcon,
	duotone: HourglassHighDuotoneIcon,
} as const;

export function HourglassHighIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { HourglassHighIcon as HourglassHigh };
