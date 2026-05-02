import { WaveSquareIcon as WaveSquareBoldIcon } from "../bold/WaveSquare";
import { WaveSquareIcon as WaveSquareDuotoneIcon } from "../duotone/WaveSquare";
import { WaveSquareIcon as WaveSquareFillIcon } from "../fill/WaveSquare";
import { WaveSquareIcon as WaveSquareLightIcon } from "../light/WaveSquare";
import { WaveSquareIcon as WaveSquareRegularIcon } from "../regular/WaveSquare";
import { WaveSquareIcon as WaveSquareThinIcon } from "../thin/WaveSquare";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: WaveSquareThinIcon,
	light: WaveSquareLightIcon,
	regular: WaveSquareRegularIcon,
	bold: WaveSquareBoldIcon,
	fill: WaveSquareFillIcon,
	duotone: WaveSquareDuotoneIcon,
} as const;

export function WaveSquareIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { WaveSquareIcon as WaveSquare };
