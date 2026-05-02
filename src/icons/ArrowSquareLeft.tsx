import { ArrowSquareLeftIcon as ArrowSquareLeftBoldIcon } from "../bold/ArrowSquareLeft";
import { ArrowSquareLeftIcon as ArrowSquareLeftDuotoneIcon } from "../duotone/ArrowSquareLeft";
import { ArrowSquareLeftIcon as ArrowSquareLeftFillIcon } from "../fill/ArrowSquareLeft";
import { ArrowSquareLeftIcon as ArrowSquareLeftLightIcon } from "../light/ArrowSquareLeft";
import { ArrowSquareLeftIcon as ArrowSquareLeftRegularIcon } from "../regular/ArrowSquareLeft";
import { ArrowSquareLeftIcon as ArrowSquareLeftThinIcon } from "../thin/ArrowSquareLeft";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowSquareLeftThinIcon,
	light: ArrowSquareLeftLightIcon,
	regular: ArrowSquareLeftRegularIcon,
	bold: ArrowSquareLeftBoldIcon,
	fill: ArrowSquareLeftFillIcon,
	duotone: ArrowSquareLeftDuotoneIcon,
} as const;

export function ArrowSquareLeftIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowSquareLeftIcon as ArrowSquareLeft };
