import { BracketsSquareIcon as BracketsSquareBoldIcon } from "../bold/BracketsSquare";
import { BracketsSquareIcon as BracketsSquareDuotoneIcon } from "../duotone/BracketsSquare";
import { BracketsSquareIcon as BracketsSquareFillIcon } from "../fill/BracketsSquare";
import { BracketsSquareIcon as BracketsSquareLightIcon } from "../light/BracketsSquare";
import { BracketsSquareIcon as BracketsSquareRegularIcon } from "../regular/BracketsSquare";
import { BracketsSquareIcon as BracketsSquareThinIcon } from "../thin/BracketsSquare";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BracketsSquareThinIcon,
	light: BracketsSquareLightIcon,
	regular: BracketsSquareRegularIcon,
	bold: BracketsSquareBoldIcon,
	fill: BracketsSquareFillIcon,
	duotone: BracketsSquareDuotoneIcon,
} as const;

export function BracketsSquareIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BracketsSquareIcon as BracketsSquare };
