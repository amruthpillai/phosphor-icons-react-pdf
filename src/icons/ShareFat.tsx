import { ShareFatIcon as ShareFatBoldIcon } from "../bold/ShareFat";
import { ShareFatIcon as ShareFatDuotoneIcon } from "../duotone/ShareFat";
import { ShareFatIcon as ShareFatFillIcon } from "../fill/ShareFat";
import { ShareFatIcon as ShareFatLightIcon } from "../light/ShareFat";
import { ShareFatIcon as ShareFatRegularIcon } from "../regular/ShareFat";
import { ShareFatIcon as ShareFatThinIcon } from "../thin/ShareFat";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ShareFatThinIcon,
	light: ShareFatLightIcon,
	regular: ShareFatRegularIcon,
	bold: ShareFatBoldIcon,
	fill: ShareFatFillIcon,
	duotone: ShareFatDuotoneIcon,
} as const;

export function ShareFatIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ShareFatIcon as ShareFat };
