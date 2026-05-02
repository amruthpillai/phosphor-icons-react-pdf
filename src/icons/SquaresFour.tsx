import { SquaresFourIcon as SquaresFourBoldIcon } from "../bold/SquaresFour";
import { SquaresFourIcon as SquaresFourDuotoneIcon } from "../duotone/SquaresFour";
import { SquaresFourIcon as SquaresFourFillIcon } from "../fill/SquaresFour";
import { SquaresFourIcon as SquaresFourLightIcon } from "../light/SquaresFour";
import { SquaresFourIcon as SquaresFourRegularIcon } from "../regular/SquaresFour";
import { SquaresFourIcon as SquaresFourThinIcon } from "../thin/SquaresFour";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SquaresFourThinIcon,
	light: SquaresFourLightIcon,
	regular: SquaresFourRegularIcon,
	bold: SquaresFourBoldIcon,
	fill: SquaresFourFillIcon,
	duotone: SquaresFourDuotoneIcon,
} as const;

export function SquaresFourIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SquaresFourIcon as SquaresFour };
