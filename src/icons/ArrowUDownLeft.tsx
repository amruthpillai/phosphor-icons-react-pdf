import { ArrowUDownLeftIcon as ArrowUDownLeftBoldIcon } from "../bold/ArrowUDownLeft";
import { ArrowUDownLeftIcon as ArrowUDownLeftDuotoneIcon } from "../duotone/ArrowUDownLeft";
import { ArrowUDownLeftIcon as ArrowUDownLeftFillIcon } from "../fill/ArrowUDownLeft";
import { ArrowUDownLeftIcon as ArrowUDownLeftLightIcon } from "../light/ArrowUDownLeft";
import { ArrowUDownLeftIcon as ArrowUDownLeftRegularIcon } from "../regular/ArrowUDownLeft";
import { ArrowUDownLeftIcon as ArrowUDownLeftThinIcon } from "../thin/ArrowUDownLeft";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowUDownLeftThinIcon,
	light: ArrowUDownLeftLightIcon,
	regular: ArrowUDownLeftRegularIcon,
	bold: ArrowUDownLeftBoldIcon,
	fill: ArrowUDownLeftFillIcon,
	duotone: ArrowUDownLeftDuotoneIcon,
} as const;

export function ArrowUDownLeftIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowUDownLeftIcon as ArrowUDownLeft };
