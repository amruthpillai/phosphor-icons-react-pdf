import { ArrowDownLeftIcon as ArrowDownLeftBoldIcon } from "../bold/ArrowDownLeft";
import { ArrowDownLeftIcon as ArrowDownLeftDuotoneIcon } from "../duotone/ArrowDownLeft";
import { ArrowDownLeftIcon as ArrowDownLeftFillIcon } from "../fill/ArrowDownLeft";
import { ArrowDownLeftIcon as ArrowDownLeftLightIcon } from "../light/ArrowDownLeft";
import { ArrowDownLeftIcon as ArrowDownLeftRegularIcon } from "../regular/ArrowDownLeft";
import { ArrowDownLeftIcon as ArrowDownLeftThinIcon } from "../thin/ArrowDownLeft";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowDownLeftThinIcon,
	light: ArrowDownLeftLightIcon,
	regular: ArrowDownLeftRegularIcon,
	bold: ArrowDownLeftBoldIcon,
	fill: ArrowDownLeftFillIcon,
	duotone: ArrowDownLeftDuotoneIcon,
} as const;

export function ArrowDownLeftIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowDownLeftIcon as ArrowDownLeft };
