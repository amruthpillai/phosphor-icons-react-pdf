import { SubtractSquareIcon as SubtractSquareBoldIcon } from "../bold/SubtractSquare";
import { SubtractSquareIcon as SubtractSquareDuotoneIcon } from "../duotone/SubtractSquare";
import { SubtractSquareIcon as SubtractSquareFillIcon } from "../fill/SubtractSquare";
import { SubtractSquareIcon as SubtractSquareLightIcon } from "../light/SubtractSquare";
import { SubtractSquareIcon as SubtractSquareRegularIcon } from "../regular/SubtractSquare";
import { SubtractSquareIcon as SubtractSquareThinIcon } from "../thin/SubtractSquare";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SubtractSquareThinIcon,
	light: SubtractSquareLightIcon,
	regular: SubtractSquareRegularIcon,
	bold: SubtractSquareBoldIcon,
	fill: SubtractSquareFillIcon,
	duotone: SubtractSquareDuotoneIcon,
} as const;

export function SubtractSquareIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SubtractSquareIcon as SubtractSquare };
