import { TrophyIcon as TrophyBoldIcon } from "../bold/Trophy";
import { TrophyIcon as TrophyDuotoneIcon } from "../duotone/Trophy";
import { TrophyIcon as TrophyFillIcon } from "../fill/Trophy";
import { TrophyIcon as TrophyLightIcon } from "../light/Trophy";
import { TrophyIcon as TrophyRegularIcon } from "../regular/Trophy";
import { TrophyIcon as TrophyThinIcon } from "../thin/Trophy";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TrophyThinIcon,
	light: TrophyLightIcon,
	regular: TrophyRegularIcon,
	bold: TrophyBoldIcon,
	fill: TrophyFillIcon,
	duotone: TrophyDuotoneIcon,
} as const;

export function TrophyIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TrophyIcon as Trophy };
