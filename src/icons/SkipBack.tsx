import { SkipBackIcon as SkipBackBoldIcon } from "../bold/SkipBack";
import { SkipBackIcon as SkipBackDuotoneIcon } from "../duotone/SkipBack";
import { SkipBackIcon as SkipBackFillIcon } from "../fill/SkipBack";
import { SkipBackIcon as SkipBackLightIcon } from "../light/SkipBack";
import { SkipBackIcon as SkipBackRegularIcon } from "../regular/SkipBack";
import { SkipBackIcon as SkipBackThinIcon } from "../thin/SkipBack";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SkipBackThinIcon,
	light: SkipBackLightIcon,
	regular: SkipBackRegularIcon,
	bold: SkipBackBoldIcon,
	fill: SkipBackFillIcon,
	duotone: SkipBackDuotoneIcon,
} as const;

export function SkipBackIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SkipBackIcon as SkipBack };
