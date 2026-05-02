import { ArrowSquareOutIcon as ArrowSquareOutBoldIcon } from "../bold/ArrowSquareOut";
import { ArrowSquareOutIcon as ArrowSquareOutDuotoneIcon } from "../duotone/ArrowSquareOut";
import { ArrowSquareOutIcon as ArrowSquareOutFillIcon } from "../fill/ArrowSquareOut";
import { ArrowSquareOutIcon as ArrowSquareOutLightIcon } from "../light/ArrowSquareOut";
import { ArrowSquareOutIcon as ArrowSquareOutRegularIcon } from "../regular/ArrowSquareOut";
import { ArrowSquareOutIcon as ArrowSquareOutThinIcon } from "../thin/ArrowSquareOut";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowSquareOutThinIcon,
	light: ArrowSquareOutLightIcon,
	regular: ArrowSquareOutRegularIcon,
	bold: ArrowSquareOutBoldIcon,
	fill: ArrowSquareOutFillIcon,
	duotone: ArrowSquareOutDuotoneIcon,
} as const;

export function ArrowSquareOutIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowSquareOutIcon as ArrowSquareOut };
