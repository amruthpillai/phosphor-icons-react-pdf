import { SquareIcon as SquareBoldIcon } from "../bold/Square";
import { SquareIcon as SquareDuotoneIcon } from "../duotone/Square";
import { SquareIcon as SquareFillIcon } from "../fill/Square";
import { SquareIcon as SquareLightIcon } from "../light/Square";
import { SquareIcon as SquareRegularIcon } from "../regular/Square";
import { SquareIcon as SquareThinIcon } from "../thin/Square";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SquareThinIcon,
	light: SquareLightIcon,
	regular: SquareRegularIcon,
	bold: SquareBoldIcon,
	fill: SquareFillIcon,
	duotone: SquareDuotoneIcon,
} as const;

export function SquareIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SquareIcon as Square };
