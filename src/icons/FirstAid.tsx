import { FirstAidIcon as FirstAidBoldIcon } from "../bold/FirstAid";
import { FirstAidIcon as FirstAidDuotoneIcon } from "../duotone/FirstAid";
import { FirstAidIcon as FirstAidFillIcon } from "../fill/FirstAid";
import { FirstAidIcon as FirstAidLightIcon } from "../light/FirstAid";
import { FirstAidIcon as FirstAidRegularIcon } from "../regular/FirstAid";
import { FirstAidIcon as FirstAidThinIcon } from "../thin/FirstAid";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FirstAidThinIcon,
	light: FirstAidLightIcon,
	regular: FirstAidRegularIcon,
	bold: FirstAidBoldIcon,
	fill: FirstAidFillIcon,
	duotone: FirstAidDuotoneIcon,
} as const;

export function FirstAidIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FirstAidIcon as FirstAid };
