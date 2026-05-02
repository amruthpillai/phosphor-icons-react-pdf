import { ThermometerIcon as ThermometerBoldIcon } from "../bold/Thermometer";
import { ThermometerIcon as ThermometerDuotoneIcon } from "../duotone/Thermometer";
import { ThermometerIcon as ThermometerFillIcon } from "../fill/Thermometer";
import { ThermometerIcon as ThermometerLightIcon } from "../light/Thermometer";
import { ThermometerIcon as ThermometerRegularIcon } from "../regular/Thermometer";
import { ThermometerIcon as ThermometerThinIcon } from "../thin/Thermometer";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ThermometerThinIcon,
	light: ThermometerLightIcon,
	regular: ThermometerRegularIcon,
	bold: ThermometerBoldIcon,
	fill: ThermometerFillIcon,
	duotone: ThermometerDuotoneIcon,
} as const;

export function ThermometerIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ThermometerIcon as Thermometer };
