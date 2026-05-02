import { PopcornIcon as PopcornBoldIcon } from "../bold/Popcorn";
import { PopcornIcon as PopcornDuotoneIcon } from "../duotone/Popcorn";
import { PopcornIcon as PopcornFillIcon } from "../fill/Popcorn";
import { PopcornIcon as PopcornLightIcon } from "../light/Popcorn";
import { PopcornIcon as PopcornRegularIcon } from "../regular/Popcorn";
import { PopcornIcon as PopcornThinIcon } from "../thin/Popcorn";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PopcornThinIcon,
	light: PopcornLightIcon,
	regular: PopcornRegularIcon,
	bold: PopcornBoldIcon,
	fill: PopcornFillIcon,
	duotone: PopcornDuotoneIcon,
} as const;

export function PopcornIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PopcornIcon as Popcorn };
