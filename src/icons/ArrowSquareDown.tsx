import { ArrowSquareDownIcon as ArrowSquareDownBoldIcon } from "../bold/ArrowSquareDown";
import { ArrowSquareDownIcon as ArrowSquareDownDuotoneIcon } from "../duotone/ArrowSquareDown";
import { ArrowSquareDownIcon as ArrowSquareDownFillIcon } from "../fill/ArrowSquareDown";
import { ArrowSquareDownIcon as ArrowSquareDownLightIcon } from "../light/ArrowSquareDown";
import { ArrowSquareDownIcon as ArrowSquareDownRegularIcon } from "../regular/ArrowSquareDown";
import { ArrowSquareDownIcon as ArrowSquareDownThinIcon } from "../thin/ArrowSquareDown";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowSquareDownThinIcon,
	light: ArrowSquareDownLightIcon,
	regular: ArrowSquareDownRegularIcon,
	bold: ArrowSquareDownBoldIcon,
	fill: ArrowSquareDownFillIcon,
	duotone: ArrowSquareDownDuotoneIcon,
} as const;

export function ArrowSquareDownIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowSquareDownIcon as ArrowSquareDown };
