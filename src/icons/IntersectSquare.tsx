import { IntersectSquareIcon as IntersectSquareBoldIcon } from "../bold/IntersectSquare";
import { IntersectSquareIcon as IntersectSquareDuotoneIcon } from "../duotone/IntersectSquare";
import { IntersectSquareIcon as IntersectSquareFillIcon } from "../fill/IntersectSquare";
import { IntersectSquareIcon as IntersectSquareLightIcon } from "../light/IntersectSquare";
import { IntersectSquareIcon as IntersectSquareRegularIcon } from "../regular/IntersectSquare";
import { IntersectSquareIcon as IntersectSquareThinIcon } from "../thin/IntersectSquare";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: IntersectSquareThinIcon,
	light: IntersectSquareLightIcon,
	regular: IntersectSquareRegularIcon,
	bold: IntersectSquareBoldIcon,
	fill: IntersectSquareFillIcon,
	duotone: IntersectSquareDuotoneIcon,
} as const;

export function IntersectSquareIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { IntersectSquareIcon as IntersectSquare };
