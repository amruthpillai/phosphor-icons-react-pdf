import { FootballIcon as FootballBoldIcon } from "../bold/Football";
import { FootballIcon as FootballDuotoneIcon } from "../duotone/Football";
import { FootballIcon as FootballFillIcon } from "../fill/Football";
import { FootballIcon as FootballLightIcon } from "../light/Football";
import { FootballIcon as FootballRegularIcon } from "../regular/Football";
import { FootballIcon as FootballThinIcon } from "../thin/Football";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FootballThinIcon,
	light: FootballLightIcon,
	regular: FootballRegularIcon,
	bold: FootballBoldIcon,
	fill: FootballFillIcon,
	duotone: FootballDuotoneIcon,
} as const;

export function FootballIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FootballIcon as Football };
