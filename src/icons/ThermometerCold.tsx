import { ThermometerColdIcon as ThermometerColdBoldIcon } from "../bold/ThermometerCold";
import { ThermometerColdIcon as ThermometerColdDuotoneIcon } from "../duotone/ThermometerCold";
import { ThermometerColdIcon as ThermometerColdFillIcon } from "../fill/ThermometerCold";
import { ThermometerColdIcon as ThermometerColdLightIcon } from "../light/ThermometerCold";
import { ThermometerColdIcon as ThermometerColdRegularIcon } from "../regular/ThermometerCold";
import { ThermometerColdIcon as ThermometerColdThinIcon } from "../thin/ThermometerCold";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ThermometerColdThinIcon,
	light: ThermometerColdLightIcon,
	regular: ThermometerColdRegularIcon,
	bold: ThermometerColdBoldIcon,
	fill: ThermometerColdFillIcon,
	duotone: ThermometerColdDuotoneIcon,
} as const;

export function ThermometerColdIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ThermometerColdIcon as ThermometerCold };
