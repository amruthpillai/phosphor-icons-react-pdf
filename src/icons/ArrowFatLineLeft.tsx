import { ArrowFatLineLeftIcon as ArrowFatLineLeftBoldIcon } from "../bold/ArrowFatLineLeft";
import { ArrowFatLineLeftIcon as ArrowFatLineLeftDuotoneIcon } from "../duotone/ArrowFatLineLeft";
import { ArrowFatLineLeftIcon as ArrowFatLineLeftFillIcon } from "../fill/ArrowFatLineLeft";
import { ArrowFatLineLeftIcon as ArrowFatLineLeftLightIcon } from "../light/ArrowFatLineLeft";
import { ArrowFatLineLeftIcon as ArrowFatLineLeftRegularIcon } from "../regular/ArrowFatLineLeft";
import { ArrowFatLineLeftIcon as ArrowFatLineLeftThinIcon } from "../thin/ArrowFatLineLeft";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowFatLineLeftThinIcon,
	light: ArrowFatLineLeftLightIcon,
	regular: ArrowFatLineLeftRegularIcon,
	bold: ArrowFatLineLeftBoldIcon,
	fill: ArrowFatLineLeftFillIcon,
	duotone: ArrowFatLineLeftDuotoneIcon,
} as const;

export function ArrowFatLineLeftIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowFatLineLeftIcon as ArrowFatLineLeft };
