import { StarOfDavidIcon as StarOfDavidBoldIcon } from "../bold/StarOfDavid";
import { StarOfDavidIcon as StarOfDavidDuotoneIcon } from "../duotone/StarOfDavid";
import { StarOfDavidIcon as StarOfDavidFillIcon } from "../fill/StarOfDavid";
import { StarOfDavidIcon as StarOfDavidLightIcon } from "../light/StarOfDavid";
import { StarOfDavidIcon as StarOfDavidRegularIcon } from "../regular/StarOfDavid";
import { StarOfDavidIcon as StarOfDavidThinIcon } from "../thin/StarOfDavid";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: StarOfDavidThinIcon,
	light: StarOfDavidLightIcon,
	regular: StarOfDavidRegularIcon,
	bold: StarOfDavidBoldIcon,
	fill: StarOfDavidFillIcon,
	duotone: StarOfDavidDuotoneIcon,
} as const;

export function StarOfDavidIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { StarOfDavidIcon as StarOfDavid };
