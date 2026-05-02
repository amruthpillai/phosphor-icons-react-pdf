import { MinusSquareIcon as MinusSquareBoldIcon } from "../bold/MinusSquare";
import { MinusSquareIcon as MinusSquareDuotoneIcon } from "../duotone/MinusSquare";
import { MinusSquareIcon as MinusSquareFillIcon } from "../fill/MinusSquare";
import { MinusSquareIcon as MinusSquareLightIcon } from "../light/MinusSquare";
import { MinusSquareIcon as MinusSquareRegularIcon } from "../regular/MinusSquare";
import { MinusSquareIcon as MinusSquareThinIcon } from "../thin/MinusSquare";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MinusSquareThinIcon,
	light: MinusSquareLightIcon,
	regular: MinusSquareRegularIcon,
	bold: MinusSquareBoldIcon,
	fill: MinusSquareFillIcon,
	duotone: MinusSquareDuotoneIcon,
} as const;

export function MinusSquareIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MinusSquareIcon as MinusSquare };
