import { WallIcon as WallBoldIcon } from "../bold/Wall";
import { WallIcon as WallDuotoneIcon } from "../duotone/Wall";
import { WallIcon as WallFillIcon } from "../fill/Wall";
import { WallIcon as WallLightIcon } from "../light/Wall";
import { WallIcon as WallRegularIcon } from "../regular/Wall";
import { WallIcon as WallThinIcon } from "../thin/Wall";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: WallThinIcon,
	light: WallLightIcon,
	regular: WallRegularIcon,
	bold: WallBoldIcon,
	fill: WallFillIcon,
	duotone: WallDuotoneIcon,
} as const;

export function WallIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { WallIcon as Wall };
