import { ArrowFatLinesLeftIcon as ArrowFatLinesLeftBoldIcon } from "../bold/ArrowFatLinesLeft";
import { ArrowFatLinesLeftIcon as ArrowFatLinesLeftDuotoneIcon } from "../duotone/ArrowFatLinesLeft";
import { ArrowFatLinesLeftIcon as ArrowFatLinesLeftFillIcon } from "../fill/ArrowFatLinesLeft";
import { ArrowFatLinesLeftIcon as ArrowFatLinesLeftLightIcon } from "../light/ArrowFatLinesLeft";
import { ArrowFatLinesLeftIcon as ArrowFatLinesLeftRegularIcon } from "../regular/ArrowFatLinesLeft";
import { ArrowFatLinesLeftIcon as ArrowFatLinesLeftThinIcon } from "../thin/ArrowFatLinesLeft";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowFatLinesLeftThinIcon,
	light: ArrowFatLinesLeftLightIcon,
	regular: ArrowFatLinesLeftRegularIcon,
	bold: ArrowFatLinesLeftBoldIcon,
	fill: ArrowFatLinesLeftFillIcon,
	duotone: ArrowFatLinesLeftDuotoneIcon,
} as const;

export function ArrowFatLinesLeftIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowFatLinesLeftIcon as ArrowFatLinesLeft };
