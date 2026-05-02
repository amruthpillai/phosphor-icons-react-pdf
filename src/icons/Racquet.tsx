import { RacquetIcon as RacquetBoldIcon } from "../bold/Racquet";
import { RacquetIcon as RacquetDuotoneIcon } from "../duotone/Racquet";
import { RacquetIcon as RacquetFillIcon } from "../fill/Racquet";
import { RacquetIcon as RacquetLightIcon } from "../light/Racquet";
import { RacquetIcon as RacquetRegularIcon } from "../regular/Racquet";
import { RacquetIcon as RacquetThinIcon } from "../thin/Racquet";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: RacquetThinIcon,
	light: RacquetLightIcon,
	regular: RacquetRegularIcon,
	bold: RacquetBoldIcon,
	fill: RacquetFillIcon,
	duotone: RacquetDuotoneIcon,
} as const;

export function RacquetIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { RacquetIcon as Racquet };
