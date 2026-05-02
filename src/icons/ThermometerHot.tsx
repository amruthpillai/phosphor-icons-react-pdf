import { ThermometerHotIcon as ThermometerHotBoldIcon } from "../bold/ThermometerHot";
import { ThermometerHotIcon as ThermometerHotDuotoneIcon } from "../duotone/ThermometerHot";
import { ThermometerHotIcon as ThermometerHotFillIcon } from "../fill/ThermometerHot";
import { ThermometerHotIcon as ThermometerHotLightIcon } from "../light/ThermometerHot";
import { ThermometerHotIcon as ThermometerHotRegularIcon } from "../regular/ThermometerHot";
import { ThermometerHotIcon as ThermometerHotThinIcon } from "../thin/ThermometerHot";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ThermometerHotThinIcon,
	light: ThermometerHotLightIcon,
	regular: ThermometerHotRegularIcon,
	bold: ThermometerHotBoldIcon,
	fill: ThermometerHotFillIcon,
	duotone: ThermometerHotDuotoneIcon,
} as const;

export function ThermometerHotIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ThermometerHotIcon as ThermometerHot };
