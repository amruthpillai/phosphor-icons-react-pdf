import { ImageSquareIcon as ImageSquareBoldIcon } from "../bold/ImageSquare";
import { ImageSquareIcon as ImageSquareDuotoneIcon } from "../duotone/ImageSquare";
import { ImageSquareIcon as ImageSquareFillIcon } from "../fill/ImageSquare";
import { ImageSquareIcon as ImageSquareLightIcon } from "../light/ImageSquare";
import { ImageSquareIcon as ImageSquareRegularIcon } from "../regular/ImageSquare";
import { ImageSquareIcon as ImageSquareThinIcon } from "../thin/ImageSquare";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ImageSquareThinIcon,
	light: ImageSquareLightIcon,
	regular: ImageSquareRegularIcon,
	bold: ImageSquareBoldIcon,
	fill: ImageSquareFillIcon,
	duotone: ImageSquareDuotoneIcon,
} as const;

export function ImageSquareIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ImageSquareIcon as ImageSquare };
