import { XSquareIcon as XSquareBoldIcon } from "../bold/XSquare";
import { XSquareIcon as XSquareDuotoneIcon } from "../duotone/XSquare";
import { XSquareIcon as XSquareFillIcon } from "../fill/XSquare";
import { XSquareIcon as XSquareLightIcon } from "../light/XSquare";
import { XSquareIcon as XSquareRegularIcon } from "../regular/XSquare";
import { XSquareIcon as XSquareThinIcon } from "../thin/XSquare";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: XSquareThinIcon,
	light: XSquareLightIcon,
	regular: XSquareRegularIcon,
	bold: XSquareBoldIcon,
	fill: XSquareFillIcon,
	duotone: XSquareDuotoneIcon,
} as const;

export function XSquareIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { XSquareIcon as XSquare };
