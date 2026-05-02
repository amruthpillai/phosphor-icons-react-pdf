import { UniteSquareIcon as UniteSquareBoldIcon } from "../bold/UniteSquare";
import { UniteSquareIcon as UniteSquareDuotoneIcon } from "../duotone/UniteSquare";
import { UniteSquareIcon as UniteSquareFillIcon } from "../fill/UniteSquare";
import { UniteSquareIcon as UniteSquareLightIcon } from "../light/UniteSquare";
import { UniteSquareIcon as UniteSquareRegularIcon } from "../regular/UniteSquare";
import { UniteSquareIcon as UniteSquareThinIcon } from "../thin/UniteSquare";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: UniteSquareThinIcon,
	light: UniteSquareLightIcon,
	regular: UniteSquareRegularIcon,
	bold: UniteSquareBoldIcon,
	fill: UniteSquareFillIcon,
	duotone: UniteSquareDuotoneIcon,
} as const;

export function UniteSquareIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { UniteSquareIcon as UniteSquare };
