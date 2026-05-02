import { SprayBottleIcon as SprayBottleBoldIcon } from "../bold/SprayBottle";
import { SprayBottleIcon as SprayBottleDuotoneIcon } from "../duotone/SprayBottle";
import { SprayBottleIcon as SprayBottleFillIcon } from "../fill/SprayBottle";
import { SprayBottleIcon as SprayBottleLightIcon } from "../light/SprayBottle";
import { SprayBottleIcon as SprayBottleRegularIcon } from "../regular/SprayBottle";
import { SprayBottleIcon as SprayBottleThinIcon } from "../thin/SprayBottle";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SprayBottleThinIcon,
	light: SprayBottleLightIcon,
	regular: SprayBottleRegularIcon,
	bold: SprayBottleBoldIcon,
	fill: SprayBottleFillIcon,
	duotone: SprayBottleDuotoneIcon,
} as const;

export function SprayBottleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SprayBottleIcon as SprayBottle };
