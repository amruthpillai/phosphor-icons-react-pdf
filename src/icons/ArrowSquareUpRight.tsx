import { ArrowSquareUpRightIcon as ArrowSquareUpRightBoldIcon } from "../bold/ArrowSquareUpRight";
import { ArrowSquareUpRightIcon as ArrowSquareUpRightDuotoneIcon } from "../duotone/ArrowSquareUpRight";
import { ArrowSquareUpRightIcon as ArrowSquareUpRightFillIcon } from "../fill/ArrowSquareUpRight";
import { ArrowSquareUpRightIcon as ArrowSquareUpRightLightIcon } from "../light/ArrowSquareUpRight";
import { ArrowSquareUpRightIcon as ArrowSquareUpRightRegularIcon } from "../regular/ArrowSquareUpRight";
import { ArrowSquareUpRightIcon as ArrowSquareUpRightThinIcon } from "../thin/ArrowSquareUpRight";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowSquareUpRightThinIcon,
	light: ArrowSquareUpRightLightIcon,
	regular: ArrowSquareUpRightRegularIcon,
	bold: ArrowSquareUpRightBoldIcon,
	fill: ArrowSquareUpRightFillIcon,
	duotone: ArrowSquareUpRightDuotoneIcon,
} as const;

export function ArrowSquareUpRightIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowSquareUpRightIcon as ArrowSquareUpRight };
