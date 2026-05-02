import { MoonStarsIcon as MoonStarsBoldIcon } from "../bold/MoonStars";
import { MoonStarsIcon as MoonStarsDuotoneIcon } from "../duotone/MoonStars";
import { MoonStarsIcon as MoonStarsFillIcon } from "../fill/MoonStars";
import { MoonStarsIcon as MoonStarsLightIcon } from "../light/MoonStars";
import { MoonStarsIcon as MoonStarsRegularIcon } from "../regular/MoonStars";
import { MoonStarsIcon as MoonStarsThinIcon } from "../thin/MoonStars";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MoonStarsThinIcon,
	light: MoonStarsLightIcon,
	regular: MoonStarsRegularIcon,
	bold: MoonStarsBoldIcon,
	fill: MoonStarsFillIcon,
	duotone: MoonStarsDuotoneIcon,
} as const;

export function MoonStarsIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MoonStarsIcon as MoonStars };
