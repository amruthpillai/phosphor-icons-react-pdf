import { CloudSunIcon as CloudSunBoldIcon } from "../bold/CloudSun";
import { CloudSunIcon as CloudSunDuotoneIcon } from "../duotone/CloudSun";
import { CloudSunIcon as CloudSunFillIcon } from "../fill/CloudSun";
import { CloudSunIcon as CloudSunLightIcon } from "../light/CloudSun";
import { CloudSunIcon as CloudSunRegularIcon } from "../regular/CloudSun";
import { CloudSunIcon as CloudSunThinIcon } from "../thin/CloudSun";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CloudSunThinIcon,
	light: CloudSunLightIcon,
	regular: CloudSunRegularIcon,
	bold: CloudSunBoldIcon,
	fill: CloudSunFillIcon,
	duotone: CloudSunDuotoneIcon,
} as const;

export function CloudSunIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CloudSunIcon as CloudSun };
