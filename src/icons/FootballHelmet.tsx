import { FootballHelmetIcon as FootballHelmetBoldIcon } from "../bold/FootballHelmet";
import { FootballHelmetIcon as FootballHelmetDuotoneIcon } from "../duotone/FootballHelmet";
import { FootballHelmetIcon as FootballHelmetFillIcon } from "../fill/FootballHelmet";
import { FootballHelmetIcon as FootballHelmetLightIcon } from "../light/FootballHelmet";
import { FootballHelmetIcon as FootballHelmetRegularIcon } from "../regular/FootballHelmet";
import { FootballHelmetIcon as FootballHelmetThinIcon } from "../thin/FootballHelmet";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FootballHelmetThinIcon,
	light: FootballHelmetLightIcon,
	regular: FootballHelmetRegularIcon,
	bold: FootballHelmetBoldIcon,
	fill: FootballHelmetFillIcon,
	duotone: FootballHelmetDuotoneIcon,
} as const;

export function FootballHelmetIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FootballHelmetIcon as FootballHelmet };
