import { ArrowSquareRightIcon as ArrowSquareRightBoldIcon } from "../bold/ArrowSquareRight";
import { ArrowSquareRightIcon as ArrowSquareRightDuotoneIcon } from "../duotone/ArrowSquareRight";
import { ArrowSquareRightIcon as ArrowSquareRightFillIcon } from "../fill/ArrowSquareRight";
import { ArrowSquareRightIcon as ArrowSquareRightLightIcon } from "../light/ArrowSquareRight";
import { ArrowSquareRightIcon as ArrowSquareRightRegularIcon } from "../regular/ArrowSquareRight";
import { ArrowSquareRightIcon as ArrowSquareRightThinIcon } from "../thin/ArrowSquareRight";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowSquareRightThinIcon,
	light: ArrowSquareRightLightIcon,
	regular: ArrowSquareRightRegularIcon,
	bold: ArrowSquareRightBoldIcon,
	fill: ArrowSquareRightFillIcon,
	duotone: ArrowSquareRightDuotoneIcon,
} as const;

export function ArrowSquareRightIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowSquareRightIcon as ArrowSquareRight };
