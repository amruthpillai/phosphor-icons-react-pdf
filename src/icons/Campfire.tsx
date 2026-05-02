import { CampfireIcon as CampfireBoldIcon } from "../bold/Campfire";
import { CampfireIcon as CampfireDuotoneIcon } from "../duotone/Campfire";
import { CampfireIcon as CampfireFillIcon } from "../fill/Campfire";
import { CampfireIcon as CampfireLightIcon } from "../light/Campfire";
import { CampfireIcon as CampfireRegularIcon } from "../regular/Campfire";
import { CampfireIcon as CampfireThinIcon } from "../thin/Campfire";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CampfireThinIcon,
	light: CampfireLightIcon,
	regular: CampfireRegularIcon,
	bold: CampfireBoldIcon,
	fill: CampfireFillIcon,
	duotone: CampfireDuotoneIcon,
} as const;

export function CampfireIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CampfireIcon as Campfire };
