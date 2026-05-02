import { CloudRainIcon as CloudRainBoldIcon } from "../bold/CloudRain";
import { CloudRainIcon as CloudRainDuotoneIcon } from "../duotone/CloudRain";
import { CloudRainIcon as CloudRainFillIcon } from "../fill/CloudRain";
import { CloudRainIcon as CloudRainLightIcon } from "../light/CloudRain";
import { CloudRainIcon as CloudRainRegularIcon } from "../regular/CloudRain";
import { CloudRainIcon as CloudRainThinIcon } from "../thin/CloudRain";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CloudRainThinIcon,
	light: CloudRainLightIcon,
	regular: CloudRainRegularIcon,
	bold: CloudRainBoldIcon,
	fill: CloudRainFillIcon,
	duotone: CloudRainDuotoneIcon,
} as const;

export function CloudRainIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CloudRainIcon as CloudRain };
