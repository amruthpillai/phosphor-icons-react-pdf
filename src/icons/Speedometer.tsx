import { SpeedometerIcon as SpeedometerBoldIcon } from "../bold/Speedometer";
import { SpeedometerIcon as SpeedometerDuotoneIcon } from "../duotone/Speedometer";
import { SpeedometerIcon as SpeedometerFillIcon } from "../fill/Speedometer";
import { SpeedometerIcon as SpeedometerLightIcon } from "../light/Speedometer";
import { SpeedometerIcon as SpeedometerRegularIcon } from "../regular/Speedometer";
import { SpeedometerIcon as SpeedometerThinIcon } from "../thin/Speedometer";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SpeedometerThinIcon,
	light: SpeedometerLightIcon,
	regular: SpeedometerRegularIcon,
	bold: SpeedometerBoldIcon,
	fill: SpeedometerFillIcon,
	duotone: SpeedometerDuotoneIcon,
} as const;

export function SpeedometerIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SpeedometerIcon as Speedometer };
