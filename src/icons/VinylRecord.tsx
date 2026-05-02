import { VinylRecordIcon as VinylRecordBoldIcon } from "../bold/VinylRecord";
import { VinylRecordIcon as VinylRecordDuotoneIcon } from "../duotone/VinylRecord";
import { VinylRecordIcon as VinylRecordFillIcon } from "../fill/VinylRecord";
import { VinylRecordIcon as VinylRecordLightIcon } from "../light/VinylRecord";
import { VinylRecordIcon as VinylRecordRegularIcon } from "../regular/VinylRecord";
import { VinylRecordIcon as VinylRecordThinIcon } from "../thin/VinylRecord";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: VinylRecordThinIcon,
	light: VinylRecordLightIcon,
	regular: VinylRecordRegularIcon,
	bold: VinylRecordBoldIcon,
	fill: VinylRecordFillIcon,
	duotone: VinylRecordDuotoneIcon,
} as const;

export function VinylRecordIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { VinylRecordIcon as VinylRecord };
