import { FlagCheckeredIcon as FlagCheckeredBoldIcon } from "../bold/FlagCheckered";
import { FlagCheckeredIcon as FlagCheckeredDuotoneIcon } from "../duotone/FlagCheckered";
import { FlagCheckeredIcon as FlagCheckeredFillIcon } from "../fill/FlagCheckered";
import { FlagCheckeredIcon as FlagCheckeredLightIcon } from "../light/FlagCheckered";
import { FlagCheckeredIcon as FlagCheckeredRegularIcon } from "../regular/FlagCheckered";
import { FlagCheckeredIcon as FlagCheckeredThinIcon } from "../thin/FlagCheckered";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FlagCheckeredThinIcon,
	light: FlagCheckeredLightIcon,
	regular: FlagCheckeredRegularIcon,
	bold: FlagCheckeredBoldIcon,
	fill: FlagCheckeredFillIcon,
	duotone: FlagCheckeredDuotoneIcon,
} as const;

export function FlagCheckeredIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FlagCheckeredIcon as FlagCheckered };
