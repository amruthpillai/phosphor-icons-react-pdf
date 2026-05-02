import { ArrowSquareDownRightIcon as ArrowSquareDownRightBoldIcon } from "../bold/ArrowSquareDownRight";
import { ArrowSquareDownRightIcon as ArrowSquareDownRightDuotoneIcon } from "../duotone/ArrowSquareDownRight";
import { ArrowSquareDownRightIcon as ArrowSquareDownRightFillIcon } from "../fill/ArrowSquareDownRight";
import { ArrowSquareDownRightIcon as ArrowSquareDownRightLightIcon } from "../light/ArrowSquareDownRight";
import { ArrowSquareDownRightIcon as ArrowSquareDownRightRegularIcon } from "../regular/ArrowSquareDownRight";
import { ArrowSquareDownRightIcon as ArrowSquareDownRightThinIcon } from "../thin/ArrowSquareDownRight";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowSquareDownRightThinIcon,
	light: ArrowSquareDownRightLightIcon,
	regular: ArrowSquareDownRightRegularIcon,
	bold: ArrowSquareDownRightBoldIcon,
	fill: ArrowSquareDownRightFillIcon,
	duotone: ArrowSquareDownRightDuotoneIcon,
} as const;

export function ArrowSquareDownRightIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowSquareDownRightIcon as ArrowSquareDownRight };
