import { FirstAidKitIcon as FirstAidKitBoldIcon } from "../bold/FirstAidKit";
import { FirstAidKitIcon as FirstAidKitDuotoneIcon } from "../duotone/FirstAidKit";
import { FirstAidKitIcon as FirstAidKitFillIcon } from "../fill/FirstAidKit";
import { FirstAidKitIcon as FirstAidKitLightIcon } from "../light/FirstAidKit";
import { FirstAidKitIcon as FirstAidKitRegularIcon } from "../regular/FirstAidKit";
import { FirstAidKitIcon as FirstAidKitThinIcon } from "../thin/FirstAidKit";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FirstAidKitThinIcon,
	light: FirstAidKitLightIcon,
	regular: FirstAidKitRegularIcon,
	bold: FirstAidKitBoldIcon,
	fill: FirstAidKitFillIcon,
	duotone: FirstAidKitDuotoneIcon,
} as const;

export function FirstAidKitIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FirstAidKitIcon as FirstAidKit };
