import { PlusSquareIcon as PlusSquareBoldIcon } from "../bold/PlusSquare";
import { PlusSquareIcon as PlusSquareDuotoneIcon } from "../duotone/PlusSquare";
import { PlusSquareIcon as PlusSquareFillIcon } from "../fill/PlusSquare";
import { PlusSquareIcon as PlusSquareLightIcon } from "../light/PlusSquare";
import { PlusSquareIcon as PlusSquareRegularIcon } from "../regular/PlusSquare";
import { PlusSquareIcon as PlusSquareThinIcon } from "../thin/PlusSquare";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PlusSquareThinIcon,
	light: PlusSquareLightIcon,
	regular: PlusSquareRegularIcon,
	bold: PlusSquareBoldIcon,
	fill: PlusSquareFillIcon,
	duotone: PlusSquareDuotoneIcon,
} as const;

export function PlusSquareIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PlusSquareIcon as PlusSquare };
