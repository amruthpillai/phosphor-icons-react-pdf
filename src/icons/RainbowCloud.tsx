import { RainbowCloudIcon as RainbowCloudBoldIcon } from "../bold/RainbowCloud";
import { RainbowCloudIcon as RainbowCloudDuotoneIcon } from "../duotone/RainbowCloud";
import { RainbowCloudIcon as RainbowCloudFillIcon } from "../fill/RainbowCloud";
import { RainbowCloudIcon as RainbowCloudLightIcon } from "../light/RainbowCloud";
import { RainbowCloudIcon as RainbowCloudRegularIcon } from "../regular/RainbowCloud";
import { RainbowCloudIcon as RainbowCloudThinIcon } from "../thin/RainbowCloud";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: RainbowCloudThinIcon,
	light: RainbowCloudLightIcon,
	regular: RainbowCloudRegularIcon,
	bold: RainbowCloudBoldIcon,
	fill: RainbowCloudFillIcon,
	duotone: RainbowCloudDuotoneIcon,
} as const;

export function RainbowCloudIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { RainbowCloudIcon as RainbowCloud };
