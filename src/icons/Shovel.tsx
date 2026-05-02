import { ShovelIcon as ShovelBoldIcon } from "../bold/Shovel";
import { ShovelIcon as ShovelDuotoneIcon } from "../duotone/Shovel";
import { ShovelIcon as ShovelFillIcon } from "../fill/Shovel";
import { ShovelIcon as ShovelLightIcon } from "../light/Shovel";
import { ShovelIcon as ShovelRegularIcon } from "../regular/Shovel";
import { ShovelIcon as ShovelThinIcon } from "../thin/Shovel";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ShovelThinIcon,
	light: ShovelLightIcon,
	regular: ShovelRegularIcon,
	bold: ShovelBoldIcon,
	fill: ShovelFillIcon,
	duotone: ShovelDuotoneIcon,
} as const;

export function ShovelIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ShovelIcon as Shovel };
