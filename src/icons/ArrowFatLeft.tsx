import { ArrowFatLeftIcon as ArrowFatLeftBoldIcon } from "../bold/ArrowFatLeft";
import { ArrowFatLeftIcon as ArrowFatLeftDuotoneIcon } from "../duotone/ArrowFatLeft";
import { ArrowFatLeftIcon as ArrowFatLeftFillIcon } from "../fill/ArrowFatLeft";
import { ArrowFatLeftIcon as ArrowFatLeftLightIcon } from "../light/ArrowFatLeft";
import { ArrowFatLeftIcon as ArrowFatLeftRegularIcon } from "../regular/ArrowFatLeft";
import { ArrowFatLeftIcon as ArrowFatLeftThinIcon } from "../thin/ArrowFatLeft";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowFatLeftThinIcon,
	light: ArrowFatLeftLightIcon,
	regular: ArrowFatLeftRegularIcon,
	bold: ArrowFatLeftBoldIcon,
	fill: ArrowFatLeftFillIcon,
	duotone: ArrowFatLeftDuotoneIcon,
} as const;

export function ArrowFatLeftIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowFatLeftIcon as ArrowFatLeft };
