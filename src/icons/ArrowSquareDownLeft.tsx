import { ArrowSquareDownLeftIcon as ArrowSquareDownLeftBoldIcon } from "../bold/ArrowSquareDownLeft";
import { ArrowSquareDownLeftIcon as ArrowSquareDownLeftDuotoneIcon } from "../duotone/ArrowSquareDownLeft";
import { ArrowSquareDownLeftIcon as ArrowSquareDownLeftFillIcon } from "../fill/ArrowSquareDownLeft";
import { ArrowSquareDownLeftIcon as ArrowSquareDownLeftLightIcon } from "../light/ArrowSquareDownLeft";
import { ArrowSquareDownLeftIcon as ArrowSquareDownLeftRegularIcon } from "../regular/ArrowSquareDownLeft";
import { ArrowSquareDownLeftIcon as ArrowSquareDownLeftThinIcon } from "../thin/ArrowSquareDownLeft";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowSquareDownLeftThinIcon,
	light: ArrowSquareDownLeftLightIcon,
	regular: ArrowSquareDownLeftRegularIcon,
	bold: ArrowSquareDownLeftBoldIcon,
	fill: ArrowSquareDownLeftFillIcon,
	duotone: ArrowSquareDownLeftDuotoneIcon,
} as const;

export function ArrowSquareDownLeftIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowSquareDownLeftIcon as ArrowSquareDownLeft };
