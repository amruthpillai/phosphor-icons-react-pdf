import { ImagesSquareIcon as ImagesSquareBoldIcon } from "../bold/ImagesSquare";
import { ImagesSquareIcon as ImagesSquareDuotoneIcon } from "../duotone/ImagesSquare";
import { ImagesSquareIcon as ImagesSquareFillIcon } from "../fill/ImagesSquare";
import { ImagesSquareIcon as ImagesSquareLightIcon } from "../light/ImagesSquare";
import { ImagesSquareIcon as ImagesSquareRegularIcon } from "../regular/ImagesSquare";
import { ImagesSquareIcon as ImagesSquareThinIcon } from "../thin/ImagesSquare";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ImagesSquareThinIcon,
	light: ImagesSquareLightIcon,
	regular: ImagesSquareRegularIcon,
	bold: ImagesSquareBoldIcon,
	fill: ImagesSquareFillIcon,
	duotone: ImagesSquareDuotoneIcon,
} as const;

export function ImagesSquareIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ImagesSquareIcon as ImagesSquare };
