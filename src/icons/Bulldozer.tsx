import { BulldozerIcon as BulldozerBoldIcon } from "../bold/Bulldozer";
import { BulldozerIcon as BulldozerDuotoneIcon } from "../duotone/Bulldozer";
import { BulldozerIcon as BulldozerFillIcon } from "../fill/Bulldozer";
import { BulldozerIcon as BulldozerLightIcon } from "../light/Bulldozer";
import { BulldozerIcon as BulldozerRegularIcon } from "../regular/Bulldozer";
import { BulldozerIcon as BulldozerThinIcon } from "../thin/Bulldozer";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BulldozerThinIcon,
	light: BulldozerLightIcon,
	regular: BulldozerRegularIcon,
	bold: BulldozerBoldIcon,
	fill: BulldozerFillIcon,
	duotone: BulldozerDuotoneIcon,
} as const;

export function BulldozerIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BulldozerIcon as Bulldozer };
