import { CheckSquareIcon as CheckSquareBoldIcon } from "../bold/CheckSquare";
import { CheckSquareIcon as CheckSquareDuotoneIcon } from "../duotone/CheckSquare";
import { CheckSquareIcon as CheckSquareFillIcon } from "../fill/CheckSquare";
import { CheckSquareIcon as CheckSquareLightIcon } from "../light/CheckSquare";
import { CheckSquareIcon as CheckSquareRegularIcon } from "../regular/CheckSquare";
import { CheckSquareIcon as CheckSquareThinIcon } from "../thin/CheckSquare";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CheckSquareThinIcon,
	light: CheckSquareLightIcon,
	regular: CheckSquareRegularIcon,
	bold: CheckSquareBoldIcon,
	fill: CheckSquareFillIcon,
	duotone: CheckSquareDuotoneIcon,
} as const;

export function CheckSquareIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CheckSquareIcon as CheckSquare };
