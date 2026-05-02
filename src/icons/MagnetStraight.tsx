import { MagnetStraightIcon as MagnetStraightBoldIcon } from "../bold/MagnetStraight";
import { MagnetStraightIcon as MagnetStraightDuotoneIcon } from "../duotone/MagnetStraight";
import { MagnetStraightIcon as MagnetStraightFillIcon } from "../fill/MagnetStraight";
import { MagnetStraightIcon as MagnetStraightLightIcon } from "../light/MagnetStraight";
import { MagnetStraightIcon as MagnetStraightRegularIcon } from "../regular/MagnetStraight";
import { MagnetStraightIcon as MagnetStraightThinIcon } from "../thin/MagnetStraight";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MagnetStraightThinIcon,
	light: MagnetStraightLightIcon,
	regular: MagnetStraightRegularIcon,
	bold: MagnetStraightBoldIcon,
	fill: MagnetStraightFillIcon,
	duotone: MagnetStraightDuotoneIcon,
} as const;

export function MagnetStraightIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MagnetStraightIcon as MagnetStraight };
