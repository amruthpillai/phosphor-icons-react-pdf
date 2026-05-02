import { ArrowLeftIcon as ArrowLeftBoldIcon } from "../bold/ArrowLeft";
import { ArrowLeftIcon as ArrowLeftDuotoneIcon } from "../duotone/ArrowLeft";
import { ArrowLeftIcon as ArrowLeftFillIcon } from "../fill/ArrowLeft";
import { ArrowLeftIcon as ArrowLeftLightIcon } from "../light/ArrowLeft";
import { ArrowLeftIcon as ArrowLeftRegularIcon } from "../regular/ArrowLeft";
import { ArrowLeftIcon as ArrowLeftThinIcon } from "../thin/ArrowLeft";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowLeftThinIcon,
	light: ArrowLeftLightIcon,
	regular: ArrowLeftRegularIcon,
	bold: ArrowLeftBoldIcon,
	fill: ArrowLeftFillIcon,
	duotone: ArrowLeftDuotoneIcon,
} as const;

export function ArrowLeftIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowLeftIcon as ArrowLeft };
