import { ArrowSquareUpLeftIcon as ArrowSquareUpLeftBoldIcon } from "../bold/ArrowSquareUpLeft";
import { ArrowSquareUpLeftIcon as ArrowSquareUpLeftDuotoneIcon } from "../duotone/ArrowSquareUpLeft";
import { ArrowSquareUpLeftIcon as ArrowSquareUpLeftFillIcon } from "../fill/ArrowSquareUpLeft";
import { ArrowSquareUpLeftIcon as ArrowSquareUpLeftLightIcon } from "../light/ArrowSquareUpLeft";
import { ArrowSquareUpLeftIcon as ArrowSquareUpLeftRegularIcon } from "../regular/ArrowSquareUpLeft";
import { ArrowSquareUpLeftIcon as ArrowSquareUpLeftThinIcon } from "../thin/ArrowSquareUpLeft";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowSquareUpLeftThinIcon,
	light: ArrowSquareUpLeftLightIcon,
	regular: ArrowSquareUpLeftRegularIcon,
	bold: ArrowSquareUpLeftBoldIcon,
	fill: ArrowSquareUpLeftFillIcon,
	duotone: ArrowSquareUpLeftDuotoneIcon,
} as const;

export function ArrowSquareUpLeftIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowSquareUpLeftIcon as ArrowSquareUpLeft };
