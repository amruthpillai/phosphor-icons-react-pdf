import { ArrowSquareInIcon as ArrowSquareInBoldIcon } from "../bold/ArrowSquareIn";
import { ArrowSquareInIcon as ArrowSquareInDuotoneIcon } from "../duotone/ArrowSquareIn";
import { ArrowSquareInIcon as ArrowSquareInFillIcon } from "../fill/ArrowSquareIn";
import { ArrowSquareInIcon as ArrowSquareInLightIcon } from "../light/ArrowSquareIn";
import { ArrowSquareInIcon as ArrowSquareInRegularIcon } from "../regular/ArrowSquareIn";
import { ArrowSquareInIcon as ArrowSquareInThinIcon } from "../thin/ArrowSquareIn";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowSquareInThinIcon,
	light: ArrowSquareInLightIcon,
	regular: ArrowSquareInRegularIcon,
	bold: ArrowSquareInBoldIcon,
	fill: ArrowSquareInFillIcon,
	duotone: ArrowSquareInDuotoneIcon,
} as const;

export function ArrowSquareInIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowSquareInIcon as ArrowSquareIn };
