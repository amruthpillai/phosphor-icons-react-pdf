import { CheckSquareOffsetIcon as CheckSquareOffsetBoldIcon } from "../bold/CheckSquareOffset";
import { CheckSquareOffsetIcon as CheckSquareOffsetDuotoneIcon } from "../duotone/CheckSquareOffset";
import { CheckSquareOffsetIcon as CheckSquareOffsetFillIcon } from "../fill/CheckSquareOffset";
import { CheckSquareOffsetIcon as CheckSquareOffsetLightIcon } from "../light/CheckSquareOffset";
import { CheckSquareOffsetIcon as CheckSquareOffsetRegularIcon } from "../regular/CheckSquareOffset";
import { CheckSquareOffsetIcon as CheckSquareOffsetThinIcon } from "../thin/CheckSquareOffset";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CheckSquareOffsetThinIcon,
	light: CheckSquareOffsetLightIcon,
	regular: CheckSquareOffsetRegularIcon,
	bold: CheckSquareOffsetBoldIcon,
	fill: CheckSquareOffsetFillIcon,
	duotone: CheckSquareOffsetDuotoneIcon,
} as const;

export function CheckSquareOffsetIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CheckSquareOffsetIcon as CheckSquareOffset };
