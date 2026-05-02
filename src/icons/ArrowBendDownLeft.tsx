import { ArrowBendDownLeftIcon as ArrowBendDownLeftBoldIcon } from "../bold/ArrowBendDownLeft";
import { ArrowBendDownLeftIcon as ArrowBendDownLeftDuotoneIcon } from "../duotone/ArrowBendDownLeft";
import { ArrowBendDownLeftIcon as ArrowBendDownLeftFillIcon } from "../fill/ArrowBendDownLeft";
import { ArrowBendDownLeftIcon as ArrowBendDownLeftLightIcon } from "../light/ArrowBendDownLeft";
import { ArrowBendDownLeftIcon as ArrowBendDownLeftRegularIcon } from "../regular/ArrowBendDownLeft";
import { ArrowBendDownLeftIcon as ArrowBendDownLeftThinIcon } from "../thin/ArrowBendDownLeft";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowBendDownLeftThinIcon,
	light: ArrowBendDownLeftLightIcon,
	regular: ArrowBendDownLeftRegularIcon,
	bold: ArrowBendDownLeftBoldIcon,
	fill: ArrowBendDownLeftFillIcon,
	duotone: ArrowBendDownLeftDuotoneIcon,
} as const;

export function ArrowBendDownLeftIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowBendDownLeftIcon as ArrowBendDownLeft };
