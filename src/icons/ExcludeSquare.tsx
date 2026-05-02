import { ExcludeSquareIcon as ExcludeSquareBoldIcon } from "../bold/ExcludeSquare";
import { ExcludeSquareIcon as ExcludeSquareDuotoneIcon } from "../duotone/ExcludeSquare";
import { ExcludeSquareIcon as ExcludeSquareFillIcon } from "../fill/ExcludeSquare";
import { ExcludeSquareIcon as ExcludeSquareLightIcon } from "../light/ExcludeSquare";
import { ExcludeSquareIcon as ExcludeSquareRegularIcon } from "../regular/ExcludeSquare";
import { ExcludeSquareIcon as ExcludeSquareThinIcon } from "../thin/ExcludeSquare";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ExcludeSquareThinIcon,
	light: ExcludeSquareLightIcon,
	regular: ExcludeSquareRegularIcon,
	bold: ExcludeSquareBoldIcon,
	fill: ExcludeSquareFillIcon,
	duotone: ExcludeSquareDuotoneIcon,
} as const;

export function ExcludeSquareIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ExcludeSquareIcon as ExcludeSquare };
